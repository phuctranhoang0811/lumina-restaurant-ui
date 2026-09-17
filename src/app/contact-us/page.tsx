"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-10">
            <h2 className="text-2xl font-serif text-stone-800">We'd love to hear from you</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              For general inquiries, private events, or feedback, please reach out to us using the contact details below or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-stone-700">
                <MapPin className="text-amber-700 mr-4" size={24} />
                <span className="font-light">123 Culinary Avenue, Food District, FL 33101</span>
              </div>
              <div className="flex items-center text-stone-700">
                <Phone className="text-amber-700 mr-4" size={24} />
                <span className="font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-stone-700">
                <Mail className="text-amber-700 mr-4" size={24} />
                <span className="font-light">contact@luminadining.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form (UI only) */}
          <div className="bg-white p-8 shadow-sm border border-stone-100 rounded-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                <input type="text" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input type="email" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea rows={4} className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium tracking-wider uppercase py-4 rounded-sm transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

