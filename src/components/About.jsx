export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center
                 py-24 px-6 sm:px-12 lg:px-16 scroll-mt-16"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Texte gauche ── */}
        <div className="md:col-span-7 space-y-6">

          {/* Titre principal bordeaux naturel */}
          <h2
            className="font-sans font-black text-6xl sm:text-7xl md:text-8xl text-[#732C33]
                       tracking-tight leading-tight inline-block w-fit"
          >
            Bonjour !<br />Je suis Elina.
          </h2>

          {/* Sous-titre cyan naturel sans étirement artificiel */}
          <div>
            <p
              className="font-sans font-bold text-sm sm:text-base tracking-wider
                         text-[#4BAAC8] uppercase leading-snug inline-block w-fit"
            >
              Développeuse Full-Stack &amp; Designer Graphique
            </p>
          </div>

          {/* Texte de présentation fluide sans text-justify forcé */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#3B3434]">
            Etudiante en Design Informatique, à la fois développeuse web 
            et designer UI/UX, avec une vision complète qui va de la conception de l’interface 
            jusqu’au développement de l’application. Je suis toujours en quête de nouvelles 
            expériences pour renforcer mes compétences et évoluer dans le domaine des technologies.
          </p>

          {/* Petits badges statut */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["3ème année IT University", "Madagascar 🇲🇬", "Disponible pour projets"].map((badge) => (
              <span
                key={badge}
                className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-full
                           border border-[#732C33]/25 text-[#732C33] bg-[#732C33]/05 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ── Portrait organique droite ── */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">

            {/* Ombre décorative flottante */}
            <div
              aria-hidden
              className="absolute inset-4 bg-[#732C33]/20 blur-3xl rounded-full
                         scale-95 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Cadre organique bordeaux */}
            <div
              className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px]
                         organic-frame overflow-hidden flex items-center justify-center
                         bg-gradient-to-br from-[#732C33] to-[#3D1518] shadow-2xl"
            >
              {/* Photo de profil Elina Hajarison */}
              <img
                src="/images/profile.png"
                alt="Portrait d'Elina Hajarison"
                className="absolute inset-0 w-full h-full object-cover object-center
                           transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Overlay teinté léger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Petite étiquette flottante */}
            <div
              className="absolute -bottom-3 -right-3 bg-white border border-[#732C33]/20
                         rounded-2xl px-5 py-2.5 shadow-paper"
            >
              <p className="text-xs sm:text-sm font-bold text-[#732C33] leading-tight">Full-Stack</p>
              <p className="text-xs sm:text-sm text-[#4BAAC8] font-semibold leading-tight">&amp; Designer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
