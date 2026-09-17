import { Clock, Calendar } from "lucide-react";

export default function VisitingHours() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Plan Your Visit</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6">Visiting Hours</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        <div className="bg-white p-10 md:p-16 shadow-md border-t-4 border-amber-800 rounded-sm">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="text-amber-700 mr-3" size={28} />
                <h2 className="text-2xl font-serif text-stone-900">Dining Hours</h2>
              </div>
              <ul className="space-y-4 text-stone-600 font-light">
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Friday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Saturday</span>
                  <span>4:00 PM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Sunday</span>
                  <span>4:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Calendar className="text-amber-700 mr-3" size={28} />
                <h2 className="text-2xl font-serif text-stone-900">Holidays</h2>
              </div>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                We are closed on Thanksgiving Day, Christmas Day, and New Year's Day to allow our staff to spend time with their families. 
              </p>
              <div className="bg-stone-50 p-6 rounded-sm border border-stone-200">
                <p className="text-sm text-stone-500 italic">
                  Note: The kitchen closes 45 minutes prior to the restaurant closing time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
