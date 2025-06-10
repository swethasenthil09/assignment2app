import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-lime-200 to-green-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center border border-green-300">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4 drop-shadow-md">🌾 Welcome to Smart Gram Sewa</h1>
        <p className="text-gray-700 text-lg mb-8">
          Empowering rural and semi-urban communities with on-demand local services including plumbing, tailoring, electrician work, and tutoring.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <a className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
              📞 Contact Us
            </a>
          </Link>

          <Link href="/about">
            <a className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
              📘 About Us
            </a>
          </Link>

          <Link href="/BookingConfirmation">
            <a className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
              ✅ View Booking
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
