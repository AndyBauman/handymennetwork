import { useState } from "react";

const steps = [
  { id: "placed", label: "Order placed", customer: "We are finding a vetted pro near you." },
  {
    id: "offers",
    label: "Matching",
    customer: "We’re offering your job to qualified pros who are free and in range.",
  },
  {
    id: "accepted",
    label: "Pro assigned",
    customer: "A vetted pro accepted — chosen for skills, reviews, and fit for this repair.",
  },
  { id: "enroute", label: "On the way", customer: "They are driving to you. About 12 minutes." },
  { id: "arrived", label: "Arrived", customer: "They are at your door." },
  { id: "working", label: "Working", customer: "Repairs are underway." },
  { id: "done", label: "Completed", customer: "All done! How did we do?" },
] as const;

export function TrackingDemo() {
  const [idx, setIdx] = useState(3);

  return (
    <div className="rounded-2xl border-2 border-brand-green/25 bg-white p-5 sm:p-6 shadow-sm">
      <h3 className="font-display text-2xl font-bold text-brand-green">Track your repair</h3>
      <p className="mt-2 text-lg text-brand-charcoal">
        Simple words at every step — no jargon. (No public worker profiles on the website.)
      </p>
      <ol className="mt-5 space-y-3" aria-label="Job status">
        {steps.map((s, i) => {
          const active = i === idx;
          const done = i < idx;
          return (
            <li
              key={s.id}
              className={`rounded-xl px-4 py-3 text-lg border-2 ${
                active
                  ? "border-brand-teal bg-brand-stone font-semibold"
                  : done
                    ? "border-brand-green/20 bg-brand-cream/50"
                    : "border-transparent opacity-60"
              }`}
            >
              <span className="text-brand-green font-bold">{s.label}</span>
              {active ? (
                <span className="block mt-1 text-brand-charcoal">{s.customer}</span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-12 px-4 rounded-xl bg-brand-green text-brand-cream font-bold"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
        >
          Previous step
        </button>
        <button
          type="button"
          className="min-h-12 px-4 rounded-xl bg-brand-amber text-brand-charcoal font-bold"
          onClick={() => setIdx((i) => Math.min(steps.length - 1, i + 1))}
        >
          Next step
        </button>
      </div>
      <p className="mt-4 text-base text-brand-charcoal/80">
        Demo only — live tracking updates automatically in the app.
      </p>
    </div>
  );
}
