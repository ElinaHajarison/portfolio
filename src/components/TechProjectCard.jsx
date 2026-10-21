import { useState } from 'react';

// Carte réutilisable pour les projets Informatiques – calquée fidèlement sur le modèle des cartes Design
export default function TechProjectCard({ project, onImageClick }) {
  const backList = project.images?.backList && project.images.backList.length > 0
    ? project.images.backList
    : project.images?.back ? [project.images.back] : [];

  const frontList = project.images?.frontList && project.images.frontList.length > 0
    ? project.images.frontList
    : project.images?.front ? [project.images.front] : [];

  const hasBack = backList.length > 0;
  const hasFront = frontList.length > 0;

  // Si on a à la fois Back et Front, on permet de basculer
  const [activeTab, setActiveTab] = useState(hasBack ? 'back' : 'front');

  const currentList = activeTab === 'front' && hasFront ? frontList : backList;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentImage = currentList[activeImageIndex] || currentList[0] || null;
  const hasImage = Boolean(currentImage);

  const currentLabel = activeTab === 'front' ? 'Front-Office' : 'Back-Office';

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveImageIndex(0);
  };

  return (
    <article
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start
                 bg-white/45 border border-[#4BAAC8]/20 rounded-3xl
                 p-6 sm:p-8 shadow-paper hover:shadow-float
                 transition-all duration-300"
    >
      {/* ── Grand numéro cyan (colonne 1: md:col-span-2) ── */}
      <div className="md:col-span-2 flex items-start md:justify-center pt-1">
        <span
          className="num-cyan text-[6rem] sm:text-[8rem] leading-none
                     opacity-90 group-hover:opacity-100 transition-opacity select-none"
        >
          {project.id}
        </span>
      </div>

      {/* ── Informations & Description (colonne 2: md:col-span-5) ── */}
      <div className="md:col-span-5 space-y-3">
        {/* Type de projet en doré */}
        <span className="text-xs font-bold uppercase tracking-wider text-[#B59948] block">
          {project.type}
        </span>

        {/* Titre principal */}
        <h3 className="font-sans font-black text-xl sm:text-2xl text-[#732C33] leading-snug">
          {project.title}
        </h3>

        {/* Sous-titre optionnel */}
        {project.subtitle && (
          <p className="font-semibold text-xs sm:text-sm text-[#4BAAC8]">
            {project.subtitle}
          </p>
        )}

        {/* Description fluide sans étirement */}
        <p className="text-sm sm:text-[15px] text-[#3C3535] leading-relaxed">
          {project.description}
        </p>

        {/* Badges technologies bordeaux */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Visuel / Galerie latérale (colonne 3: md:col-span-5) ── */}
      <div className="md:col-span-5 space-y-2">
        {/* Onglets sélecteurs si le projet a Back ET Front */}
        {hasBack && hasFront && (
          <div className="flex items-center gap-2 pb-1">
            <button
              type="button"
              onClick={() => handleTabChange('back')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'back'
                  ? 'bg-[#4BAAC8] text-white shadow-sm'
                  : 'bg-white/80 text-[#3C3535] border border-gray-200 hover:bg-white'
              }`}
            >
              Back-Office ({backList.length})
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('front')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'front'
                  ? 'bg-[#4BAAC8] text-white shadow-sm'
                  : 'bg-white/80 text-[#3C3535] border border-gray-200 hover:bg-white'
              }`}
            >
              Front-Office ({frontList.length})
            </button>
          </div>
        )}

        {hasImage ? (
          <>
            {/* Aperçu principal cliquable */}
            <button
              type="button"
              onClick={() =>
                onImageClick?.({
                  url: currentImage,
                  title: `${project.title} – ${currentLabel}`,
                })
              }
              className="relative w-full overflow-hidden rounded-2xl
                         border-2 border-[#4BAAC8]/25 shadow-md bg-white
                         aspect-[4/3] group/img block cursor-zoom-in text-left"
            >
              <img
                src={currentImage}
                alt={`${project.title} – ${currentLabel}`}
                className="w-full h-full object-cover transition-transform duration-500
                           group-hover/img:scale-105"
              />

              {/* Badge indicatif en bas à gauche */}
              <span
                className="absolute bottom-2.5 left-2.5 bg-[#4BAAC8] text-white
                           text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm"
              >
                {currentLabel} ({activeImageIndex + 1}/{currentList.length})
              </span>

              {/* Overlay hover */}
              <div
                className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20
                           transition-colors flex items-center justify-center"
              >
                <span
                  className="opacity-0 group-hover/img:opacity-100 transition-opacity
                             bg-[#4BAAC8] text-white text-xs font-bold px-4 py-2
                             rounded-full shadow-lg"
                >
                  Agrandir l'image
                </span>
              </div>
            </button>

            {/* Rangée de miniatures si plusieurs captures */}
            {currentList.length > 1 && (
              <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
                {currentList.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#4BAAC8] scale-105 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Capture ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Placeholder élégant si aucune image */
          <div
            className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-[#4BAAC8]/30
                       bg-[#4BAAC8]/05 flex items-center justify-center"
          >
            <span className="text-[#4BAAC8]/50 text-sm font-semibold">
              Aperçu à venir
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
