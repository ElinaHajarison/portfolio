export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center
                 py-24 px-6 sm:px-12 lg:px-16 overflow-hidden bg-[#1A1010]"
    >
      {/* ── Image d'arrière-plan plein écran avec overlay immersif ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />
      {/* Overlay sombre dégradé bordeaux pour lisibilité et élégance */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D0E]/85 via-[#1A1010]/80 to-[#140D0E]/95" />
      <div className="absolute inset-0 bg-[#732C33]/20 mix-blend-color-burn" />

      {/* ── Halo lumineux bordeaux au centre ── */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-[#732C33]/30 blur-[140px]" />
      </div>

      {/* ── Contenu centré fluide ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Ligne calligraphique dorée non étirée */}
        <span
          className="font-cursive text-3xl sm:text-5xl md:text-6xl text-[#B59948]
                     block leading-none mb-3 -rotate-1 select-none"
        >
          Je suis Elina Hajarison,
        </span>

        {/* Grand titre naturel avec proportions équilibrées (sans étirement Syne) */}
        <h1
          className="font-sans font-black uppercase tracking-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5EEE6]
                     leading-tight sm:leading-[1.1] max-w-4xl"
        >
          C'est mon{' '}
          <span className="text-[#732C33] inline-block">Creative Portfolio</span>
        </h1>

        {/* Texte descriptif équilibré */}
        <p
          className="mt-6 max-w-2xl text-[#F5EEE6]/75 text-sm sm:text-base md:text-lg
                     leading-relaxed font-light"
        >
          Développeuse Full-Stack &amp; Designer Graphique.
          Je conçois des applications web robustes et des identités visuelles marquantes,
          de l'architecture back-end jusqu'à l'expérience utilisateur finale.
        </p>

        {/* Boutons CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            id="hero-cta-about"
            className="px-8 py-3.5 rounded-full bg-[#F5EEE6] text-[#1A1010]
                       font-bold text-sm tracking-wide
                       hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
          >
            À propos
          </a>

          <a
            href="#designs"
            id="hero-cta-projects"
            className="px-8 py-3.5 rounded-full border-2 border-[#F5EEE6]/40
                       text-[#F5EEE6] font-bold text-sm tracking-wide
                       hover:border-[#B59948] hover:text-[#B59948] hover:scale-105
                       transition-all duration-200"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
