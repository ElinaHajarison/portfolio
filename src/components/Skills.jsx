import { SKILLS_DATA } from '../data/skillsData';

// Icône astérisque (identique à la maquette)
function Asterisk() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 text-[#3B6070]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.09 6.26L21 7l-5.45 4.27 2.09 6.26L12 14l-5.64 3.53 2.09-6.26L3 7l6.91 1.26L12 2z" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="competences"
      className="w-full min-h-screen flex flex-col justify-center
                 py-24 px-6 sm:px-12 lg:px-16 scroll-mt-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">

        {/* ── Titre de section non étiré avec interlignage serré ── */}
        <div className="space-y-4 max-w-3xl">
          <h2
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl
                       text-[#732C33] tracking-tight leading-[1.08]"
          >
            Technologies et<br />Outils de Design
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A4242] leading-relaxed max-w-2xl">
            Alliant rigueur technique et sensibilité artistique, je m'appuie sur un écosystème
            complet pour concevoir des expériences web performantes et esthétiques, de
            l'architecture back-end aux interfaces.
          </p>
        </div>

        {/* ── Grille 4 cartes bleu ciel ondulées ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS_DATA.map((col) => (
            <div
              key={col.id}
              className="wavy-card bg-[#95C1D5] p-7 sm:p-8 flex flex-col gap-6"
            >
              {/* Titre de catégorie naturel sans étirement forcé */}
              <h3
                className="font-display font-bold text-lg sm:text-xl
                           text-white leading-tight drop-shadow-sm tracking-normal"
              >
                {col.category}
              </h3>

              {/* Liste d'items */}
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-semibold text-sm sm:text-[15px] text-[#12303D]"
                  >
                    <Asterisk />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
