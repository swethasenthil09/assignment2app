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

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
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
      setSubmitted(false);
    }
  }, [submitted]);

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
    console.log("Submitted Data:", formData);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />
      <label>
        Phone Number:
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />
      <label>
        Address:
        <input
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />
      <label>
        Service Type:
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Tailor">Tailor</option>
          <option value="Tutor">Tutor</option>
        </select>
      </label>
      <br /><br />
      <label>
        Upload Photo/ID Proof:
        <input type="file" onChange={handleFileChange} accept="image/*" />
      </label>
      <br /><br />
      <label>
        Languages Spoken:
        <input
          name="language"
          type="text"
          value={formData.language}
          onChange={handleChange}
        />
      </label>
      <br /><br />
      <label>
        Availability:
        <input
          name="availability"
          type="text"
          value={formData.availability}
          onChange={handleChange}
          placeholder="e.g. 9 AM - 5 PM"
        />
      </label>
      <br /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default ServiceProviderForm;
