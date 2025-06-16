export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center border-4 border-green-300">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">📞 Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          You can reach us through the following methods:
        </p>

        <ul className="text-left space-y-4 text-gray-800 text-base">
          <li>
            <span className="text-xl">📧</span>{' '}
            <strong>Email:</strong> support@gramsewa.com
          </li>
          <li>
            <span className="text-xl">📱</span>{' '}
            <strong>Phone:</strong> +91 9788613540
          </li>
          <li>
            <span className="text-xl">📍</span>{' '}
            <strong>Address:</strong> 123 Gram Sewa Road, Tamil Nadu, India
          </li>
        </ul>

        <div className="mt-8 text-sm text-gray-500">
          💡 We’re here to help you 24/7 for any local service support!
        </div>
      </div>
    </div>
  );
}