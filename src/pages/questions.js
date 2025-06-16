import { useState } from "react";

const faqList = [
  {
    question: "How do I book a service?",
    answer:
      "You can book a service by visiting the homepage and clicking on “Book Now.” Fill in your service details and submit the form.\nசேவையைப் பதிவு செய்ய, முகப்புப் பக்கத்திற்குச் சென்று “Book Now” என்பதை கிளிக் செய்யவும். உங்கள் சேவையின் விவரங்களை நிரப்பி படிவத்தை சமர்ப்பிக்கவும்.",
  },
  {
    question: "Who provides these services?",
    answer:
      "Local professionals from your village or nearby areas — like plumbers, tailors, electricians, and tutors — who have registered with us.\nஇந்த சேவைகள் உங்கள் கிராமம் அல்லது அருகிலுள்ள இடங்களில் உள்ள உள்ளூர் நிபுணர்களால் வழங்கப்படுகின்றன — பிளம்பர்கள், தையல்காரர்கள், மின்சாதன நிபுணர்கள் மற்றும் துணை ஆசிரியர்கள்.",
  },
  {
    question: "Is there any cost to register as a provider?",
    answer:
      "No. Registering as a service provider on Smart Gram Sewa is completely free.\nஇல்லை. Smart Gram Sewa-வில் சேவை வழங்குநராக பதிவு செய்வது முற்றிலும் இலவசம்.",
  },
  {
    question: "How do I become a provider?",
    answer:
      "Click on the “Register Now” button on the homepage and submit your skills and contact information to get listed.\nமுகப்புப் பக்கத்தில் உள்ள “Register Now” பட்டனை கிளிக் செய்து உங்கள் திறன்கள் மற்றும் தொடர்பு விவரங்களை சமர்ப்பிக்கவும்.",
  },
  {
    question: "What if I face an issue with a booking?",
    answer:
      "Please contact our support team through the Contact page. We’ll resolve your issue promptly.\nஒரு பதிவில் சிக்கல் ஏற்பட்டால், Contact பக்கத்தின் மூலம் எங்கள் ஆதரவு குழுவை அணுகவும். உங்கள் பிரச்சனையை விரைவில் தீர்ப்போம்.",
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
      setMatchedAnswer(
        "Sorry, we couldn’t find an answer to your question. Please visit the Contact page for more help.\nமன்னிக்கவும், உங்கள் கேள்விக்கு பதில் காணவில்லை. மேலும் உதவிக்கு Contact பக்கத்தை பார்வையிடவும்."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        🆘 Help & Ask a Question <br />
        ❓ உதவி மற்றும் கேள்விகள்
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
            {matchedAnswer.split("\n").map((line, index) => (
              <p
                key={index}
                className={`mt-1 ${index === 0 ? "text-gray-800" : "text-sm text-gray-600"}`}
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
