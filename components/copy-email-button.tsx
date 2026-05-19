"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { profile } from "@/data/portfolio";

export function CopyEmailButton({ variant = "primary" }: { variant?: "primary" | "icon" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      window.location.href = `mailto:${profile.email}`;
    } catch (err) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleCopy}
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition hover:border-mint/60 hover:text-mint"
        aria-label="Copy Email"
        title="Copy email to clipboard"
      >
        {copied ? <Check className="h-4 w-4 text-mint" /> : <Mail className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink-950 px-5 text-sm font-semibold text-frost transition hover:bg-ink-800"
    >
      {copied ? <Check className="h-4 w-4 text-mint" /> : <Mail className="h-4 w-4" />}
      {copied ? "Copied!" : "Email"}
    </button>
  );
}
