const TEAM = [
  {
    name: "Rob Doughty",
    title: "Founder",
    bio: "Rob started Lanna Labs in 2026 after spending two years building websites for family and friends. The Lanna name was inspired by his favourite region of Thailand where he spends a lot of his time.",
    photo: null,
  },
  {
    name: "Crissy",
    title: "COO",
    bio: "Christine is the proud owner of Ayuri Beauty Salon and our flagship website Ayuribeauty.com. She is responsible for the successful running of Lanna Labs behind the scenes.",
    photo: "/christine.jpg",
  },
];

import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-28 px-6 bg-card">
      <div className="mx-auto max-w-5xl">

        {/* Centered header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl leading-tight">
            The people behind the work.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted leading-loose">
            Lanna Labs is a small, focused studio built on a simple idea: every business deserves a website it can be proud of.
          </p>
        </div>

        {/* Team grid — photo on top, info below */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {TEAM.map((member) => (
            <div key={member.name}>
              {/* Photo card */}
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/4.5", background: "#2a2a2e" }}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-4xl font-semibold text-muted select-none tracking-tight">
                      RD
                    </span>
                  </div>
                )}
              </div>

              {/* Info below card */}
              <div className="mt-5">
                <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                <div className="mt-1 text-base text-muted">{member.title}</div>
                <p className="mt-4 text-lg text-muted leading-loose">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
