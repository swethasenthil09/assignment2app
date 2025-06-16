import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-100 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-green-300">
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-4 drop-shadow-md">
          🌾 Smart Gram Sewa
        </h1>
        <p className="text-center text-xl text-gray-700 mb-6">
          🧰🔌📚 Empowering villages with easy, on-demand services like plumbing, tailoring, electrician work, and tutoring.
          <br />
          <span className="text-sm text-gray-600">
            🧰🔌📚 குடியிருப்புகளுக்கு தேவையான சேவைகள் – குழாய் வேலை, தையல், மின் பணிகள் மற்றும் துணைப்பாட வகுப்புகள் – அனைத்தும் இலகுவாக உங்கள் ஊரிலேயே!
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book a Service */}
          <div className="bg-green-50 rounded-3xl shadow-md p-6 border hover:shadow-xl transition-shadow text-center">
            <div className="text-6xl mb-3">📋</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Book a Service<br />ஒரு சேவையை முன்பதிவு செய்யவும்
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Need help with home repair, tailoring or tutoring? Tap below to book local help easily.
              <br />
              <span className="text-sm text-gray-600">
                வீட்டுப்பணிகள், தையல் அல்லது டியூஷன் உதவி வேண்டுமா? கீழே கிளிக் செய்து உங்கள் பகுதியில் உள்ள ஒருவரை எளிதாக முன்பதிவு செய்யுங்கள்.
              </span>
            </p>
            <Link
              href="/BookingConfirmation"
              className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 hover:scale-105 transition-transform"
            >
              🚀 Book Now <span className="text-sm">| இப்போது முன்பதிவு செய்யவும்</span>
            </Link>
          </div>

          {/* Register as Provider */}
          <div className="bg-yellow-50 rounded-3xl shadow-md p-6 border hover:shadow-xl transition-shadow text-center">
            <div className="text-6xl mb-3">🧑‍🔧</div>
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">
              Register as Worker<br />தொழிலாளராக பதிவு செய்யவும்
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Are you a plumber, tailor, tutor, or electrician? Join and earn by offering services nearby.
              <br />
              <span className="text-sm text-gray-600">
                நீங்கள் ஒரு குழாய்காரரா, தையல்காரரா, டியூட்டரா அல்லது மின் பொறியாளரா? உங்களின் சேவைகளை வழங்கி வருவாய் சம்பாதிக்க இங்கு பதிவு செய்யுங்கள்.
              </span>
            </p>
            <Link
              href="/RegisterServiceProvider"
              className="inline-block px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 transition-transform"
            >
              📝 Register Now <span className="text-sm">| இப்போது பதிவு செய்யவும்</span>
            </Link>
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            📘 About Us <span className="text-sm">| எங்களை பற்றி</span>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            📞 Contact <span className="text-sm">| தொடர்புகொள்ள</span>
          </Link>
          <Link
            href="/questions"
            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-md text-lg hover:scale-105 transition-transform"
          >
            🆘 Help <span className="text-sm">| உதவி</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
