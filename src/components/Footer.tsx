import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-serif tracking-widest uppercase text-white mb-6 block">
            Lumina
          </Link>
          <p className="font-light text-sm leading-relaxed mb-6">
            A fusion of warm, rustic Italian vibes and modern fine-dining elegance. Experience culinary artistry in every bite.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Fb</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Ig</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Tw</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Explore</h3>
          <ul className="space-y-3 font-light text-sm">
            <li><Link href="/about-us" className="hover:text-amber-400 transition-colors">Our Story</Link></li>
            <li><Link href="/menu" className="hover:text-amber-400 transition-colors">Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
            <li><Link href="/reservation" className="hover:text-amber-400 transition-colors">Reservations</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Services</h3>
          <ul className="space-y-3 font-light text-sm">
            <li><Link href="/banquet-facilities" className="hover:text-amber-400 transition-colors">Banquet Facilities</Link></li>
            <li><Link href="/catering" className="hover:text-amber-400 transition-colors">Catering</Link></li>
            <li><Link href="/menu-kits" className="hover:text-amber-400 transition-colors">Menu Kits</Link></li>
            <li><Link href="/hosting-services" className="hover:text-amber-400 transition-colors">Hosting Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Visit Us</h3>
          <address className="not-italic font-light text-sm space-y-3">
            <p>123 Culinary Avenue<br />Food District, FL 33101</p>
            <p>
              <Link href="/visiting-hours" className="hover:text-amber-400 transition-colors">View Hours</Link>
            </p>
            <p className="pt-2 border-t border-stone-800 mt-2">
              <a href="mailto:contact@luminadining.com" className="hover:text-amber-400 transition-colors">contact@luminadining.com</a><br/>
              +1 (555) 123-4567
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-sm font-light flex flex-col md:flex-row justify-between items-center text-stone-500">
        <p>&copy; {new Date().getFullYear()} Lumina Dining. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for elegance.</p>
      </div>
    </footer>
  );
}
