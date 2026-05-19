import { ResumeActions } from "@/components/resume-actions";
import { profile, projects, skillGroups } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-8 sm:py-12 dark:bg-neutral-900 print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-4xl px-5 print:px-0">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center print:hidden">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Resume</p>
          </div>
          <ResumeActions />
        </div>

        <article className="mx-auto max-w-4xl bg-white p-8 text-neutral-900 shadow-sm sm:p-12 print:p-0 print:shadow-none">
          <header className="border-b border-neutral-200 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-neutral-600">
              {profile.title}
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-neutral-700">
              {profile.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                {profile.education}, {profile.institution}
              </span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-neutral-900 hover:underline">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-neutral-900 hover:underline">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                {profile.github.replace("https://", "")}
              </a>
            </div>
          </header>

          <div className="mt-8 grid gap-12 md:grid-cols-[240px_1fr] print:grid-cols-[200px_1fr]">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Skills
              </h2>
              <div className="mt-6 space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-semibold text-neutral-900">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Projects
              </h2>
              <div className="mt-6 space-y-8">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-semibold text-neutral-900">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-neutral-500">
                        {project.stack.slice(0, 3).join(" / ")}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      {project.description}
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-semibold text-neutral-800">
                        {project.role}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {project.challenges.join(" ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
