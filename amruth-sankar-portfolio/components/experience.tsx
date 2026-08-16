import { HeartHandshake, CheckCircle2 } from 'lucide-react'
import { activities } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience & Activities"
          title="Service, leadership and community engagement"
        />

        <div className="mt-14 space-y-6">
          {activities.map((activity, i) => (
            <Reveal
              key={activity.title}
              delay={i * 100}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="absolute right-0 top-0 size-40 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/10 blur-3xl" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <HeartHandshake className="size-6" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {activity.title}
                    </h3>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {activity.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {activity.org}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {activity.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-foreground/85">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
