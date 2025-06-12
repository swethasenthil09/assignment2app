import { useState } from "react";

const faqList = [
  {
    question: "How do I book a service?",
    answer:
      "You can book a service by visiting the homepage and clicking on “Book Now.” Fill in your service details and submit the form.",
  },
  {
    question: "Who provides these services?",
    answer:
      "Local professionals from your village or nearby areas — like plumbers, tailors, electricians, and tutors — who have registered with us.",
  },
  {
    question: "Is there any cost to register as a provider?",
    answer:
      "No. Registering as a service provider on Smart Gram Sewa is completely free.",
  },
  {
    question: "How do I become a provider?",
    answer:
      "Click on the “Register Now” button on the homepage and submit your skills and contact information to get listed.",
  },
  {
    question: "What if I face an issue with a booking?",
    answer:
      "Please contact our support team through the Contact page. We’ll resolve your issue promptly.",
  },
];

export default function Questions() {
  const [userQuestion, setUserQuestion] = useState("");
  const [matchedAnswer, setMatchedAnswer] = useState("");

  const handleSearch = () => {
    const found = faqList.find((item) =>
      userQuestion.toLowerCase().includes(item.question.toLowerCase())
    );

    if (found) {
      setMatchedAnswer(found.answer);
    } else {
      setMatchedAnswer("Sorry, we couldn’t find an answer to your question. Please visit the Contact page for more help.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        🆘 Help & Ask a Question
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <input
          type="text"
          placeholder="Type your question here..."
          className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="mt-4 px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all"
        >
          Search Answer
        </button>
        {matchedAnswer && (
          <div className="mt-6 bg-green-50 p-4 rounded-md border border-green-200 text-left">
            <strong className="text-green-800">Answer:</strong>
            <p className="text-gray-800 mt-1">{matchedAnswer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
