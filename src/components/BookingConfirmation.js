import React, { useEffect, useState } from "react";

const BookingConfirmation = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Simulated booking data (this could come from API or context)
    const bookingData = {
      service: "Electrician",
      referenceId: "SGS12345678",
      provider: "Raj Kumar",
      estimatedArrival: "Today by 4:00 PM",
      support: "1800-123-456",
    };
    setBookingDetails(bookingData);
  }, []);

  const downloadReceipt = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Smart Gram Sewa - Booking Receipt\n\nService: ${bookingDetails.service}\nReference ID: ${bookingDetails.referenceId}\nProvider: ${bookingDetails.provider}\nEstimated Arrival: ${bookingDetails.estimatedArrival}`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "booking_receipt.txt";
    document.body.appendChild(element);
    element.click();
  };

  if (!bookingDetails) return <p className="text-center mt-10">Loading booking details...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-2xl border border-green-200">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">🎉 Booking Confirmed!</h2>
      
      <div className="text-lg text-gray-700 space-y-4">
        <p><strong>Service:</strong> {bookingDetails.service}</p>
        <p><strong>Reference ID:</strong> {bookingDetails.referenceId}</p>
        <p><strong>Assigned Provider:</strong> {bookingDetails.provider}</p>
        <p><strong>Estimated Arrival:</strong> {bookingDetails.estimatedArrival}</p>
        <p><strong>Contact Support:</strong> <a href={`tel:${bookingDetails.support}`} className="text-blue-600 underline">{bookingDetails.support}</a></p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={downloadReceipt}
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          📄 Download Receipt
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
