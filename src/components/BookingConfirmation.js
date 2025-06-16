// pages/BookingConfirmation.js

import React, { useState } from "react";
import { db } from "../lib/firebase"; // ✅ This uses a relative path and will work
import { collection, addDoc, Timestamp } from "firebase/firestore";

const BookingConfirmation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const referenceId = "SGS" + Math.floor(Math.random() * 10000000);
    const estimatedArrival = "Today by 4:00 PM";
    const support = "1800-123-456";
    const provider = "Raj Kumar";

    const bookingDetails = {
      ...formData,
      referenceId,
      estimatedArrival,
      support,
      provider,
      createdAt: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "bookings"), bookingDetails);
      setConfirmation(bookingDetails);
      setSubmitted(true);
    } catch (error) {
      console.error("❌ Error saving booking:", error);
      alert("Something went wrong while saving your booking. Please try again.");
    }
  };

  const downloadReceipt = () => {
    const file = new Blob(
      [
        `Smart Gram Sewa - Booking Receipt\n\nName: ${confirmation.name}\nPhone: ${confirmation.phone}\nService: ${confirmation.service}\nReference ID: ${confirmation.referenceId}\nProvider: ${confirmation.provider}\nEstimated Arrival: ${confirmation.estimatedArrival}`,
      ],
      { type: "text/plain" }
    );

    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "booking_receipt.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-2xl border border-green-200">
      {!submitted ? (
        <>
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">📋 Book a Service</h2>
          <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select a Service</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
                <option value="Tailor">Tailor</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                ✅ Confirm Booking
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">🎉 Booking Confirmed!</h2>
          <div className="text-lg text-gray-700 space-y-3">
            <p><strong>Name:</strong> {confirmation.name}</p>
            <p><strong>Phone:</strong> {confirmation.phone}</p>
            <p><strong>Service:</strong> {confirmation.service}</p>
            <p><strong>Reference ID:</strong> {confirmation.referenceId}</p>
            <p><strong>Assigned Provider:</strong> {confirmation.provider}</p>
            <p><strong>Estimated Arrival:</strong> {confirmation.estimatedArrival}</p>
            <p><strong>Contact Support:</strong> <a href={`tel:${confirmation.support}`} className="text-blue-600 underline">{confirmation.support}</a></p>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={downloadReceipt}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              📄 Download Receipt
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingConfirmation;
