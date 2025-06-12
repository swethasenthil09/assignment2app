import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white font-sans">
      {/* Navbar */}
      <header className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart Gram Sewa</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-green-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/questions" legacyBehavior>
                  <a className="hover:text-green-300">Help</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Empowering Rural India with Local Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Smart Gram Sewa connects villages with skilled professionals like plumbers, electricians, tailors, and tutors — available at your doorstep.
        </p>

        <div className="mt-8">
          <Link href="/questions" legacyBehavior>
            <a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all">
                Need Help?
              </button>
            </a>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t mt-12">
        © 2025 Smart Gram Sewa. All rights reserved.
      </footer>
    </div>
  );
}