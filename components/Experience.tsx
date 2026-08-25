import { experience, education, languages } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-14 font-mono text-sm tracking-[0.3em] text-accent uppercase">
          Experience
        </p>
      </Reveal>

      <div className="relative max-w-4xl">
        <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block" />

        <div className="space-y-16">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.06} className="relative sm:pl-10">
              <div className="absolute left-[-4.5px] top-1.5 hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_var(--accent)] sm:block" />

              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium">
                  {role.company}
                </h3>
                <span className="font-mono text-xs text-muted">{role.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-2">{role.role}</p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {b}
                  </li>
                ))}
              </ul>

              {role.clients && (
                <div className="mt-6 grid gap-4 sm:grid-cols-1">
                  {role.clients.map((c) => (
                    <div key={c.name} className="card-border rounded-xl p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-base font-medium">{c.name}</h4>
                        <span className="font-mono text-xs text-muted">{c.period}</span>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted">
                        {c.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.15} className="mt-20 flex flex-col gap-8 sm:flex-row sm:gap-20">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Education</p>
          <p className="font-medium">{education.degree}</p>
          <p className="text-sm text-muted">
            {education.school} · {education.location} · {education.period}
          </p>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Languages</p>
          <p className="text-sm text-muted">{languages.join(" · ")}</p>
        </div>
      </Reveal>
    </section>
  );
}
