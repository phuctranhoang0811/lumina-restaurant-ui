"use client";

import Image from "next/image";

export default function Reservation() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Join Our Table</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Online Reservation</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto">Book your dining experience. For parties larger than 6, please contact us directly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 bg-white shadow-xl rounded-sm overflow-hidden">
          {/* Form */}
          <div className="p-10 md:p-14">
            <h2 className="text-2xl font-serif text-stone-800 mb-8">Reserve a Table</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Date</label>
                  <input type="date" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Time</label>
                  <select className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                <select className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                <input type="text" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Special Requests</label>
                <textarea rows={3} className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700" placeholder="Anniversary, allergies, etc."></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium tracking-wider uppercase py-4 rounded-sm transition-colors mt-4">
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="relative hidden md:block w-full h-full min-h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant seating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
