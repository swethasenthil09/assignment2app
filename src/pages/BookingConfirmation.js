import React from "react";
import BookingConfirmation from "../components/BookingConfirmation";

const BookingConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-lime-100 to-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        🧾 Booking Confirmation Page
        <div className="text-sm text-gray-600 mt-1">📄 சேவை பதிவு உறுதி பக்கம்</div>
      </h1>
      <BookingConfirmation />
    </div>
  );
};

export default BookingConfirmationPage;
