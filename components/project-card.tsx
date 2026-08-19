import Link from 'next/link'
import { ArrowUpRight, Cpu, Code2, FileText, CircuitBoard } from 'lucide-react'
import type { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

const categoryIcon = {
  'Electronics / VLSI': Cpu,
  'Python / C Software': Code2,
  'Academic Research': FileText,
  'Embedded Systems': CircuitBoard,
} as const

const statusStyle = {
  Upcoming: 'border-primary/30 bg-primary/10 text-primary',
  'In Progress': 'border-chart-4/40 bg-chart-4/10 text-chart-4',
  Planned: 'border-border bg-muted text-muted-foreground',
} as const

export function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category]
  
  // Check if a PDF link is available in project data
  const hasPdf = Boolean(project.pdfUrl)
  const targetHref = project.pdfUrl ? project.pdfUrl : `/projects/${project.slug}`

  return (
    <Link
      href={targetHref}
      target={hasPdf ? '_blank' : '_self'}
      rel={hasPdf ? 'noopener noreferrer' : undefined}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
    >
      <div className="absolute right-0 top-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Icon className="size-5" />
        </span>
        <span
          className={cn(
            'rounded-full border px-2.5 py-1 text-[11px] font-medium',
            statusStyle[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {project.category}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-balance">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-[11px] text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {hasPdf ? 'View Documentation (PDF)' : 'Details coming soon'}
        <ArrowUpRight className="size-4" />
      </div>
    </Link>
  )
}
