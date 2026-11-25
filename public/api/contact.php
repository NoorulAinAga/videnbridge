<?php
/**
 * Contact form endpoint (PHP).
 * Accepts JSON POST: name, email, company, service, message
 * Sends enquiry email via SMTP (mail-config.php) or PHP mail().
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$company = trim((string)($data['company'] ?? ''));
$service = trim((string)($data['service'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $service === '' || $message === '') {
    respond(400, 'Please complete all required fields.');
}

if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    respond(400, 'Please enter a valid email address.');
}

if (
    strlen($name) > 120 ||
    strlen($email) > 254 ||
    strlen($company) > 200 ||
    strlen($service) > 200 ||
    strlen($message) > 5000
) {
    respond(400, 'One or more fields are too long.');
}

$contactTo = getenv('CONTACT_TO') ?: 'sadaf.fatima@videnbridge.com';
$contactFrom = getenv('CONTACT_FROM') ?: 'website@videnbridge.com';

$subject = 'New VidenBridge website enquiry — ' . $service;

$text = implode("\n", [
    'New enquiry received from the VidenBridge website.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Service: ' . $service,
    '',
    'Message:',
    $message,
]);

$esc = static fn(string $v): string => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');

$html = '<h2>New VidenBridge website enquiry</h2>'
    . '<p><strong>Name:</strong> ' . $esc($name) . '</p>'
    . '<p><strong>Email:</strong> ' . $esc($email) . '</p>'
    . '<p><strong>Company:</strong> ' . $esc($company !== '' ? $company : 'Not provided') . '</p>'
    . '<p><strong>Service:</strong> ' . $esc($service) . '</p>'
    . '<p><strong>Message:</strong></p>'
    . '<p>' . nl2br($esc($message)) . '</p>';

$sent = false;

$configFile = __DIR__ . '/mail-config.php';
if (is_file($configFile)) {
    $smtp = require $configFile;
    if (is_array($smtp) && !empty($smtp['host']) && !empty($smtp['user'])) {
        $sent = smtp_send($smtp, $contactTo, $contactFrom, $email, $name, $subject, $text, $html);
    }
}

if (!$sent) {
    $headers = 'From: ' . $contactFrom . "\r\n"
        . 'Reply-To: ' . $email . "\r\n"
        . 'MIME-Version: 1.0' . "\r\n"
        . 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $sent = @mail($contactTo, $subject, $html, $headers);
}

if (!$sent) {
    respond(500, 'We could not send your enquiry. Please try again shortly.');
}

respond(200, 'Thank you. Your enquiry has been sent successfully.');

function smtp_send(
    array $cfg,
    string $to,
    string $from,
    string $replyEmail,
    string $replyName,
    string $subject,
    string $text,
    string $html
): bool {
    $host = (string)$cfg['host'];
    $port = (int)($cfg['port'] ?? 587);
    $user = (string)$cfg['user'];
    $pass = (string)$cfg['pass'];
    $mailFrom = (string)($cfg['from'] ?? $user);

    $errno = 0;
    $errstr = '';
    if ($port === 465) {
        $fp = @stream_socket_client('ssl://' . $host . ':' . $port, $errno, $errstr, 20);
    } else {
        $fp = @fsockopen($host, $port, $errno, $errstr, 20);
    }
    if (!$fp) {
        return false;
    }
    stream_set_timeout($fp, 20);

    $read = static function ($fp): string {
        $data = '';
        while ($line = fgets($fp, 515)) {
            $data .= $line;
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };

    $cmd = static function ($fp, string $command) use ($read): string {
        fwrite($fp, $command . "\r\n");
        return $read($fp);
    };

    try {
        $resp = $read($fp);
        if (strncmp($resp, '220', 3) !== 0) {
            fclose($fp);
            return false;
        }

        $resp = $cmd($fp, 'EHLO localhost');
        if (strncmp($resp, '250', 3) !== 0) {
            fclose($fp);
            return false;
        }

        if ($port !== 465) {
            $resp = $cmd($fp, 'STARTTLS');
            if (strncmp($resp, '220', 3) !== 0) {
                fclose($fp);
                return false;
            }
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                fclose($fp);
                return false;
            }
            $resp = $cmd($fp, 'EHLO localhost');
            if (strncmp($resp, '250', 3) !== 0) {
                fclose($fp);
                return false;
            }
        }

        $resp = $cmd($fp, 'AUTH LOGIN');
        if (strncmp($resp, '334', 3) !== 0) {
            fclose($fp);
            return false;
        }
        $resp = $cmd($fp, base64_encode($user));
        if (strncmp($resp, '334', 3) !== 0) {
            fclose($fp);
            return false;
        }
        $resp = $cmd($fp, base64_encode($pass));
        if (strncmp($resp, '235', 3) !== 0) {
            fclose($fp);
            return false;
        }

        $resp = $cmd($fp, 'MAIL FROM:<' . $mailFrom . '>');
        if (strncmp($resp, '250', 3) !== 0) {
            fclose($fp);
            return false;
        }
        $resp = $cmd($fp, 'RCPT TO:<' . $to . '>');
        if (!in_array(substr($resp, 0, 3), ['250', '251'], true)) {
            fclose($fp);
            return false;
        }
        $resp = $cmd($fp, 'DATA');
        if (strncmp($resp, '354', 3) !== 0) {
            fclose($fp);
            return false;
        }

        $headers = 'From: ' . $mailFrom . "\r\n"
            . 'To: ' . $to . "\r\n"
            . 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n"
            . 'Reply-To: ' . $replyName . ' <' . $replyEmail . ">\r\n"
            . 'MIME-Version: 1.0' . "\r\n"
            . 'Content-Type: multipart/alternative; boundary="videnbridge-boundary"' . "\r\n";

        $body = "--videnbridge-boundary\r\n"
            . "Content-Type: text/plain; charset=UTF-8\r\n\r\n"
            . $text . "\r\n"
            . "--videnbridge-boundary\r\n"
            . "Content-Type: text/html; charset=UTF-8\r\n\r\n"
            . $html . "\r\n"
            . "--videnbridge-boundary--\r\n";

        fwrite($fp, $headers . "\r\n" . $body . ".\r\n");
        $resp = $read($fp);
        $cmd($fp, 'QUIT');
        fclose($fp);
        return strncmp($resp, '250', 3) === 0;
    } catch (Throwable $e) {
        @fclose($fp);
        return false;
    }
}
