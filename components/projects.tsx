import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'

export function Projects() {
  const featured = projects.slice(0, 3)
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects & Research"
          title="What I'm building next"
          description="A growing collection of upcoming electronics projects, coding implementations and academic research. Check back as each one takes shape."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
