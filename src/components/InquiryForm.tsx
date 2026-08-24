"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/site";

const projectTypes = ["Wedding", "Graduation", "Personal / Creator", "Brand", "Other"];

const budgetOptions = [
  "Not sure yet",
  "< Rp1 juta",
  "Rp1–3 juta",
  "Rp3–5 juta",
  "Rp5–10 juta",
  "> Rp10 juta",
];

/**
 * Inquiry form — no backend needed for V1: submitting opens WhatsApp
 * (FiveAM's primary conversion channel) with the inquiry pre-filled.
 */
export function InquiryForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi FiveAM! I'd like to start a project.`,
      ``,
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Project Type: ${projectType}`,
      eventDate ? `Event / Project Date: ${eventDate}` : null,
      `Estimated Budget: ${budget}`,
      message ? `About the project: ${message}` : null,
    ].filter((line): line is string => line !== null);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full border border-bone/20 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-steel/50 transition-colors focus:border-mist focus:outline-none";
  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-widest text-steel/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className={labelClass}>
            Name
          </label>
          <input
            id="inq-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-contact" className={labelClass}>
            WhatsApp / Email
          </label>
          <input
            id="inq-contact"
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+62… or you@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inq-type" className={labelClass}>
          Project Type
        </label>
        <select
          id="inq-type"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className={`${inputClass} appearance-none bg-night`}
        >
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-date" className={labelClass}>
            Event / Project Date
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
            Estimated Budget
          </label>
          <select
            id="inq-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={`${inputClass} appearance-none bg-night`}
          >
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className={labelClass}>
          Tell Us About Your Project
        </label>
        <textarea
          id="inq-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan idemu, momennya, atau brand-nya…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Inquiry
      </button>

      <p className="text-center text-xs leading-relaxed text-steel/70">
        Submitting opens WhatsApp with your inquiry pre-filled — no account needed.
      </p>
    </form>
  );
}
