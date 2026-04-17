import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Реализованные проекты</h2>
          <p className="mt-3 text-muted-foreground">
            Примеры наших работ для различных отраслей
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-3xl text-slate-400">⚡</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.client}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug">{project.title}</p>
                <p className="mt-2 text-xs text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
