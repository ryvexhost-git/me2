export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-16 px-6 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="text-2xl font-serif text-amber-400 font-semibold tracking-wider">
            ME2SPA
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            A luxury wellness destination offering personalized therapeutic massage services in Kondotty, Kerala.
          </p>
          <p className="mt-6 text-xs text-neutral-500">
            © 2026 ME2SPA. All Rights Reserved.<br />
            Privacy • Terms • Responsible Service
          </p>
        </div>

        {/* Contact info - fixed invalid links & emails */}
        <div>
          <h4 className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:+918086777555"
                className="hover:text-amber-300 transition-colors"
              >
                +91 8086 777 555
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@me2spa.in"
                className="hover:text-amber-300 transition-colors"
              >
                contact@me2spa.in
              </a>
            </li>
            <li className="leading-snug text-neutral-400">
              Near Calicut Airport Road,<br />
              Kondotty, Malappuram, Kerala
            </li>
          </ul>
        </div>

        {/* Operating Hours & Social */}
        <div>
          <h4 className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-4">Hours</h4>
          <div className="text-sm space-y-1 mb-4">
            <p><span className="text-neutral-300 font-medium">Mon — Thu:</span> 10:00 AM – 09:00 PM</p>
            <p><span className="text-neutral-300 font-medium">Fri — Sun:</span> 09:00 AM – 10:00 PM</p>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://wa.me/918086777555?text=Hello%20ME2SPA,%20I%20would%20like%20to%20inquire%20about%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/me2spa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}