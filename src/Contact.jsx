import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Get in Touch With Us
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Have questions, feedback, or need support? We’re here to help you
          report and resolve civic issues faster.
        </p>
      </header>

      {/* Contact Info Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Location"
            className="w-14 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Our Office</h3>
          <p className="text-gray-600">
            123 Civic Center Road, New Delhi, India
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            className="w-14 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-600">support@civicapp.in</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Phone"
            className="w-14 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map + Social Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Map Embed */}
          <iframe
            title="office-map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2167%2C28.6139%2C77.2167%2C28.6139&layer=mapnik"
            className="w-full h-96 rounded-2xl shadow"
          ></iframe>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <p className="text-gray-600 mb-6">
              Stay connected with us on social media for updates, initiatives,
              and community success stories.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-10"
                />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-10"
                />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733614.png"
                  alt="Instagram"
                  className="w-10"
                />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                  alt="LinkedIn"
                  className="w-10"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Quick Help?</h2>
        <p className="mb-6 text-lg opacity-90">
          Check our FAQ section to find answers to common questions.
        </p>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">
          Visit FAQ
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Civic Reporting Platform. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
