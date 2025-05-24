import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-auto min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center px-4 py-8 md:px-8">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Returning User? Log in to your account and continue your digital journey.
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3dc1b1]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3dc1b1]"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-60 bg-[#3dc1b1] text-white py-2 rounded-full font-semibold shadow hover:bg-[#35b0a1] transition block mx-auto"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 bg-[#3dc1b1] flex flex-col justify-center items-center px-4 py-12 md:px-8">
        <div className="max-w-sm w-full text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Transforma Technologies
          </h2>
          <p className="text-white text-lg md:text-xl">
            Create your account or log in to access personalized dashboards, manage your services, and explore advanced features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

