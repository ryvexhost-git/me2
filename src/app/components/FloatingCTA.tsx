export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/918086777555?text=Hi%20ME2SPA,%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 right-4 z-50 flex items-center gap-3">
      {/* Floating Call Button */}
      <a
        href="tel:+918086777555"
        className="flex items-center justify-center w-12 h-12 bg-neutral-900 border border-amber-500/40 text-amber-400 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
        title="Call Now"
        aria-label="Call ME2SPA directly"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-4 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Book appointment via WhatsApp"
      >
        <span className="w-2.5 h-2.5 bg-green-300 rounded-full animate-pulse" />
        <span>Book on WhatsApp</span>
      </a>
    </aside>
  );
}