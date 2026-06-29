"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const projectTypes = [
  "ERP & Payroll Automation",
  "Computer Vision",
  "Workflow Automation",
  "Marketing Automation",
  "ESS / HR Portal",
  "AI Dashboards",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      setMessage("Thank you. Oglas AI will reply to your enquiry shortly.");
      return;
    }

    setStatus("error");
    setMessage("Something went wrong. Please email md@oglasglobal.com directly.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Company" name="company" placeholder="Company name" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
        <Field label="Phone" name="phone" placeholder="+971" />
      </div>

      <label className="grid gap-2 text-sm font-semibold text-onyx">
        Project type
        <select
          name="projectType"
          required
          className="h-12 rounded-md border border-black/10 bg-white px-4 text-sm font-medium text-onyx outline-none transition focus:border-emerald"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-onyx">
        Project brief
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us what you want to build, automate, or improve."
          className="resize-none rounded-md border border-black/10 bg-white px-4 py-3 text-sm font-medium text-onyx outline-none transition focus:border-emerald"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : "Book a Free Consultation"}
      </button>

      {message ? (
        <p
          className={
            status === "success"
              ? "rounded-md border border-emerald/20 bg-emerald/10 p-3 text-sm font-medium text-emerald"
              : "rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-onyx">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-md border border-black/10 bg-white px-4 text-sm font-medium text-onyx outline-none transition focus:border-emerald"
      />
    </label>
  );
}
