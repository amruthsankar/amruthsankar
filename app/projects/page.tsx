import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'All Projects & Research — Amruth Sankar R P',
  description:
    'A complete showcase of upcoming electronics, VLSI, software and academic research projects by Amruth Sankar R P.',
}

const categories = [
  'Embedded Systems',
  'Electronics / VLSI',
  'Python / C Software',
  'Academic Research',
] as const

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen px-4 pb-24 pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
          <ThemeToggle />
        </div>

        <Reveal className="mt-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Projects &amp; Research
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A living archive of everything I&apos;m building and exploring —
            from electronics and VLSI to software tools and academic papers.
            Each card will grow with details, code and results over time.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category)
            if (items.length === 0) return null
            return (
              <section key={category}>
                <Reveal className="mb-6 flex items-center gap-3">
                  <h2 className="font-display text-xl font-semibold">
                    {category}
                  </h2>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {items.length}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 80} className="h-full">
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}
