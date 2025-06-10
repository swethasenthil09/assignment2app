import React from "react";
import ServiceProviderRegistration from "../components/ServiceProviderRegistration";

const RegisterServiceProvider = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 to-green-200 flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg border border-green-300">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          🧑‍🔧 Service Provider Registration
        </h2>
        <ServiceProviderRegistration />
      </div>
    </div>
  );
};

export default RegisterServiceProvider;
