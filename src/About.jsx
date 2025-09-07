import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        About Our Civic Reporting App
      </h1>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1694475335011-c2d9e97b1714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsZWFuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D"
              alt="Swachh Bharat Mission"
              className="rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to empower citizens to take an active role in improving
              their cities by reporting civic issues like potholes, garbage
              dumps, and broken streetlights. With real-time tracking and
              seamless communication, we ensure better governance and a cleaner,
              safer environment.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is aligned with the{" "}
              <span className="font-semibold">Swachh Bharat Mission</span> — to
              create a clean, green, and digitally connected India where every
              citizen can contribute to better governance through technology.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="swacch-bharat.svg"
              alt="Clean India"
              className="rounded-2xl "
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">
            Key Features of Our App
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Auto Location Detection
              </h3>
              <p className="text-gray-600 text-center">
                Reports automatically capture your location for precise issue
                mapping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                alt="Upload Media"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Media Support
              </h3>
              <p className="text-gray-600 text-center">
                Upload images, videos, or even voice notes to explain issues
                clearly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Tracking"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Track Your Report
              </h3>
              <p className="text-gray-600 text-center">
                Get updates at every stage — submission, acknowledgment, and
                resolution.
              </p>
            </div>
          </div>
        </div>

        {/* Make in India Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Proudly Made in India</h2>
          <img
            src="make-in-india.png"
            alt="Make in India"
            className="mx-auto w-72 mb-2"
          />
          <p className="text-gray-700 max-w-2xl mx-auto">
            This platform is built under the{" "}
            <span className="font-semibold">Make in India</span> initiative,
            leveraging local talent and technology to empower our communities
            and drive digital transformation across the nation.
          </p>
        </div>

        {/* Swachh Bharat Banner */}
        <div className="text-center mt-16">
          <img
            src="swacch-bharat.svg"
            alt="Swachh Bharat Logo"
            className="mx-auto w-64"
          />
          <p className="text-lg text-gray-700 mt-6 font-semibold">
            Together, let’s build a cleaner and smarter India 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
}
