export default function AboutHero() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center px-6 text-center"
      style={{
        minHeight: "calc(40svh - 5em)",
        paddingTop: "6em",
        paddingBottom: "4em",
        WebkitFontSmoothing: "antialiased",
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1a1a2e 0%, #111113 70%)",
      }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
          Our story
        </p>
        <h1
          className="font-semibold leading-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          A small studio with a simple mission.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-muted leading-relaxed">
          We exist to help small and medium businesses show up online the way they deserve to.
        </p>
      </div>
    </section>
  );
}
