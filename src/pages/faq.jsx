import React, { useState } from "react";

const faqs = [
  {
    question: "What is Smart Gram Sewa?",
    answer:
      "Smart Gram Sewa is an online platform that connects rural and semi-urban communities with verified service providers like plumbers, electricians, tailors, and tutors for their daily needs.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Simply register or log in, choose the required service, enter your details, and confirm the booking. The assigned service provider will contact you shortly.",
  },
  {
    question: "Are the service providers verified?",
    answer:
      "Yes, all service providers undergo a verification process to ensure they are skilled and trustworthy before they are listed on the platform.",
  },
  {
    question: "Is Smart Gram Sewa available in my village?",
    answer:
      "Smart Gram Sewa is expanding rapidly. Please enter your pin code during booking to check if services are currently available in your area.",
  },
  {
    question: "Can I contact customer support?",
    answer:
      "Yes, you can reach our support team anytime using the 'Support' section or by calling our toll-free number available on the app.",
  },
  {
    question: "Is there a charge for booking?",
    answer:
      "Booking is free. You only pay for the service after it’s completed, either in cash or via digital payment.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          ❓ Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-green-600">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 Smart Gram Sewa. Empowering rural lives with local solutions.
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
