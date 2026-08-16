import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Download, Cpu, Sparkles } from 'lucide-react'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/circuit-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.12] dark:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute left-1/2 top-24 size-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 md:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Available for internships & collaboration
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Amruth Sankar R P</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 flex items-center gap-2 font-display text-lg font-medium text-foreground/90 sm:text-xl">
              <Cpu className="size-5 text-primary" />
              Electronics &amp; Communication Engineering @ RIT Kottayam
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-ring"
              >
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                View Projects
                <ArrowDown className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <Reveal delay={120} className="relative">
            <div className="animate-float relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/25 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] border-2 border-primary/40 bg-card p-2 glow-ring">
                <Image
                  src="/images/profile.png"
                  alt="Portrait of Amruth Sankar R P"
                  width={360}
                  height={360}
                  priority
                  className="size-56 rounded-[1.35rem] object-cover sm:size-72"
                />
              </div>
              <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-2 text-center">
                <p className="font-display text-lg font-bold text-primary">97.25%</p>
                <p className="text-[11px] text-muted-foreground">HSE Score</p>
              </div>
              <div className="glass absolute -right-4 top-6 rounded-2xl px-4 py-2 text-center">
                <p className="font-display text-lg font-bold text-primary">3870</p>
                <p className="text-[11px] text-muted-foreground">KEAM Rank</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
