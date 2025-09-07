import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
      <div className="flex w-[900px] shadow-lg rounded-2xl bg-white overflow-hidden">
        {/* Left Section */}
        <div className="bg-yellow-400 w-2/5 p-10 flex flex-col justify-center">
          {/* Image */}
          <div className="mb-8">
            <img
              src="download.jpeg"
              alt="Promo"
              className="w-full h-full rounded-xl"
            />
          </div>
           {/* Info Cards */}
          <div className="mb-5 space-y-1 text-sm">
            <div>✔️ Raise complaints about civic issues instantly </div>
            <div>✔️ Track real-time status updates of your reports  </div>
            <div>✔️ Earn rewards for active participation</div>
            <div>✔️ Join hands in making your city smarter & cleaner</div>
          </div>
          {/* Stay Updated */}
          <div>
            <h3 className="font-semibold mb-2">🌍Stay Engaged</h3>
            <p className="text-sm">
            Be part of a community that cares about transparency, accountability, and progress.
            </p>
          </div>
          {/* Terms */}
          <div className="mt-auto text-xs text-gray-700 bg-yellow-100 p-3 rounded-lg">
            By signing in to JanSetu Portal, you agree to our{' '}
            <a href="#" className="underline">Terms</a> •{' '}
            <a href="#" className="underline">Privacy</a> •{' '}
            <a href="#" className="underline">Guidelines</a>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-3/5 p-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-1">
            <img src="logo.png" alt="Saarthi Logo" className="h-20" />
          </div>
          {/* Welcome Text */}
          <h2 className="text-2xl font-bold mb-1">
            Welcome back to JanSetu Portal <span>👋</span>
          </h2>
          <p className="mb-4 text-gray-600">
            Sign in to your account to continue your journey
          </p>
          {/* Features */}
          <div className="mb-5 text-sm space-x-4">
            <span className="text-orange-600">Complain Portal</span>
            <span className="text-blue-700">Rewards</span>
            <span className="text-green-700">Real Time Status Monitoring</span>
          </div>
          {/* Form */}
          <form>
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
            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-orange-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
            >
              Sign in &rarr;
            </button>
          </form>
          {/* Create Account */}
          <div className="mt-6 text-center text-sm">
            New to JanSetu Portal?{' '}
            <Link to="/signup" className="text-orange-600 font-semibold hover:underline">
              Create an account &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;