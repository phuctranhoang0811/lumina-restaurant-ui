import Image from "next/image";

export default function Catering() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Beyond Our Walls</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Premium Catering</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">Bring the exquisite taste of Lumina to your own venue. Informational only.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Impeccable Service, Anywhere</h2>
            <p className="text-stone-600 mb-6 leading-relaxed font-light">
              Whether you are hosting an intimate dinner party at home, a corporate luncheon, or a grand wedding off-site, our catering team delivers the same standard of culinary excellence you expect from our dining room.
            </p>
            <ul className="space-y-4 text-stone-700 font-light mb-8">
              <li className="flex items-start">
                <span className="text-amber-700 mr-3">✓</span> Custom menu curation with our Executive Chef
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 mr-3">✓</span> Professional waitstaff and bartending services
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 mr-3">✓</span> Premium table settings and decor coordination
              </li>
            </ul>
            <a href="mailto:catering@luminadining.com" className="inline-block px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-wider uppercase transition-colors rounded-sm shadow-md">
              Inquire About Catering
            </a>
          </div>
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
              alt="Catering setup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
