import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        {/* Text column */}
        <div>
          <h2 className="mb-8 text-3xl font-semibold text-foreground md:text-4xl">
            Lanna Labs.
          </h2>

          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              Rob started Lanna Labs after noticing the same problem everywhere: small businesses doing great work, let down by the website representing them. He built the studio to close that gap.
            </p>
            <p>
              The name Lanna comes from the ancient kingdom of northern Thailand —
              a region Rob loves and returns to often. It reflects the studio&apos;s
              values: craft, calm, and doing things properly.
            </p>
            <p>
              Today Lanna Labs helps small and medium companies dramtically increase their online presence
              and credibilty by creating high quality, agile websites using the latest design and technology.

            </p>
          </div>
        </div>

        {/* Photo column */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src="/thailand.jpg"
            alt="Doi Inthanon, Lanna region, Thailand"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
