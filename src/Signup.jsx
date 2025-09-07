import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-2xl bg-white overflow-hidden">
        <aside className="bg-yellow-400 w-full md:w-2/5 p-6 md:p-10">
          <img src="download.jpeg" alt="Promo" className="w-full h-40 md:h-56 object-cover rounded-xl mb-6" />
          <div className="space-y-1 text-sm">
            <div>✔️ Raise complaints about civic issues instantly</div>
            <div>✔️ Track real-time status updates of your reports</div>
            <div>✔️ Earn rewards for active participation</div>
            <div>✔️ Join hands in making your city smarter &amp; cleaner</div>
          </div>
          <div className="mt-6 text-xs text-gray-700 bg-yellow-100 p-3 rounded-lg">
            By signing up, you agree to our <a href="#" className="underline">Terms</a>, <a href="#" className="underline">Privacy</a>, and <a href="#" className="underline">Guidelines</a>.
          </div>
        </aside>

        <main className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto">
          <img src="logo.png" alt="JanSetu Logo" className="h-12 md:h-16 mb-4" />

          <div className="flex flex-wrap gap-2 mb-6">
            {["user", "worker", "admin", "subadmin"].map((r) => (
              <button key={r} onClick={() => setRole(r)} className={`px-3 py-2 rounded-lg font-medium border transition ${role === r ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

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

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="First name" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Last name" />
              </div>
            </div>

            <div className="mb-4 mt-4">
              <label className="block mb-1 font-medium">Email address</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Password" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Confirm Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Confirm password" />
              </div>
            </div>

            {role === "worker" && (
              <>
                <div className="mt-4">
                  <label className="block mb-1 font-medium">Worker Role</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Cleaner, Technician, etc." />
                </div>
                <div className="mt-4">
                  <label className="block mb-1 font-medium">Worker UID</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Worker UID" />
                </div>
              </>
            )}

            {(role === "admin" || role === "subadmin") && (
              <div className="mt-4">
                <label className="block mb-1 font-medium">Department</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Department name" />
              </div>
            )}

            <button type="submit" className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition">Sign Up →</button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account? <Link to="/login" className="text-orange-600 font-semibold hover:underline">Login →</Link>
          </div>
        </main>
      </div>
    </div>
  );
}
