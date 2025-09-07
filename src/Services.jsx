import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "./Footer";

export default function DepartmentsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="text-gray-800">
      {/* Page Hero */}
      <section
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800 text-white"
        data-scroll
        data-scroll-speed="5"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-lg flex gap-10 items-center">
          <img className="h-20" src="https://icons.veryicon.com/png/o/miscellaneous/the-font-is-great/bank-41.png" alt="" />Departments & Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-center opacity-90">
          Explore how we resolve civic issues with specialized departments and
          streamlined services for every citizen’s needs.
        </p>
      </section>

      {/* Section 1: Sanitation */}
      <section
        className="min-h-screen flex items-center bg-gray-50 px-8 py-20"
        data-scroll
        data-scroll-speed="1"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://www.cantonrep.com/gcdn/authoring/2018/12/10/NREP/ghows-OH-7c70ebc9-6a33-1da5-e053-0100007f9646-d766c267.jpeg?width=660&height=439&fit=crop&format=pjpg&auto=webp"
            alt="Sanitation"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition"
            data-scroll
            data-scroll-speed="2"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-700">
              Sanitation Department
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dedicated to keeping the city clean, hygienic, and waste-free.
              From daily garbage collection to large-scale cleanliness drives,
              this department ensures every corner of the city shines.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Daily waste collection and disposal monitoring</li>
              <li>Door-to-door garbage segregation initiatives</li>
              <li>Swachh Bharat awareness campaigns</li>
              <li>Cleaning of drains and public areas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Public Works */}
      <section
        className="min-h-screen flex items-center bg-gray-100 px-8 py-20"
        data-scroll
        data-scroll-speed="1"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-700">
              Public Works Department
            </h2>
            <p className="text-gray-700 mb-6">
              Responsible for infrastructure maintenance and city development.
              From smooth roads to functioning streetlights, Public Works keeps
              the city running efficiently and safely.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Road repair and pothole filling system</li>
              <li>Streetlight monitoring and replacement</li>
              <li>Bridge and flyover construction oversight</li>
              <li>Smart city projects implementation</li>
            </ul>
          </div>
          <img
            src="https://tnpwdea.org/images/cm.png"
            alt="Public Works"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition"
            data-scroll
            data-scroll-speed="2"
          />
        </div>
      </section>

      {/* Section 3: Water Supply */}
      <section
        className="min-h-screen flex items-center bg-gray-50 px-8 py-20"
        data-scroll
        data-scroll-speed="1"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzhVZkQIZZSC9MFXPw07VmEv-I9_3rdvz_w&s"
            alt="Water Supply"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition"
            data-scroll
            data-scroll-speed="2"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-600">
              Water Supply Department
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ensures safe, clean drinking water reaches every household.
              Constant monitoring and pipeline management guarantee reliability
              and quick action during leaks or disruptions.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Water quality testing & purification</li>
              <li>Pipeline leak detection & repair system</li>
              <li>24/7 water supply monitoring</li>
              <li>Rainwater harvesting projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Parks & Environment */}
      <section
        className="min-h-screen flex items-center bg-gray-100 px-8 py-20"
        data-scroll
        data-scroll-speed="1"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-teal-700">
              Parks & Environment
            </h2>
            <p className="text-gray-700 mb-6">
              Green lungs of the city, this department maintains parks, promotes
              plantations, and leads eco-friendly initiatives for sustainable
              living.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Maintenance of parks & gardens</li>
              <li>Tree plantation & biodiversity drives</li>
              <li>Eco-friendly civic development</li>
              <li>Public awareness on environmental issues</li>
            </ul>
          </div>
          <img
            src="https://cdn.prod.website-files.com/57822c659e1627a433e6a7c6/60f1a5072e93c71ce374b4a1_fckudwf-ei8hvTpmxjJqUG11x56RlR-M5Rs_h41W30ppvbOhkGHd1W-tCA3YStLqzuu2ezVWXuWQbbENLNwCJ4j7osvoHDxteKiy9StlOi5U8SWgwSfruONDWshAUDIcJPDxTlON.jpeg"
            alt="Parks"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition"
            data-scroll
            data-scroll-speed="2"
          />
        </div>
      </section>

      {/* Section 5: Emergency Services */}
      <section
        className="min-h-screen flex items-center bg-gray-50 px-8 py-20"
        data-scroll
        data-scroll-speed="1"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="data:image/png;base64,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"
            alt="Emergency Services"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition"
            data-scroll
            data-scroll-speed="2"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-red-700">
              Emergency Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Provides immediate response to crises including fire, flood,
              earthquakes, and medical emergencies. Ensures citizen safety with
              fast, coordinated action.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Fire safety & rescue operations</li>
              <li>Disaster preparedness training</li>
              <li>Emergency hotline & quick response teams</li>
              <li>Medical emergency coordination</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
