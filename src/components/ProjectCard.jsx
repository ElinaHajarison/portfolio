import { useState } from 'react';

// Carte réutilisable pour les projets Design
export default function ProjectCard({ project, onImageClick }) {
  const images = project.images && project.images.length > 0
    ? project.images
    : project.image ? [project.image] : [];

  const [activeImage, setActiveImage] = useState(images[0] || null);

  const currentImage = activeImage || images[0] || null;
  const hasImage = Boolean(currentImage);

  return (
    <article
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start
                 bg-white/45 border border-[#4BAAC8]/20 rounded-3xl
                 p-6 sm:p-8 shadow-paper hover:shadow-float
                 transition-all duration-300"
    >
      {/* ── Grand numéro bordeaux ── */}
      <div className="md:col-span-2 flex items-start md:justify-center pt-1">
        <span className="num-bordeaux text-[6rem] sm:text-[8rem] leading-none
                         opacity-90 group-hover:opacity-100 transition-opacity">
          {project.id}
        </span>
      </div>

      {/* ── Description ── */}
      <div className="md:col-span-5 space-y-3">
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#732C33] leading-snug">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs font-bold uppercase tracking-wider text-[#B59948]">
            {project.subtitle}
          </p>
        )}
        <p className="text-sm sm:text-[15px] text-[#3C3535] leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1
                         bg-[#732C33]/10 text-[#732C33] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Visuel / Aperçu + Galerie ── */}
      <div className="md:col-span-5 space-y-2">
        {hasImage ? (
          <>
            <button
              type="button"
              onClick={() => onImageClick?.({ url: currentImage, title: project.title })}
              className="relative w-full overflow-hidden rounded-2xl
                         border-2 border-[#732C33]/20 shadow-md bg-white
                         aspect-[4/3] group/img block cursor-zoom-in"
            >
              <img
                src={currentImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500
                           group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-[#732C33]/0 group-hover/img:bg-[#732C33]/25
                              transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity
                                 bg-[#732C33] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Agrandir l'image
                </span>
              </div>
            </button>

            {/* Miniatures si le projet a plusieurs images (ex: Rindraflow, Cinepass) */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 pt-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-14 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImage === img
                        ? 'border-[#732C33] scale-105 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} aperçu ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Placeholder quand l'image n'est pas encore fournie */
          <div className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-[#732C33]/30
                          bg-[#732C33]/05 flex items-center justify-center">
            <span className="text-[#732C33]/40 text-sm font-semibold">
              Visuel à venir
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
