import { ResumeActions } from "@/components/resume-actions";
import { profile, projects, skillGroups } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <main className="min-h-screen py-8 sm:py-12">
      <div className="mx-auto w-full max-w-4xl px-5">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="fine-label">Resume</p>
            <h1 className="mt-3 text-4xl font-semibold text-frost">{profile.name}</h1>
          </div>
          <ResumeActions />
        </div>

        <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur-xl sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none">
          <header className="border-b border-white/10 pb-6 print:border-neutral-200">
            <p className="text-xl font-semibold text-frost print:text-neutral-950">
              {profile.title}
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-white/70 print:text-neutral-700">
              {profile.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/60 print:text-neutral-600">
              <span>{profile.location}</span>
              <span>{profile.education}</span>
              <span>{profile.email}</span>
              <span>{profile.github.replace("https://", "")}</span>
            </div>
          </header>

          <section className="grid gap-8 py-6 md:grid-cols-[0.78fr_1.22fr]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint print:text-neutral-800">
                Skills
              </h2>
              <div className="mt-4 space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-semibold text-frost print:text-neutral-950">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/68 print:text-neutral-700">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint print:text-neutral-800">
                Projects
              </h2>
              <div className="mt-4 space-y-5">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-semibold text-frost print:text-neutral-950">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50 print:text-neutral-500">
                        {project.stack.slice(0, 3).join(" / ")}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/68 print:text-neutral-700">
                      {project.description}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/80 print:text-neutral-800">
                      {project.role}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68 print:text-neutral-700">
                      {project.challenges.join(" ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
