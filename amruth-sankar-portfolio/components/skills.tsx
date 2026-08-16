import { Code2, Users } from 'lucide-react'
import { technicalSkills, interpersonalSkills } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Professional'] as const

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/2 size-[360px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Competencies"
          title="Building strong technical and human foundations"
          description="A mix of programming, electronics fundamentals and the interpersonal strengths honed through team and community work."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Technical */}
          <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Code2 className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">
                Technical Skills
              </h3>
            </div>
            <ul className="mt-6 space-y-6">
              {technicalSkills.map((skill) => {
                const activeIndex = LEVELS.indexOf(
                  skill.level as (typeof LEVELS)[number],
                )
                return (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs font-medium text-primary">
                        {skill.level}
                      </span>
                    </div>
                    <div className="mt-2 flex gap-1.5" aria-hidden="true">
                      {LEVELS.map((_, i) => (
                        <span
                          key={i}
                          className={`h-2 flex-1 rounded-full transition-colors ${
                            i <= activeIndex ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-wide text-muted-foreground">
                      {LEVELS.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* Interpersonal */}
          <Reveal delay={120} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Users className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">
                Interpersonal Skills
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {interpersonalSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-2xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-display text-sm font-semibold text-primary">
                    {skill.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {skill.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
