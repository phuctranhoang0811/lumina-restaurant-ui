export default function Menu() {
  const menuCategories = [
    {
      title: "Antipasti (Starters)",
      items: [
        { name: "Bruschetta al Pomodoro", desc: "Grilled sourdough, heirloom tomatoes, fresh basil, garlic, cold-pressed olive oil", price: "$14" },
        { name: "Carpaccio di Manzo", desc: "Thinly sliced raw beef, arugula, shaved parmesan, truffle oil, lemon", price: "$19" },
        { name: "Calamari Fritti", desc: "Lightly dusted and fried calamari, served with spicy marinara and lemon", price: "$17" },
      ]
    },
    {
      title: "Primi (Pasta)",
      items: [
        { name: "Pappardelle al Cinghiale", desc: "Hand-made ribbon pasta, slow-braised wild boar ragù, pecorino", price: "$28" },
        { name: "Ravioli di Ricotta", desc: "House-made ravioli stuffed with ricotta and spinach, sage brown butter sauce", price: "$24" },
        { name: "Linguine allo Scoglio", desc: "Linguine with clams, mussels, shrimp, and calamari in a light tomato-white wine broth", price: "$32" },
      ]
    },
    {
      title: "Secondi (Mains)",
      items: [
        { name: "Osso Buco alla Milanese", desc: "Braised veal shank, saffron risotto, gremolata", price: "$42" },
        { name: "Branzino al Forno", desc: "Whole roasted European sea bass, lemon, herbs, seasonal vegetables", price: "$38" },
        { name: "Bistecca alla Fiorentina", desc: "32oz dry-aged Porterhouse steak, roasted garlic, rosemary potatoes (for two)", price: "$95" },
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Culinary Masterpieces</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Our Menu</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">Discover a symphony of flavors crafted from the finest seasonal ingredients. No online ordering available; please join us to dine.</p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-sm">
              <h2 className="text-3xl font-serif text-stone-800 mb-8 pb-4 border-b border-stone-200">{category.title}</h2>
              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div className="max-w-full sm:max-w-[75%]">
                      <h3 className="text-xl font-medium text-stone-900 tracking-wide">{item.name}</h3>
                      <p className="text-stone-500 mt-2 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="text-xl font-serif text-amber-800">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
