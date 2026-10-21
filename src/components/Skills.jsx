import { SKILLS_DATA } from '../data/skillsData';

// Icône astérisque animée
function Asterisk({ className = '' }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 text-[#3B6070] transition-all duration-300 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.09 6.26L21 7l-5.45 4.27 2.09 6.26L12 14l-5.64 3.53 2.09-6.26L3 7l6.91 1.26L12 2z" />
    </svg>
  );
}

// Icônes représentatives par catégorie
const CATEGORY_ICONS = {
  1: (
    // Back-End / Terminal & Code
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  2: (
    // Front-End / Layout & Screen
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  3: (
    // Bases de données / Cylindre Data
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  4: (
    // Design & Création / Palette & Stylet
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section
      id="competences"
      className="w-full min-h-screen flex flex-col justify-center
                 py-24 px-6 sm:px-12 lg:px-16 scroll-mt-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">

        {/* ── Titre de section non étiré avec interlignage compact ── */}
        <div className="space-y-4 max-w-3xl">
          <h2
            className="font-sans font-black text-6xl sm:text-7xl md:text-8xl
                       text-[#732C33] tracking-tight leading-tight inline-block"
          >
            Technologies et<br />Outils de Design
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A4242] leading-relaxed max-w-2xl">
            Alliant rigueur technique et sensibilité artistique, je m'appuie sur un écosystème
            complet pour concevoir des expériences web performantes et esthétiques, de
            l'architecture back-end aux interfaces.
          </p>
        </div>

        {/* ── Grille 4 cartes bleu ciel ondulées & dynamiques ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS_DATA.map((col, index) => {
            // Coins organiques ondulés subtilement différents pour chaque carte
            const curveStyles = [
              'rounded-[32px_16px_28px_18px]',
              'rounded-[20px_32px_16px_28px]',
              'rounded-[28px_18px_32px_20px]',
              'rounded-[18px_28px_20px_32px]',
            ];
            const curve = curveStyles[index % curveStyles.length];

            return (
              <div
                key={col.id}
                className={`group relative overflow-hidden bg-gradient-to-br from-[#A2CBDE] to-[#88B8CE]
                           p-7 sm:p-8 flex flex-col items-start gap-6 ${curve}
                           border border-white/60 ring-1 ring-white/20
                           shadow-[0_12px_32px_-6px_rgba(75,170,200,0.28)]
                           hover:shadow-[0_28px_56px_-10px_rgba(75,170,200,0.48),0_0_24px_rgba(255,255,255,0.4)]
                           hover:-translate-y-3.5 hover:scale-[1.02]
                           transition-all duration-300 ease-out cursor-default`}
              >
                {/* ── Effet reflet lumineux (Sheen) qui balaye la carte au survol ── */}
                <div
                  aria-hidden
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rotate-45 pointer-events-none
                             bg-gradient-to-r from-transparent via-white/25 to-transparent
                             -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                />

                {/* ── Filigrane décoratif en fond ── */}
                <div
                  aria-hidden
                  className="absolute -bottom-6 -right-6 text-white/10 group-hover:text-white/20
                             group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 pointer-events-none"
                >
                  <div className="w-32 h-32 flex items-center justify-center">
                    {CATEGORY_ICONS[col.id]}
                  </div>
                </div>


                {/* ── Titre de catégorie ── */}
                <h3
                  className="font-sans font-bold text-xl sm:text-2xl text-white
                             leading-tight drop-shadow-md tracking-normal inline-block relative z-10"
                >
                  {col.category}
                </h3>

                {/* ── Séparateur doux ── */}
                <div className="w-full h-[1.5px] bg-white/30 rounded-full relative z-10" />

                {/* ── Liste d'items interactifs ── */}
                <ul className="w-full space-y-2 relative z-10">
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className="group/item flex items-center gap-3 font-semibold text-sm sm:text-[15px]
                                 text-[#12303D] px-2.5 py-1.5 rounded-xl
                                 hover:bg-white/50 hover:translate-x-1.5 hover:shadow-sm
                                 transition-all duration-200"
                    >
                      <Asterisk className="group-hover/item:text-[#732C33] group-hover/item:rotate-90 group-hover/item:scale-125" />
                      <span className="leading-snug transition-colors group-hover/item:text-[#0A222C]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
