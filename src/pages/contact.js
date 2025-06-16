export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center border-4 border-green-300">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">📞 Contact Us <br />தொடர்பு கொள்ளுங்கள்</h1>

        <p className="text-gray-700 text-lg mb-6">
          You can reach us through the following methods:
          <br />
          <span className="text-sm text-gray-600">
            கீழ்க்காணும் முறைகளில் எங்களை அணுகலாம்:
          </span>
        </p>

        <ul className="text-left space-y-4 text-gray-800 text-base">
          <li>
            <span className="text-xl">📧</span>{' '}
            <strong>Email:</strong> support@gramsewa.com
            <br />
            <span className="text-sm text-gray-600 ml-6">மின்னஞ்சல் முகவரி</span>
          </li>
          <li>
            <span className="text-xl">📱</span>{' '}
            <strong>Phone:</strong> +91 9788613540
            <br />
            <span className="text-sm text-gray-600 ml-6">தொலைபேசி எண்</span>
          </li>
          <li>
            <span className="text-xl">📍</span>{' '}
            <strong>Address:</strong> 123 Gram Sewa Road, Tamil Nadu, India
            <br />
            <span className="text-sm text-gray-600 ml-6">முகவரி: 123 கிராம் சேவா சாலை, தமிழ்நாடு, இந்தியா</span>
          </li>
        </ul>

        <div className="mt-8 text-sm text-gray-500">
          💡 We’re here to help you 24/7 for any local service support! <br />
          <span className="text-sm text-gray-600">
            💡 உங்கள் தேவைப்படும் சேவைக்காக நாங்கள் 24/7 தயாராக இருக்கிறோம்!
          </span>
        </div>
      </div>
    </div>
  );
}
