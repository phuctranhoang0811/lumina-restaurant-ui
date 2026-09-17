import Image from "next/image";

export default function MenuKits() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Chef At Home</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Menu Kits</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">Recreate the Lumina experience in your own kitchen. (Informational only)</p>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1621841957884-1210fe19266f?q=80&w=1974&auto=format&fit=crop" 
              alt="Fresh pasta ingredients"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">The Pasta Masterclass Kit</h2>
            <p className="text-stone-600 mb-6 leading-relaxed font-light">
              We package our raw, premium ingredients exactly as we use them in our kitchen, complete with a step-by-step recipe card from Chef Antonio.
            </p>
            <ul className="space-y-3 text-stone-600 font-light mb-8">
              <li>• '00' Flour imported from Naples</li>
              <li>• Farm-fresh organic eggs</li>
              <li>• 24-month aged Parmigiano-Reggiano</li>
              <li>• San Marzano tomatoes & fresh basil</li>
            </ul>
            <p className="text-sm text-amber-800 font-medium tracking-wide uppercase">Available for pickup at the restaurant</p>
          </div>
        </div>

        <div className="bg-stone-900 text-stone-100 p-12 text-center rounded-sm">
          <h2 className="text-3xl font-serif mb-4">Interested in our kits?</h2>
          <p className="font-light text-stone-400 max-w-2xl mx-auto mb-8">
            Since we do not offer online sales, please ask your server during your next visit or call us ahead of time to reserve a kit.
          </p>
          <div className="inline-block px-8 py-3 border-2 border-stone-100 uppercase tracking-widest text-sm font-medium">
            Call +1 (555) 123-4567
          </div>
        </div>
      </div>
    </main>
  );
}
