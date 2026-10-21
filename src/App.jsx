import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DesignProjects from './components/DesignProjects';
import TechProjects from './components/TechProjects';
import Contact from './components/Contact';
import ImageModal from './components/ImageModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fermer la modale avec la touche Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setSelectedImage(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Bloquer le scroll body quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <div className="paper-bg min-h-screen w-full flex flex-col">

      {/* ── Navigation fixe ── */}
      <Navbar />

      {/* ── Contenu principal Full Width – chaque section gère son plein écran ── */}
      <main className="w-full flex flex-col flex-1">

        {/* 1. Hero – Plein écran w-full min-h-screen */}
        <Hero />

        {/* 2. À propos – Plein écran w-full min-h-screen */}
        <About />

        {/* 3. Compétences – Plein écran w-full min-h-screen */}
        <Skills />

        {/* 4. Projets Designs – Plein écran w-full min-h-screen */}
        <DesignProjects onImageClick={setSelectedImage} />

        {/* 5. Projets Informatiques – Plein écran w-full min-h-screen */}
        <TechProjects onImageClick={setSelectedImage} />

        {/* 6. Contact – Plein écran w-full min-h-screen */}
        <Contact />

      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Lightbox (modale image) ── */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />

    </div>
  );
}
