import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
            alt="Warm, rustic Italian dining table with fresh pasta and wine"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-stone-900/60" aria-hidden="true" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-amber-400 font-medium tracking-[0.2em] uppercase text-sm mb-6">
            A Taste of Authentic Italy
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Rustic Charm Meets <br /> Modern Elegance
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl font-light">
            Experience the warmth of traditional Italian cuisine, elevated through contemporary culinary artistry in an unforgettable fine-dining atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reservation"
              className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
              aria-label="Book a table for dining"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-stone-900 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="View our dining menu"
            >
              Discover Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section (Example to show the clean whitespace & typography) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-transparent">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-serif text-white mb-4">Location</h2>
            <address className="not-italic text-stone-300 font-light leading-relaxed">
              123 Culinary Avenue<br />
              Food District, FL 33101
            </address>
          </div>
          <div className="flex flex-col items-center md:border-x border-stone-700 px-6">
            <h2 className="text-2xl font-serif text-white mb-4">Hours</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              Mon-Thu: 5pm - 10pm<br />
              Fri-Sun: 5pm - 11pm
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-serif text-white mb-4">Contact</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              contact@luminadining.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
