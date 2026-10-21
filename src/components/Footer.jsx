export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#732C33]/15 py-8 bg-[#F8F6F0]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row
                      items-center justify-between gap-3 text-sm text-[#2D2727]/60">
        <p>
          © {year}{' '}
          <span className="font-semibold text-[#732C33]">Elina Hajarison</span>
          {' '}— Tous droits réservés.
        </p>
        <p className="text-xs">
          Développeuse Full-Stack &amp; Designer Graphique · Madagascar
        </p>
      </div>
    </footer>
  );
}
