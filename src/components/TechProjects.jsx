import TechProjectCard from './TechProjectCard';
import { TECH_PROJECTS } from '../data/techProjectsData';

export default function TechProjects({ onImageClick }) {
  return (
    <section
      id="it-projects"
      className="w-full min-h-screen flex flex-col justify-center
                 py-24 px-6 sm:px-12 lg:px-16 scroll-mt-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-14">

        {/* ── Titre "projets / Informatique" ── */}
        <div className="relative inline-block select-none">
          <h2
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl
                       text-[#732C33] tracking-tight leading-none"
          >
            projets
          </h2>
          {/* "Informatique" calligraphié doré */}
          <span
            className="font-cursive text-3xl sm:text-5xl md:text-6xl text-[#B59948]
                       absolute -bottom-3 right-0 sm:right-4 -rotate-3 leading-none"
          >
            Informatique
          </span>
          <div aria-hidden className="h-8 sm:h-12" />
        </div>

        {/* ── Liste des projets IT ── */}
        <div className="space-y-12">
          {TECH_PROJECTS.map((proj) => (
            <TechProjectCard key={proj.id} project={proj} onImageClick={onImageClick} />
          ))}
        </div>

      </div>
    </section>
  );
}
