import Link from "next/link";

const STATS = [
  { num: "75%", label: "of users judge credibility by design alone" },
  { num: "88%", label: "won't return after a bad experience" },
  { num: "2.6×", label: "avg. revenue lift from good UX" },
  { num: "53%", label: "abandon if load time exceeds 3 seconds" },
  { num: "38%", label: "stop engaging with unattractive layouts" },
];

export default function Hero() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center px-6 text-center"
      style={{
        minHeight: "calc(80svh - 5em)",
        paddingTop: "6em",
        paddingBottom: "4em",
        fontSize: "1.25vw",
        fontWeight: 400,
        lineHeight: "130%",
        WebkitFontSmoothing: "antialiased",
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1a1a2e 0%, #111113 70%)",
      }}
    >
      <div className="mx-auto w-full max-w-4xl">

        <h1
          className="font-semibold leading-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          Your best work deserves a better website.
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base text-muted leading-relaxed">
          You&apos;ve put years into what you do. Your website should carry that same weight.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold text-foreground">{s.num}</div>
              <div className="mt-0.5 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="https://cal.com/rob-doughty-ffsaqo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/20 text-xs">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
