import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("user"); // default role

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
      <div className="flex w-[950px] shadow-lg rounded-2xl bg-white overflow-hidden">
        
        {/* Left Section */}
        <div className="bg-yellow-400 w-2/5 p-10 flex flex-col">
          {/* Image */}
          <div>
            <img
              src="download.jpeg"
              alt="Promo"
              className="w-full h-40 object-cover rounded-xl mb-6"
            />
            {/* Info */}
            <div className="space-y-1 text-sm">
              <div>✔️ Raise complaints about civic issues instantly</div>
              <div>✔️ Track real-time status updates of your reports</div>
              <div>✔️ Earn rewards for active participation</div>
              <div>✔️ Join hands in making your city smarter & cleaner</div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="mt-3">
            <h3 className="font-semibold mb-2">🌍 Stay Engaged</h3>
            <p className="text-sm mb-3">
              Be part of a community that cares about transparency,
              accountability, and progress.
            </p>
          </div>

          {/* Terms */}
          <div className="text-xs text-gray-700 bg-yellow-100 p-3 rounded-lg">
            By signing in to JanSetu Portal, you agree to our{" "}
            <a href="#" className="underline">
              Terms
            </a>{" "}
            •{" "}
            <a href="#" className="underline">
              Privacy
            </a>{" "}
            •{" "}
            <a href="#" className="underline">
              Guidelines
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-3/5 p-12 overflow-y-auto max-h-screen">
          {/* Logo */}
          <div className="mb-4">
            <img src="logo.png" alt="JanSetu Logo" className="h-16" />
          </div>

          {/* Role Tabs */}
          <div className="flex space-x-3 mb-6">
            {["user", "worker", "admin", "subadmin"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-4 py-2 rounded-lg font-medium border transition ${
                  role === r
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          {/* Dynamic Heading */}
          <h2 className="text-2xl font-bold mb-1">
            {role === "user" && "Join the JanSetu Portal 👋"}
            {role === "worker" && "Worker Registration 🛠️"}
            {role === "admin" && "Admin Panel Access 🔑"}
            {role === "subadmin" && "Sub Admin Access 🛠️"}
          </h2>
          <p className="mb-4 text-gray-600">
            {role === "user" && "Sign up to raise complaints and track status"}
            {role === "worker" && "Register as a worker to manage civic tasks"}
            {role === "admin" && "Manage users, complaints, and reports"}
            {role === "subadmin" && "Assist in complaint monitoring and approvals"}
          </p>

          {/* Features */}
          <div className="mb-5 text-sm space-x-4">
            <span className="text-orange-600">Complain Portal</span>
            <span className="text-blue-700">Rewards</span>
            <span className="text-green-700">Real Time Status Monitoring</span>
          </div>

          {/* Signup Form */}
          <form>
            {/* Common Fields */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your first name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your last name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Confirm your password"
              />
            </div>

            {/* Role Specific Fields */}
            {role === "worker" && (
              <>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Role</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter worker role (e.g. Cleaner, Technician)"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Worker UID</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter worker UID"
                  />
                </div>
              </>
            )}

            {role === "admin" && (
              <div className="mb-4">
                <label className="block mb-1 font-medium">Department</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter Department Name (e.g. Santisation Department )"
                />
              </div>
            )}

            {role === "subadmin" && (
              <div className="mb-4">
                <label className="block mb-1 font-medium">Department</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter The Department Name"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
            >
              Sign Up →
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Login →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
