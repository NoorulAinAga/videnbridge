"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", company: "", service: "", message: "" };

export default function ContactSection({ contact }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not send your enquiry.");
      setStatus({ type: "success", message: result.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">CONTACT US</p>
          <h2>Let&apos;s talk about your next opportunity.</h2>
          <p>Tell us what you are researching, monitoring, or trying to understand. Our team can follow up about the right intelligence support for your needs.</p>
          <div className="contact-detail">
            <span className="contact-detail-icon">@</span>
            <div><small>Email us</small><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          </div>
          <div className="contact-note">Your information will be used to respond to your enquiry. Please avoid sending confidential or sensitive information through this form.</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <p className="eyebrow">SEND AN ENQUIRY</p>
            <h3>How can we help?</h3>
          </div>
          <div className="form-two-col">
            <label><span className="label-text">Full name <span>*</span></span><input name="name" value={form.name} onChange={updateField} autoComplete="name" required maxLength={120} placeholder="Your full name" /></label>
            <label><span className="label-text">Business email <span>*</span></span><input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
          </div>
          <div className="form-two-col">
            <label>Company<input name="company" value={form.company} onChange={updateField} autoComplete="organization" maxLength={180} placeholder="Company name" /></label>
            <label><span className="label-text">Service of interest <span>*</span></span>
              <select name="service" value={form.service} onChange={updateField} required>
                <option value="">Select a service</option>
                <option>Patent Intelligence</option>
                <option>Market Intelligence</option>
                <option>Technology Watch</option>
                <option>IT Solutions</option>
                <option>Other / Not sure yet</option>
              </select>
            </label>
          </div>
          <label><span className="label-text">Tell us about your requirement <span>*</span></span><textarea name="message" value={form.message} onChange={updateField} required maxLength={5000} rows={5} placeholder="Share a little about your research question or business need..." /></label>
          <button className="button form-submit" type="submit" disabled={submitting}>
            {submitting ? "Sending enquiry..." : "Send Enquiry"} <span>↗</span>
          </button>
          {status.message ? <p className={`form-status ${status.type}`} role="status">{status.message}</p> : null}
          <p className="form-privacy">Fields marked * are required.</p>
        </form>
      </div>
    </section>
  );
}
