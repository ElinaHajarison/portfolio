import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('hajarisonelina88@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Redirection mailto propre avec le contenu saisi
    const subject = encodeURIComponent(`Contact Portfolio - Message de ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hajarisonelina88@gmail.com?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden
                 py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1010] text-[#F5EEE6] scroll-mt-16"
    >
      {/* ── Fond plein écran avec image hero-bg.jpg & overlays immersifs ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />
      {/* Overlay dégradé sombre et nuance bordeaux */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D0E]/85 via-[#1A1010]/80 to-[#140D0E]/95" />
      <div className="absolute inset-0 bg-[#732C33]/20 mix-blend-color-burn pointer-events-none" />

      {/* Halo bordeaux diffus d'ambiance */}
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 pointer-events-none"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-[#732C33]/30 blur-[140px]" />
      </div>

      {/* ── Contenu principal fluide ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12">
        {/* Titre "Contact" naturel et compact */}
        <div className="space-y-3">
          <h2
            className="font-sans font-black text-6xl sm:text-7xl md:text-8xl text-[#F5EEE6]
                       tracking-tight leading-none"
          >
            Contact
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#F5EEE6]/75 max-w-xl font-light leading-relaxed">
            Vous avez un projet en tête ou souhaitez collaborer ? Laissez-moi un message
            ou contactez-moi directement.
          </p>
        </div>

        {/* Grille 2 colonnes : Formulaire à gauche, Carte info à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ── Colonne Gauche : Formulaire minimaliste avec lignes soulignées ── */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-7"
          >
            {/* Champ Nom complet */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F5EEE6]/60"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom et prénom"
                className="w-full bg-transparent border-b border-[#F5EEE6]/30 py-2.5 text-sm sm:text-base
                           text-[#F5EEE6] placeholder-[#F5EEE6]/30 outline-none
                           focus:border-[#B59948] transition-colors"
              />
            </div>

            {/* Champ Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-email-input"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F5EEE6]/60"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="contact-email-input"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@exemple.com"
                className="w-full bg-transparent border-b border-[#F5EEE6]/30 py-2.5 text-sm sm:text-base
                           text-[#F5EEE6] placeholder-[#F5EEE6]/30 outline-none
                           focus:border-[#B59948] transition-colors"
              />
            </div>

            {/* Champ Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F5EEE6]/60"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full bg-transparent border-b border-[#F5EEE6]/30 py-2.5 text-sm sm:text-base
                           text-[#F5EEE6] placeholder-[#F5EEE6]/30 outline-none
                           focus:border-[#B59948] resize-none transition-colors"
              />
            </div>

            {/* Bouton d'envoi style pill dark */}
            <div className="pt-2 flex items-center gap-4">
              <button
                type="submit"
                id="contact-submit-btn"
                className="px-8 py-3.5 rounded-full bg-[#140D0E] border border-[#F5EEE6]/25
                           text-[#F5EEE6] hover:bg-[#732C33] hover:border-[#732C33]
                           font-bold text-sm tracking-wide transition-all duration-200
                           shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Envoyer</span>
                <span className="w-2 h-2 rounded-full bg-[#B59948] group-hover:scale-125 transition-transform" />
              </button>

              {formSubmitted && (
                <span className="text-xs text-[#B59948] font-medium animate-fade-in">
                  ✓ Préparation de votre message...
                </span>
              )}
            </div>
          </form>

          {/* ── Colonne Droite : Carte d'information moderne flottante ── */}
          <div className="lg:col-span-5">
            <div
              className="bg-[#F8F6F0] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1A1010]
                         border border-white/60 space-y-6"
            >
              {/* En-tête sombre avec 4 pastilles d'accentuation aux coins */}
              <div
                className="relative bg-[#140D0E] text-[#F5EEE6] rounded-2xl py-5 px-4
                           text-center shadow-inner overflow-hidden"
              >
                {/* 4 points dorés aux 4 coins (style maquette) */}
                <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#B59948]" />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#B59948]" />
                <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#B59948]" />
                <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#B59948]" />

                <p className="font-bold text-sm tracking-wide text-[#F5EEE6]">
                  Discutons de vos projets !
                </p>
                <p className="text-xs text-[#B59948] font-cursive text-lg sm:text-xl mt-1">
                  Prenons contact
                </p>
              </div>

              {/* Liste des canaux de contact avec icônes circulaires */}
              <div className="space-y-4 pt-1">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 group">
                  <a
                    href="mailto:hajarisonelina88@gmail.com"
                    id="contact-email-link"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-[#140D0E] text-[#F5EEE6]
                                 flex items-center justify-center shrink-0
                                 group-hover:bg-[#732C33] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-semibold text-[#2D2727] truncate
                                 group-hover:text-[#732C33] transition-colors"
                    >
                      hajarisonelina88@gmail.com
                    </span>
                  </a>

                  {/* Bouton Copier rapide */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer
                                ${
                                  copied
                                    ? 'bg-green-600 text-white'
                                    : 'bg-[#732C33]/10 text-[#732C33] hover:bg-[#732C33] hover:text-white'
                                }`}
                  >
                    {copied ? '✓ Copié' : 'Copier'}
                  </button>
                </div>

                {/* Téléphone */}
                <a
                  href="tel:+261387287231"
                  id="contact-phone-link"
                  className="flex items-center gap-3.5 group"
                >
                  <div
                    className="w-10 h-10 rounded-full bg-[#140D0E] text-[#F5EEE6]
                               flex items-center justify-center shrink-0
                               group-hover:bg-[#732C33] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold text-[#2D2727]
                               group-hover:text-[#732C33] transition-colors"
                  >
                    +261 38 72 872 31
                  </span>
                </a>

                {/* Localisation */}
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-full bg-[#140D0E] text-[#F5EEE6]
                               flex items-center justify-center shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D2727]">
                    Antananarivo, Madagascar
                  </span>
                </div>

                {/* Statut & Disponibilité */}
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-full bg-[#140D0E] text-[#B59948]
                               flex items-center justify-center shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D2727]">
                    Disponible pour nouveaux projets
                  </span>
                </div>
              </div>

              {/* Signature calligraphiée en bas de carte */}
              <div className="pt-3 border-t border-[#2D2727]/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#2D2727]/50 font-medium">
                  Elina Hajarison
                </span>
                <span
                  className="font-cursive text-3xl sm:text-4xl text-[#B59948] select-none -rotate-6"
                >
                  Merci
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
