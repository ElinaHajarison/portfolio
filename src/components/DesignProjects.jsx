import ProjectCard from './ProjectCard';
import { DESIGN_PROJECTS } from '../data/designProjectsData';

export default function DesignProjects({ onImageClick }) {
  return (
    <section
      id="designs"
      className="w-full min-h-screen flex flex-col justify-center
                 py-24 px-6 sm:px-12 lg:px-16 scroll-mt-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-14">

        {/* ── Titre "projets / Designs" ── */}
        <div className="relative inline-block select-none">
          <h2
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl
                       text-[#732C33] tracking-tight leading-none"
          >
            projets
          </h2>
          {/* "Designs" calligraphié doré */}
          <span
            className="font-cursive text-5xl sm:text-7xl md:text-8xl text-[#B59948]
                       absolute -bottom-4 right-0 sm:right-6 -rotate-6 leading-none"
          >
            Designs
          </span>
          <div aria-hidden className="h-8 sm:h-12" />
        </div>

        {/* ── Liste des projets ── */}
        <div className="space-y-10">
          {DESIGN_PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} project={proj} onImageClick={onImageClick} />
          ))}
        </div>

      </div>
    </section>
  );
}
