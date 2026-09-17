import Image from "next/image";

export default function HostingServices() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Exclusive Events</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Hosting Services</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">Full restaurant buyouts and specialized event curation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-sm p-8 md:p-12 border border-stone-100">
            <h2 className="text-2xl font-serif text-stone-800 mb-4">Corporate Galas</h2>
            <p className="text-stone-600 font-light mb-6 leading-relaxed">
              Impress your clients and team with an exclusive buyout of Lumina. We offer customized seating arrangements, branded menus, and dedicated sommelier services to ensure your corporate event is unforgettable.
            </p>
            <a href="/contact-us" className="text-amber-700 hover:text-amber-800 font-medium uppercase tracking-widest text-sm">Inquire Now &rarr;</a>
          </div>

          <div className="bg-white shadow-sm p-8 md:p-12 border border-stone-100">
            <h2 className="text-2xl font-serif text-stone-800 mb-4">Wedding Receptions</h2>
            <p className="text-stone-600 font-light mb-6 leading-relaxed">
              Transform our elegant space into your dream wedding venue. Our events coordinator will work closely with you to design a multi-course menu, manage floral arrangements, and create the perfect romantic ambiance.
            </p>
            <a href="/contact-us" className="text-amber-700 hover:text-amber-800 font-medium uppercase tracking-widest text-sm">Inquire Now &rarr;</a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="w-24 h-1 bg-stone-300 mx-auto rounded mb-12"></div>
          <p className="text-xl font-serif text-stone-700 max-w-3xl mx-auto leading-relaxed">
            "The team at Lumina went above and beyond for our anniversary party. The food, the service, and the atmosphere were absolutely flawless." 
          </p>
          <span className="block mt-4 text-stone-500 uppercase tracking-widest text-sm">— The Peterson Family</span>
        </div>
      </div>
    </main>
  );
}
