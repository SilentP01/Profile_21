"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

export function ResumeActions() {
  return (
    <div className="no-print flex flex-col gap-3 sm:flex-row">
      <Link
        href="/"
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-frost transition hover:border-mint/70 hover:bg-white/[0.1]"
      >
        <ArrowLeft className="h-4 w-4" />
        Portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-frost px-5 text-sm font-semibold text-ink-950 transition hover:bg-mint"
      >
        <Printer className="h-4 w-4" />
        Print
      </button>
    </div>
  );
}
