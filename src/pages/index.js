import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react'; // Optional: if you're tracking analytics

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-100 to-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-green-300">

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-4 drop-shadow-md">
          🌾 Smart Gram Sewa
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Empowering rural and semi-urban communities with on-demand local services like plumbing, tailoring, electrician help, and tutoring.
        </p>

        {/* Service & Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Book Service */}
          <div className="bg-green-50 rounded-2xl shadow-md p-8 border border-green-200 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">📋 Book a Service</h2>
            <p className="text-gray-600 mb-6">
              Need help with home repairs, tailoring, or tutoring? Quickly book a trusted local professional near you.
            </p>
            <Link href="/BookingConfirmation">
              <a className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-transform transform hover:scale-105">
                🚀 Book Now
              </a>
            </Link>
          </div>

          {/* Register Provider */}
          <div className="bg-yellow-50 rounded-2xl shadow-md p-8 border border-yellow-200 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-3">🧑‍🔧 Register as a Service Provider</h2>
            <p className="text-gray-600 mb-6">
              Are you a local worker? Join our platform to offer your services and reach people in your area.
            </p>
            <Link href="/RegisterServiceProvider">
              <a className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105">
                📝 Register Now
              </a>
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-14">
          <Link href="/about">
            <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-transform hover:scale-105">
              📘 About Us
            </a>
          </Link>

          <Link href="/contact">
            <a className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md transition-transform hover:scale-105">
              📞 Contact Us
            </a>
          </Link>

          <Link href="/questions">
            <a className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-md transition-transform hover:scale-105">
              ❓ Help
            </a>
          </Link>
        </div>

        {/* Optional Analytics Tracking */}
        <Analytics />
      </div>
    </div>
  );
}
