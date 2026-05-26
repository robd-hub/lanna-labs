const LOGOS = [
  "Anthropic",
  "Notion",
  "HeyGen",
  "Make",
  "n8n",
  "OpenAI",
  "Zapier",
  "Durable",
];

export default function LogoBar() {
  return (
    <section className="border-y border-border py-5 px-6">
      <div className="flex items-center gap-8">
        <p className="shrink-0 text-xs text-muted tracking-wide whitespace-nowrap">
          Rob has worked with
        </p>
        <div className="overflow-hidden flex-1">
          <div
            className="flex w-max items-center"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-medium text-muted tracking-wide pr-16"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
