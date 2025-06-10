import React, { useState } from "react";

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
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setPhotoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
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
    setPhotoPreview(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-green-50 to-lime-100 p-8 rounded-2xl shadow-lg border border-green-300">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 space-y-6 bg-white rounded-2xl shadow-md p-8 border border-green-300"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
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
            className="w-full px-4 py-2 border border-green-400 rounded-lg shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md"
        >
          ✅ Register
        </button>
      </form>

      {/* Display Section */}
      {submittedData && (
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-8 border border-green-200">
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
          </ul>
          {photoPreview && (
            <div className="mt-6 text-center">
              <strong className="block mb-2">Uploaded Photo:</strong>
              <img
                src={photoPreview}
                alt="Uploaded Preview"
                className="w-40 h-40 object-cover rounded-lg border border-green-300 mx-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceProviderForm;
