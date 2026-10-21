// Lightbox / Modale d'agrandissement d'image
export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    /* Overlay semi-opaque */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                 flex items-center justify-center p-4 sm:p-8
                 animate-fade-in"
    >
      {/* Panneau de la modale */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F8F6F0] rounded-2xl shadow-2xl
                   flex flex-col gap-4 p-4 sm:p-5
                   max-w-5xl w-full max-h-[90vh] overflow-hidden
                   animate-slide-up"
      >
        {/* ── En-tête ── */}
        <div className="flex items-center justify-between gap-4">
          <h4 className="font-display font-bold text-base sm:text-lg text-[#732C33] truncate">
            {image.title}
          </h4>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 rounded-full text-[#732C33]
                       hover:bg-[#732C33]/10 transition-colors flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Image agrandie ── */}
        <div className="flex-1 overflow-auto rounded-xl">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* ── Pied : bouton fermer ── */}
        <button
          onClick={onClose}
          className="self-center text-xs font-bold text-[#732C33]/60
                     hover:text-[#732C33] transition-colors"
        >
          Cliquez n'importe où pour fermer
        </button>
      </div>
    </div>
  );
}
