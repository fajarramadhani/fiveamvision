"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

/**
 * Inquiry form — no backend needed for V1: submitting opens WhatsApp
 * (FiveAM's primary conversion channel) with the inquiry pre-filled.
 * All labels, options and the WhatsApp message template come from the dictionary.
 */
export function InquiryForm({ t }: { t: Dict["inquiry"] }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState(t.type.options[0]);
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState(t.budget.options[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      t.waIntro,
      ``,
      `${t.waFields.name}: ${name}`,
      `${t.waFields.contact}: ${contact}`,
      `${t.waFields.type}: ${projectType}`,
      eventDate ? `${t.waFields.date}: ${eventDate}` : null,
      `${t.waFields.budget}: ${budget}`,
      message ? `${t.waFields.about}: ${message}` : null,
    ].filter((line): line is string => line !== null);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full border border-bone/20 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-steel/60 transition-colors focus:border-mist focus:outline-none";
  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-widest text-steel/85";

  const selectWrapperClass = "relative";
  const chevron = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
    >
      <svg
        viewBox="0 0 12 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2 w-3 text-steel"
      >
        <path d="M1 1.5 6 6.5 11 1.5" />
      </svg>
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className={labelClass}>
            {t.name.label}
          </label>
          <input
            id="inq-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.name.placeholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-contact" className={labelClass}>
            {t.contact.label}
          </label>
          <input
            id="inq-contact"
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={t.contact.placeholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inq-type" className={labelClass}>
          {t.type.label}
        </label>
        <div className={selectWrapperClass}>
          <select
            id="inq-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={`${inputClass} appearance-none bg-night pr-10`}
          >
            {t.type.options.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {chevron}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-date" className={labelClass}>
            {t.date.label}
          </label>
          <input
            id="inq-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label htmlFor="inq-budget" className={labelClass}>
            {t.budget.label}
          </label>
          <div className={selectWrapperClass}>
            <select
              id="inq-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${inputClass} appearance-none bg-night pr-10`}
            >
              {t.budget.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {chevron}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className={labelClass}>
          {t.message.label}
        </label>
        <textarea
          id="inq-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.message.placeholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        {t.submit}
      </button>

      <p className="text-center text-xs leading-relaxed text-steel/85">
        {t.disclaimer}
      </p>
    </form>
  );
}
