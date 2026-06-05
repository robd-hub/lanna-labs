const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "A free 30-minute call to understand your business, your goals, and what you need your website to do.",
  },
  {
    num: "02",
    title: "Design",
    body: "A custom design built around your brand. You see exactly how your site will look before a line of code is written.",
  },
  {
    num: "03",
    title: "Build",
    body: "We build fast, modern, and fully yours — optimised for speed, mobile, and search from day one.",
  },
  {
    num: "04",
    title: "Handoff",
    body: "You get full ownership of your site. We walk you through everything and stay on hand if you need us.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          From brief to live in four steps.
        </h2>
      </div>

      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
        {STEPS.map((step) => (
          <div key={step.num} className="bg-card p-8">
            <p className="mb-4 text-sm font-semibold text-accent">{step.num}</p>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="text-base text-muted leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
