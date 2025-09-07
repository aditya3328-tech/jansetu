import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-2xl bg-white overflow-hidden">
        <aside className="bg-yellow-400 w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center">
          <img src="download.jpeg" alt="Promo" className="w-full h-40 md:h-56 object-cover rounded-xl mb-6" />
          <div className="mb-4 text-sm space-y-1">
            <div>✔️ Raise complaints about civic issues instantly</div>
            <div>✔️ Track real-time status updates of your reports</div>
            <div>✔️ Earn rewards for active participation</div>
            <div>✔️ Join hands in making your city smarter &amp; cleaner</div>
          </div>
          <div className="mt-auto text-xs text-gray-700 bg-yellow-100 p-3 rounded-lg">
            By signing in to JanSetu Portal, you agree to our <a href="#" className="underline">Terms</a>, <a href="#" className="underline">Privacy</a>, and <a href="#" className="underline">Guidelines</a>.
          </div>
        </aside>

        <main className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
          <img src="logo.png" alt="JanSetu" className="h-12 md:h-20 mb-4" />
          <h1 className="text-2xl font-bold mb-1">Welcome back to JanSetu Portal <span>👋</span></h1>
          <p className="mb-4 text-gray-600">Sign in to your account to continue</p>

          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email address</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your password" />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-sm gap-3">
              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Remember me</label>
              <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition">Sign in →</button>
          </form>

          <div className="mt-6 text-center text-sm">
            New to JanSetu Portal? <Link to="/signup" className="text-orange-600 font-semibold hover:underline">Create an account →</Link>
          </div>
        </main>
      </div>
    </div>
  );
}