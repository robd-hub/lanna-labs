const TEAM = [
  {
    name: "Rob Doughty",
    title: "CEO / Talent",
    bio: "Rob started Lanna Labs in 2026 after spending two years building websites for family and friends. The Lanna name was inspired from his favourite region of Thailand where he spends a lot of his time.",
    photo: null,
  },
  {
    name: "Christine Regalado",
    title: "COO",
    bio: "Christine is the proud owner of Ayuri Beauty Salon and our flagship website Ayuribeauty.com. She is responsible for the successful running of Lanna Labs behind the scenes.",
    photo: "/christine.jpg",
  },
];

import Image from "next/image";

export default function Team() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Centered header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl leading-tight">
            The people behind the work.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted leading-relaxed">
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
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                    [Photo]
                  </div>
                )}
              </div>

              {/* Info below card */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <div className="mt-1 text-sm text-muted">{member.title}</div>
                <p className="mt-4 text-sm text-muted leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
