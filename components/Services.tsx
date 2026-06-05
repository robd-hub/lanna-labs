import Link from "next/link";

const FEATURES = [
  {
    title: "Custom design, no templates",
    body: "Every site is built from scratch to fit your business, not adapted from a theme someone else is already using.",
  },
  {
    title: "Fixed price, no surprises",
    body: "Clear scope, timeline, and price upfront. No hourly billing, no scope creep, no mystery invoices.",
  },
  {
    title: "Fast, modern, and yours",
    body: "Sites built to load in under 2 seconds, look great on any device, and that you own outright.",
  },
  {
    title: "One point of contact",
    body: "You work directly with the person building your site, start to finish. No account managers, no handoffs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          What we build, and why it matters.
        </h2>
        <Link
          href="/services"
          className="shrink-0 text-base text-muted hover:text-foreground transition-colors"
        >
          See all services →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
          >
            <p className="mb-4 text-sm font-semibold text-accent">0{i + 1}</p>
            <p className="mb-3 font-semibold text-foreground text-lg leading-snug">
              {f.title}
            </p>
            <p className="text-base text-muted leading-loose">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
