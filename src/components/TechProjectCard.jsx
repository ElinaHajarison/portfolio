import { useState } from 'react';

// Carte réutilisable pour les projets Informatiques avec galerie de captures
export default function TechProjectCard({ project, onImageClick }) {
  const backList = project.images.backList && project.images.backList.length > 0
    ? project.images.backList
    : project.images.back ? [project.images.back] : [];

  const frontList = project.images.frontList && project.images.frontList.length > 0
    ? project.images.frontList
    : project.images.front ? [project.images.front] : [];

  const [activeBack, setActiveBack] = useState(backList[0] || null);
  const [activeFront, setActiveFront] = useState(frontList[0] || null);

  const currentBack = activeBack || backList[0] || null;
  const currentFront = activeFront || frontList[0] || null;

  return (
    <article
      className="bg-white/50 border border-[#4BAAC8]/25 rounded-3xl
                 p-6 sm:p-10 shadow-paper space-y-6
                 hover:shadow-float transition-shadow duration-300"
    >
      {/* ── En-tête : Numéro + Titre + Badges ── */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Grand numéro Cyan */}
        <span
          className="num-cyan text-[6rem] sm:text-[8rem] leading-none
                     flex-shrink-0 select-none"
        >
          {project.id}
        </span>

        <div className="space-y-2 flex-1">
          {/* Type de projet */}
          <span className="text-xs uppercase font-bold tracking-widest text-[#B59948]">
            {project.type}
          </span>

          {/* Titre principal */}
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#732C33] leading-snug">
            {project.title}
          </h3>

          {/* Sous-titre optionnel */}
          {project.subtitle && (
            <p className="font-semibold text-sm text-[#4BAAC8]">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-[#3C3535] leading-relaxed pt-1">
            {project.description}
          </p>

          {/* Badges technologies */}
          <div className="flex flex-wrap gap-2 pt-3">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Galerie de captures (Back-Office & Front-Office) ── */}
      {(currentBack || currentFront) && (
        <div
          className={
            currentBack && currentFront
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6 pt-2'
              : 'max-w-3xl pt-2'
          }
        >
          {/* Colonne Back-Office (affiché uniquement si présent) */}
          {currentBack && (
            <div className="space-y-2">
              <ScreenshotThumb
                src={currentBack}
                label={`Back-Office (${backList.indexOf(currentBack) + 1}/${backList.length})`}
                alt={`${project.title} – Back Office`}
                onImageClick={onImageClick}
                title={project.title}
              />

              {/* Miniatures pour le Back-Office si multiples */}
              {backList.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {backList.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveBack(img)}
                      className={`relative w-12 h-9 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        currentBack === img
                          ? 'border-[#4BAAC8] scale-105 shadow-sm'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Back ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Colonne Front-Office (affiché uniquement si présent) */}
          {currentFront && (
            <div className="space-y-2">
              <ScreenshotThumb
                src={currentFront}
                label={`Front-Office (${frontList.indexOf(currentFront) + 1}/${frontList.length})`}
                alt={`${project.title} – Front Office`}
                onImageClick={onImageClick}
                title={project.title}
              />

              {/* Miniatures pour le Front-Office si multiples */}
              {frontList.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {frontList.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveFront(img)}
                      className={`relative w-12 h-9 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        currentFront === img
                          ? 'border-[#4BAAC8] scale-105 shadow-sm'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Front ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

/* Miniature cliquable d'une capture d'écran */
function ScreenshotThumb({ src, label, alt, onImageClick, title }) {
  return (
    <button
      type="button"
      onClick={() => onImageClick?.({ url: src, title: `${title} – ${label}` })}
      className="relative group overflow-hidden rounded-xl border border-gray-200
                 shadow-sm bg-white aspect-video block cursor-zoom-in w-full text-left"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-105"
      />
      {/* Label */}
      <span
        className="absolute bottom-2 left-2 bg-[#4BAAC8] text-white
                   text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm"
      >
        {label}
      </span>
      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                   transition-colors flex items-center justify-center"
      >
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity
                     bg-[#4BAAC8] text-white text-xs font-bold px-3 py-1.5
                     rounded-full shadow-md"
        >
          Agrandir
        </span>
      </div>
    </button>
  );
}
