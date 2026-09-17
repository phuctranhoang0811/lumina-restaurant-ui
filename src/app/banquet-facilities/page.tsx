import Image from "next/image";

export default function BanquetFacilities() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Celebrate With Us</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Banquet Facilities</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white shadow-md p-8 border-t-4 border-amber-800">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">The Tuscany Room</h2>
            <p className="text-stone-600 font-light mb-6">
              An intimate, warmly lit private room featuring a magnificent mahogany dining table and rustic brick walls. Perfect for corporate dinners or private family celebrations.
            </p>
            <ul className="text-stone-500 font-light space-y-2 mb-6">
              <li>• Capacity: Up to 24 guests</li>
              <li>• Dedicated waitstaff</li>
              <li>• AV equipment available upon request</li>
              <li>• Custom floral arrangements</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-8 border-t-4 border-amber-800">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">The Grand Piazza</h2>
            <p className="text-stone-600 font-light mb-6">
              Our stunning main banquet hall boasting floor-to-ceiling windows, crystal chandeliers, and a spacious dance floor. Ideal for weddings and large galas.
            </p>
            <ul className="text-stone-500 font-light space-y-2 mb-6">
              <li>• Capacity: Up to 150 guests</li>
              <li>• Private bar access</li>
              <li>• Stage for live entertainment</li>
              <li>• Coat check services included</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Beautifully set banquet table"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
