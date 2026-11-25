<?php
// Copy this file to mail-config.php and fill in your SMTP details.
// mail-config.php is gitignored — never commit real credentials.
//
// Gmail: use an App Password (Google Account → Security → 2-Step Verification → App Passwords),
// not your normal account password.
return [
    'host' => 'smtp.gmail.com',
    'port' => 587,          // 587 = STARTTLS, 465 = implicit TLS
    'user' => 'your@gmail.com',
    'pass' => 'your-app-password',
    'from' => 'your@gmail.com',
];
