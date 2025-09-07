import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">🌍 Introduction to Civic Sense</h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">JanSetu helps citizens report, track and resolve civic issues with transparency and community collaboration.</p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-800">Watch the overview</h3>
              <p className="text-gray-600 mt-2">A short walkthrough explains how to submit reports, engage with the community, and track outcomes.</p>
              <div className="mt-4">
                <video className="w-full rounded-xl" controls src="video.mp4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-blue-800">Easy Reporting</h4>
                <p className="text-sm text-gray-600 mt-1">Report with photos, location and categories in under a minute.</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-blue-800">Real-time Tracking</h4>
                <p className="text-sm text-gray-600 mt-1">Get status updates as departments act on reports.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-blue-800">Why JanSetu?</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Transparent workflows with assigned departments.</li>
                <li>Community-driven improvements and voting.</li>
                <li>Secure accounts and reliable reporting.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold">Get started</h4>
              <p className="mt-2 text-sm">Create an account and submit your first report — stand up for a cleaner, safer city.</p>
              <div className="mt-4 flex gap-3">
                <Link to="/signup" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold">Create Account</Link>
                <Link to="/report" className="border border-white px-4 py-2 rounded-lg">Submit a Report</Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
