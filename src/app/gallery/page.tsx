import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", // Pasta
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", // Interior
    "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop", // Wine pouring
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032&auto=format&fit=crop", // Steak
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", // Table setting
    "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop", // Dessert
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Visual Journey</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Gallery</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">A glimpse into the aesthetic, atmosphere, and artistry of Lumina.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-80 rounded-sm overflow-hidden group">
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
