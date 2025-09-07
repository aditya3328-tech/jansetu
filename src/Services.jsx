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
    <div ref={containerRef} data-scroll-container className="text-gray-800 bg-gradient-to-b from-white via-sky-50 to-gray-50 pb-24">
      {/* Page Hero */}
      <section
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-700 to-indigo-800 text-white relative overflow-hidden"
        data-scroll
        data-scroll-speed="5"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-md flex gap-6 items-center justify-center">
            <img className="h-20 rounded-lg shadow-md" src="dept.png" alt="" />
            <span className="leading-tight">Departments & Services</span>
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto text-white/90">
            Explore how we resolve civic issues with specialized departments and
            streamlined services for every citizen’s needs.
          </p>

          <div className="mt-8 flex gap-3 justify-center">
            <a href="/report" className="inline-flex items-center gap-2 bg-white text-sky-700 px-5 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transition">
              Report an Issue
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-full font-medium hover:bg-white/20 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Sanitation */}
      <section className="min-h-screen flex items-center bg-gray-50 px-8 py-20" data-scroll data-scroll-speed="1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://www.cantonrep.com/gcdn/authoring/2018/12/10/NREP/ghows-OH-7c70ebc9-6a33-1da5-e053-0100007f9646-d766c267.jpeg?width=660&height=439&fit=crop&format=pjpg&auto=webp"
            alt="Sanitation"
            className="rounded-3xl shadow-lg w-full h-[480px] object-cover hover:scale-105 transition-transform duration-200"
            data-scroll
            data-scroll-speed="1.2"
          />
          <div className="bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-gray-100">
            <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Sanitation</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-sky-800">Sanitation Department</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Dedicated to keeping the city clean, hygienic, and waste-free. From daily garbage collection to large-scale cleanliness drives, this department ensures every corner of the city shines.</p>
            <ul className="space-y-3 text-gray-600 pl-4">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18"/><path d="M6 7v13a2 2 0 002 2h8a2 2 0 002-2V7"/></svg> Daily waste collection and disposal monitoring</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg> Door-to-door garbage segregation initiatives</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h18"/><path d="M7 7v8"/></svg> Swachh Bharat awareness campaigns</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v4H3z"/><path d="M8 11v6"/></svg> Cleaning of drains and public areas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Public Works */}
      <section className="min-h-screen flex items-center bg-gray-100 px-8 py-20" data-scroll data-scroll-speed="1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-gray-100">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Public Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-emerald-800">Public Works Department</h2>
            <p className="text-gray-700 mb-6">Responsible for infrastructure maintenance and city development. From smooth roads to functioning streetlights, Public Works keeps the city running efficiently and safely.</p>
            <ul className="space-y-3 text-gray-600 pl-4">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M6 12v6"/></svg> Road repair and pothole filling system</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M12 16v6"/></svg> Streetlight monitoring and replacement</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v2H4z"/><path d="M6 10v8"/></svg> Bridge and flyover construction oversight</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M8 12h8"/></svg> Smart city projects implementation</li>
            </ul>
          </div>
          <img
            src="https://tnpwdea.org/images/cm.png"
            alt="Public Works"
            className="rounded-3xl shadow-lg w-full h-[480px] object-cover hover:scale-105 transition-transform duration-200 order-1 md:order-2"
            data-scroll
            data-scroll-speed="1.2"
          />
        </div>
      </section>

      {/* Section 3: Water Supply */}
      <section className="min-h-screen flex items-center bg-gray-50 px-8 py-20" data-scroll data-scroll-speed="1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzhVZkQIZZSC9MFXPw07VmEv-I9_3rdvz_w&s"
            alt="Water Supply"
            className="rounded-3xl shadow-lg w-full h-[480px] object-cover hover:scale-105 transition-transform duration-200"
            data-scroll
            data-scroll-speed="1.2"
          />
          <div className="bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-gray-100">
            <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Water Supply</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-sky-700">Water Supply Department</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Ensures safe, clean drinking water reaches every household. Constant monitoring and pipeline management guarantee reliability and quick action during leaks or disruptions.</p>
            <ul className="space-y-3 text-gray-600 pl-4">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg> Water quality testing & purification</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M6 12v6"/></svg> Pipeline leak detection & repair system</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M12 16v6"/></svg> 24/7 water supply monitoring</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v2H4z"/></svg> Rainwater harvesting projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Parks & Environment */}
      <section className="min-h-screen flex items-center bg-gray-100 px-8 py-20" data-scroll data-scroll-speed="1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-gray-100">
            <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Parks & Environment</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-800">Parks & Environment</h2>
            <p className="text-gray-700 mb-6">Green lungs of the city, this department maintains parks, promotes plantations, and leads eco-friendly initiatives for sustainable living.</p>
            <ul className="space-y-3 text-gray-600 pl-4">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/></svg> Maintenance of parks & gardens</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M7 7v8"/></svg> Tree plantation & biodiversity drives</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v2H4z"/></svg> Eco-friendly civic development</li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/></svg> Public awareness on environmental issues</li>
            </ul>
          </div>
          <img
            src="https://cdn.prod.website-files.com/57822c659e1627a433e6a7c6/60f1a5072e93c71ce374b4a1_fckudwf-ei8hvTpmxjJqUG11x56RlR-M5Rs_h41W30ppvbOhkGHd1W-tCA3YStLqzuu2ezVWXuWQbbENLNwCJ4j7osvoHDxteKiy9StlOi5U8SWgwSfruONDWshAUDIcJPDxTlON.jpeg"
            alt="Parks"
            className="rounded-3xl shadow-lg w-full h-[480px] object-cover hover:scale-105 transition-transform duration-200"
            data-scroll
            data-scroll-speed="1.2"
          />
        </div>
      </section>

      {/* Section 5: Emergency Services */}
      <section className="min-h-screen flex items-center bg-gray-50 px-8 py-20" data-scroll data-scroll-speed="1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://iconape.com/wp-content/files/en/264676/svg/264676.svg"
              alt="Emergency Services"
              className="rounded-3xl shadow-lg w-full h-[480px] object-cover hover:scale-105 transition-transform duration-200"
              data-scroll
              data-scroll-speed="1.2"
            />
            <div className="bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-gray-100">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Emergency</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-700">Emergency Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Provides immediate response to crises including fire, flood, earthquakes, and medical emergencies. Ensures citizen safety with fast, coordinated action.</p>
              <ul className="space-y-3 text-gray-600 pl-4">
                  <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M12 6v12"/></svg> Fire safety & rescue operations</li>
                  <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M12 16v6"/></svg> Disaster preparedness training</li>
                  <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg> Emergency hotline & quick response teams</li>
                  <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v2H4z"/></svg> Medical emergency coordination</li>
                </ul>
            </div>
          </div>
        </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
