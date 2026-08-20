import { GraduationCap, Users, Award } from 'lucide-react'
import { education } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A disciplined, well-rounded engineer in the making"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Bio */}
          <Reveal className="space-y-5">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I&apos;m an Electronics and Communication Engineering undergraduate at
              RIT Kottayam with a strong academic foundation and a genuine
              curiosity for how hardware and software come together.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Beyond academics, I stay actively involved in community work — I
              served as an <span className="text-foreground">NSS unit leader</span>,
              an experience that shaped my sense of discipline, responsibility and
              teamwork. I believe in continuous learning and building things that
              matter.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: GraduationCap, label: 'B.Tech ECE', sub: '1st Year' },
                { icon: Award, label: '97.25%', sub: 'HSE Score' },
                { icon: Users, label: 'NSS Lead', sub: 'Volunteer' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <item.icon className="mx-auto size-5 text-primary" />
                  <p className="mt-2 font-display text-sm font-bold">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Education timeline */}
          <Reveal delay={120}>
            <h3 className="mb-6 font-display text-lg font-semibold">
              Education Timeline
            </h3>
            <ol className="relative border-l border-border pl-6">
              {education.map((item, i) => (
                <li key={item.degree} className="relative pb-8 last:pb-0">
                  <span
                    className={`absolute -left-[31px] flex size-4 items-center justify-center rounded-full border-2 ${
                      item.status === 'current'
                        ? 'border-primary bg-primary'
                        : 'border-primary/50 bg-background'
                    }`}
                  >
                    {item.status === 'current' && (
                      <span className="size-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </span>
                  <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-medium text-primary">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="mt-1.5 font-display text-base font-semibold text-balance">
                      {item.degree}
                    </h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.place}
                    </p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
