import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'hero',        label: 'Accueil'      },
  { id: 'about',       label: 'À propos'     },
  { id: 'competences', label: 'Compétences'  },
  { id: 'designs',     label: 'Designs'      },
  { id: 'it-projects', label: 'Projets IT'   },
  { id: 'contact',     label: 'Contact'      },
];

export default function Navbar() {
  const [active, setActive]       = useState('hero');
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const inView = offsets.filter((o) => o.top <= 120);
      if (inView.length) setActive(inView[inView.length - 1].id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F6F0]/90 backdrop-blur-md shadow-md'
          : 'bg-[#F8F6F0]/70 backdrop-blur-sm'
      } border-b border-[#732C33]/10 w-full`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">

        {/* ── Logo / Signature ── */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <span className="font-display font-extrabold text-2xl text-[#732C33] tracking-tighter">
            EH<span className="text-[#4BAAC8]">.</span>
          </span>
          <span className="font-cursive text-2xl text-[#B59948] hidden sm:inline-block leading-none mt-1">
            Elina Hajarison
          </span>
        </a>

        {/* ── Navigation Desktop ── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                active === id
                  ? 'text-[#732C33]'
                  : 'text-[#2D2727]/65 hover:text-[#732C33]'
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#732C33] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* ── Burger mobile ── */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden p-2 text-[#732C33] rounded-lg hover:bg-[#732C33]/10 transition-colors"
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Drawer mobile ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F6F0]/98 border-t border-[#732C33]/10 px-6 py-5 space-y-4">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-semibold transition-colors py-1 ${
                active === id ? 'text-[#732C33]' : 'text-[#2D2727]/70 hover:text-[#732C33]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
