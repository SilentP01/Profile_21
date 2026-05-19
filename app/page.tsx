"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Download,
  Mail,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  navItems,
  principles,
  profile,
  projects,
  skillGroups,
  timeline,
} from "@/data/portfolio";
import { CopyEmailButton } from "@/components/copy-email-button";

type IconType = ComponentType<{ className?: string }>;

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
} as const;

function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  icon: IconType;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "bg-frost text-ink-950 hover:bg-mint"
      : "border border-white/12 bg-white/[0.06] text-frost hover:border-mint/70 hover:bg-white/[0.1]";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${classes}`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </motion.a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="fine-label">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-frost sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">{body}</p>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/72 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="#" className="focus-ring rounded-lg text-sm font-semibold text-frost">
          {profile.name}
        </Link>
        <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-frost"
            >
              {item.label}
            </a>
          ))}
        </div>
        <CopyEmailButton variant="icon" />
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden pt-28">
      <Image
        src="/hero-lab.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,8,0.96)_0%,rgba(7,9,8,0.78)_44%,rgba(7,9,8,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="section-shell relative pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="fine-label">{profile.role}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-frost sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/resume" icon={Download}>
                View Resume
              </ButtonLink>
              <ButtonLink href="#contact" icon={Mail} variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="glass-panel hidden rounded-lg p-4 lg:block"
          >
            <Image
              src={profile.avatar}
              alt={`${profile.preferredName} stylized avatar`}
              width={640}
              height={640}
              priority
              className="aspect-square rounded-lg object-cover"
            />
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-frost">{profile.education}</p>
              <p className="mt-1 text-sm text-white/70">{profile.institution} &middot; {profile.graduation}</p>
              <p className="mt-1 text-sm text-white/58">{profile.location}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <motion.section id="about" className="section-shell py-20 sm:py-24" {...reveal}>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Building functional software with privacy at the core."
          body={profile.about[0]}
        />
        <div className="space-y-4 text-base leading-7 text-white/68">
          {profile.about.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="glass-panel rounded-lg p-5">
            <p className="fine-label">Education</p>
            <p className="mt-3 text-lg font-semibold text-frost">{profile.education}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((item, index) => (
          <div key={item} className="glass-panel rounded-lg p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint/12 text-mint">
              {index === 0 ? (
                <ShieldCheck className="h-5 w-5" />
              ) : index === 1 ? (
                <Sparkles className="h-5 w-5" />
              ) : index === 2 ? (
                <Code2 className="h-5 w-5" />
              ) : (
                <Bot className="h-5 w-5" />
              )}
            </div>
            <p className="mt-5 text-base font-medium leading-6 text-frost">{item}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  return (
    <motion.section id="projects" className="bg-white/[0.025] py-20 sm:py-24" {...reveal}>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Independent projects focused on privacy, peer-to-peer systems, and mobile utility."
          body="My portfolio highlights tools I've built to solve real problems, starting with Barta—a deployed peer-to-peer communication app."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-panel overflow-hidden rounded-lg transition hover:border-mint/35"
            >
              <div className="relative aspect-[1.34] overflow-hidden border-b border-white/10 bg-ink-900">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={1000}
                  height={720}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-honey">
                    {project.eyebrow}
                  </p>
                  <span className="rounded-md border border-mint/30 bg-mint/10 px-2 py-1 text-xs font-semibold text-mint">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-frost">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-l border-mint/60 pl-4">
                  <p className="text-sm font-semibold text-frost">{project.role}</p>
                  <p className="mt-1 text-sm leading-6 text-white/68">{project.roleDetails}</p>
                </div>
                <div className="mt-5 space-y-2">
                  {project.challenges.map((challenge) => (
                    <p key={challenge} className="text-sm leading-6 text-white/64">
                      {challenge}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.links.demo}
                    target={project.links.demo.startsWith("http") ? "_blank" : undefined}
                    rel={project.links.demo.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition hover:border-mint/60 hover:text-mint"
                    aria-label={`${project.title} demo`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition hover:border-mint/60 hover:text-mint"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  return (
    <motion.section id="skills" className="section-shell py-20 sm:py-24" {...reveal}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building modern, privacy-focused applications."
          body="My experience spans from building real-time WebRTC connections and managing backend performance to creating clean frontend interfaces."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-panel rounded-lg p-5">
              <h3 className="text-base font-semibold text-frost">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TimelineSection() {
  return (
    <motion.section className="bg-white/[0.025] py-20 sm:py-24" {...reveal}>
      <div className="section-shell">
        <SectionHeading
          eyebrow="Direction"
          title="A personal space to document and share my ongoing projects."
          body="This portfolio reflects my self-driven learning journey, showcasing projects that combine my academic background with practical, real-world development."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.title} className="glass-panel rounded-lg p-6">
              <p className="text-sm font-semibold text-coral">{item.year}</p>
              <h3 className="mt-4 text-lg font-semibold text-frost">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section id="contact" className="section-shell py-20 sm:py-24" {...reveal}>
      <div className="grid gap-10 rounded-lg border border-white/10 bg-frost p-6 text-ink-950 shadow-glow sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-700">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Open to conversations about privacy-first software.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-700">
            I am always open to discussing privacy-focused tools, peer-to-peer systems, or exchanging ideas about ethical software development. Feel free to reach out directly at <a href={`mailto:${profile.email}`} className="font-semibold text-ink-900 hover:underline">{profile.email}</a> or connect via GitHub.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <CopyEmailButton />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-ink-950/15 px-5 text-sm font-semibold text-ink-950 transition hover:bg-ink-950 hover:text-frost"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
      <footer className="section-shell pb-8 text-sm text-white/45">
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name}</p>
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span>{profile.location} - Built with Next.js, Tailwind CSS, and Framer Motion.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
