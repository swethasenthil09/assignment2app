import React, { useState, useEffect } from "react";

const ServiceProviderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    photo: null,
    language: "",
    availability: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Save a copy of the submitted form
    alert("Registration successful!");
    setFormData({
      name: "",
      phone: "",
      address: "",
      serviceType: "",
      photo: null,
      language: "",
      availability: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gradient-to-br from-green-100 via-lime-100 to-yellow-50 rounded-2xl shadow-lg p-8 border border-green-300"
      >
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
          🧑‍🔧 Service Provider Registration
        </h2>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Phone Number:
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Address:
          </label>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Service Type:
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="">Select</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Tailor">Tailor</option>
            <option value="Tutor">Tutor</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Upload Photo/ID Proof:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Languages Spoken:
          </label>
          <input
            name="language"
            type="text"
            value={formData.language}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Availability:
          </label>
          <input
            name="availability"
            type="text"
            value={formData.availability}
            onChange={handleChange}
            placeholder="e.g. 9 AM - 5 PM"
            className="w-full px-4 py-2 border border-green-400 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          ✅ Register
        </button>
      </form>

      {/* Display Submitted Info */}
      {submittedData && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-green-200">
          <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
            📝 Registered Provider Info
          </h3>
          <ul className="text-gray-800 space-y-2 text-lg">
            <li><strong>Name:</strong> {submittedData.name}</li>
            <li><strong>Phone:</strong> {submittedData.phone}</li>
            <li><strong>Address:</strong> {submittedData.address}</li>
            <li><strong>Service:</strong> {submittedData.serviceType}</li>
            <li><strong>Language:</strong> {submittedData.language}</li>
            <li><strong>Availability:</strong> {submittedData.availability}</li>
            <li>
              <strong>Photo Uploaded:</strong>{" "}
              {submittedData.photo ? submittedData.photo.name : "No file"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderForm;
