function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-brand/40">
      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — view on GitHub`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 dots-lite opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-neutral-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold leading-snug tracking-tight">
                {project.title}
              </h3>
              <span
                className="mt-1 shrink-0 text-neutral-weak transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </div>
          {project.description && (
            <p className="text-sm leading-relaxed text-neutral-weak">
              {project.description}
            </p>
          )}
          {project.points && (
            <ul className="space-y-1.5 text-xs text-neutral-medium">
              {project.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;