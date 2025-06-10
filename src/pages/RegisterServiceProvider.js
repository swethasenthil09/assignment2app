import React from "react";
import ServiceProviderForm from "../components/ServiceProviderForm";

const RegisterServiceProvider = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Service Provider Registration</h2>
      <ServiceProviderForm />
    </div>
  );
};

export default RegisterServiceProvider;