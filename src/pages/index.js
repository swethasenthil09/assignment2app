import Link from 'next/link';
import { Volume2 } from 'lucide-react'; // Optional audio icon from lucide-react

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-100 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-green-300">
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-4 drop-shadow-md">
          🌾 Smart Gram Sewa
        </h1>
        <p className="text-center text-xl text-gray-700 mb-6">
          🧰🔌📚 Empowering villages with easy, on-demand services like plumbing, tailoring, electrician work, and tutoring.
        </p>

        {/* Optional Audio Instruction Button */}
        <div className="flex justify-center mb-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-200 text-green-800 rounded-full shadow hover:bg-green-300 transition">
            <Volume2 className="w-5 h-5" />
            <span className="text-sm font-semibold">Tap to Hear Instructions</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book a Service */}
          <div className="bg-green-50 rounded-3xl shadow-md p-6 border hover:shadow-xl transition-shadow text-center">
            <div className="text-6xl mb-3">📋</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Book a Service</h2>
            <p className="text-gray-700 text-base mb-4">
              Need help with home repair, tailoring or tutoring? Tap below to book local help easily.
            </p>
            <Link
              href="/BookingConfirmation"
              className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 hover:scale-105 transition-transform"
            >
              🚀 Book Now
            </Link>
          </div>

          {/* Register as Provider */}
          <div className="bg-yellow-50 rounded-3xl shadow-md p-6 border hover:shadow-xl transition-shadow text-center">
            <div className="text-6xl mb-3">🧑‍🔧</div>
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Register as Worker</h2>
            <p className="text-gray-700 text-base mb-4">
              Are you a plumber, tailor, tutor, or electrician? Join and earn by offering services nearby.
            </p>
            <Link
              href="/RegisterServiceProvider"
              className="inline-block px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 transition-transform"
            >
              📝 Register Now
            </Link>
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            📘 About Us
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            📞 Contact
          </Link>
          <Link
            href="/questions"
            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            🆘 Help
          </Link>
        </div>
      </div>
    </div>
  );
}
