import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">About Lumina</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop" 
              alt="Head Chef preparing pasta"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">A Legacy of Culinary Passion</h2>
            <p className="text-stone-600 mb-6 leading-relaxed font-light">
              Founded in 2010, Lumina was born from a simple desire: to bring the authentic flavors of Tuscany to the heart of our city. Our founder, Chef Antonio, grew up in a small Italian village where the kitchen was the heart of the home.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed font-light">
              We believe in honoring traditional recipes while embracing modern culinary techniques. Every dish we serve is a testament to our commitment to quality, utilizing only the freshest locally-sourced ingredients and premium imports from Italy.
            </p>
            <div className="mt-8">
              <span className="font-serif text-2xl italic text-amber-800">"Food is the most primitive form of comfort."</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
