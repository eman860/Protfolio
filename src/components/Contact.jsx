import React, { useState } from 'react';
import { personalInfo, contacts } from '../data/portfolioData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    setFormSubmitted(true);
    form.reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Meaningful</span>.
          </h2>
          <p className="section-subtitle">
            Have an idea, engineering opportunity, or project? Let's talk.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy Links */}
          <div className="contact-info-panel glass-panel">
            <h3 className="contact-panel-title">Direct Communication Channels</h3>
            <p className="contact-panel-sub">
              I am actively seeking software developer internships, full-time engineering roles, and high-impact collaborative projects.
            </p>

            <div className="contact-cards-list">
              {contacts.map((item) => (
                <div className="contact-item-row" key={item.id}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">{item.title}</span>
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="contact-item-val"
                      data-cursor="LINK"
                    >
                      {item.value}
                    </a>
                  </div>

                  {item.copyable && (
                    <button
                      type="button"
                      className="btn-copy-tag"
                      onClick={() => handleCopy(item.id, item.value)}
                      title="Copy to clipboard"
                    >
                      {copiedId === item.id ? 'Copied! ✓' : 'Copy'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-status-card">
              <span className="status-live-dot" />
              <div>
                <span className="status-title">Current Status</span>
                <p className="status-desc">
                  Based in Tamil Nadu, India. Open to remote, hybrid, and on-site engineering roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Dispatch Form */}
          <div className="contact-form-panel glass-panel">
            <h3 className="contact-panel-title">Send a Direct Message</h3>
            <p className="contact-panel-sub">
              Your inquiry will be answered promptly within 24 business hours.
            </p>

            {formSubmitted ? (
              <div className="form-success-banner">
                <span className="success-icon">✓</span>
                <h4 className="success-title">Message Received!</h4>
                <p className="success-text">
                  Thank you for reaching out. I'll get back to you shortly at the provided email.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="alex@company.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Project / Inquiry Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your project, team opportunity, or timeline..."
                    required
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  data-cursor="SEND"
                >
                  <span>Transmit Message</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
