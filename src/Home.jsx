// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

/**
 * JanSetu Home Page
 * - Single-file page with reusable FeatureCard and quality inline SVGs
 * - Tailwind-driven styling (colors controlled via wrapper divs)
 * - framer-motion for subtle entrance animations
 *
 * Requirements: tailwindcss, framer-motion, react-router-dom
 */

/* ------------------ Motion Variants ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

/* ------------------ High-quality SVG Icon Components ------------------ */
/* All icons use stroke="currentColor" so wrapper controls color */
const IconReport = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <path d="M9 3h6v4H9z" />
    <rect x="4" y="7" width="16" height="14" rx="2" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="15" x2="13" y2="15" />
  </svg>
);

const IconTrack = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v5l3 2" />
  </svg>
);

const IconCommunity = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <circle cx="7.5" cy="7.5" r="2.5" />
    <path d="M5 11c0 1.7 1.8 3 4 3s4-1.3 4-3" />
    <circle cx="16.5" cy="7.5" r="2.5" />
    <path d="M14 11c0 1.7 1.8 3 4 3s4-1.3 4-3" transform="translate(-6 0)" />
    <path d="M3 21v-1a4 4 0 014-4h3" />
    <path d="M12 21v-1a4 4 0 014-4h1" />
  </svg>
);

const IconSupport = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <path d="M12 2a10 10 0 00-10 10v1a3 3 0 003 3h1" />
    <path d="M12 22a10 10 0 0010-10v-1a3 3 0 00-3-3h-1" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

/* Role panel icons */
const IconCitizen = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <circle cx="12" cy="8" r="3" />
    <path d="M5 20a7 7 0 0114 0" />
    <path d="M3 13h18" />
  </svg>
);

const IconWorker = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <path d="M4 20h16" />
    <path d="M6 20v-6a2 2 0 012-2h8a2 2 0 012 2v6" />
    <path d="M9 10v-2a3 3 0 116 0v2" />
  </svg>
);

const IconDepartment = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7zM14 14h3v3h-3z" />
  </svg>
);

const IconSubAdmin = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <path d="M12 2l3 5 5 .8-3.6 3.5L18 18l-6-3-6 3 .6-6.7L2 7.8 7 7l3-5z" />
  </svg>
);

const IconAdmin = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    role="img"
  >
    <path d="M12 8v4l2 2" />
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h2M19 12h2M12 3v2M12 19v2" />
  </svg>
);

/* ------------------ Reusable Card ------------------ */
function FeatureCard({ icon, title, text, link, linkText }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition flex flex-col h-full"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          {/* Bigger icon */}
          {React.cloneElement(icon, { className: "w-10 h-10" })}
        </div>
        <div className="flex-1">
          <h3
            id={title.replace(/\s+/g, "-").toLowerCase()}
            className="text-2xl font-semibold text-blue-900"
          >
            {title}
          </h3>
          <p className="text-gray-600 mt-3 text-base">{text}</p>
        </div>
      </div>

      {link && (
        <div className="mt-6">
          {link === "#chat" ? (
            <button
              onClick={() => window.dispatchEvent(new Event("open-chat"))}
              className="text-blue-600 font-medium hover:underline text-base bg-transparent"
            >
              {linkText}
            </button>
          ) : (
            <Link
              to={link}
              className="text-blue-600 font-medium hover:underline text-base"
            >
              {linkText}
            </Link>
          )}
        </div>
      )}
    </motion.article>
  );
}


/* ------------------ Full Page Component ------------------ */
export default function Home() {
  const features = [
    {
      icon: <IconReport />,
      title: "Submit a Civic Report",
      text:
        "Report garbage, potholes, broken streetlights, stray animals, sanitation issues and more — with photos and location.",
      link: "/report",
      linkText: "Submit a Report →",
    },
    {
      icon: <IconTrack />,
      title: "Track Your Reports",
      text:
        "Monitor status updates, see assigned departments/workers and get real-time notifications about progress.",
      link: "/report",
      linkText: "Track Status →",
    },
    {
      icon: <IconCommunity />,
      title: "Community Access",
      text:
        "Discuss local issues, propose improvements and collaborate with nearby residents and neighborhood groups.",
      link: "/community",
      linkText: "Join the Community →",
    },
    {
      icon: <IconSupport />,
      title: "Contact & Support",
      text:
        "Reach our support team for help filing reports, following up on escalations, or partnerships with civic groups.",
      link: "/contact",
      linkText: "Contact Us →",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Chatbot Assistant",
      text: "Quick help about reporting, tracking and using JanSetu. Click to open the assistant.",
      link: "#chat",
      linkText: "Open Chat →",
    },
  ];

  const howItWorks = [
    { title: "1️⃣ Report", desc: "Submit a complaint in seconds with photo & location." },
    { title: "2️⃣ Track", desc: "See live status and actions taken by departments." },
    { title: "3️⃣ Resolve", desc: "Field teams fix issues and mark them as resolved." },
    { title: "4️⃣ Reward", desc: "Earn points, recognition and local benefits for civic participation." },
  ];

  const benefits = [
    { title: "Transparency", desc: "Full visibility into each complaint and its lifecycle.",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/transparency-icon-svg-png-download-1467990.png" },
    { title: "Rewards", desc: "Incentives for active citizens improving the city.",img:"https://staging.svgrepo.com/show/227991/badge-reward.svg" },
    { title: "Cleaner Cities", desc: "Faster cleanups and better waste management outcomes.",img:"https://static.vecteezy.com/system/resources/previews/046/699/085/non_2x/clean-city-environment-symbol-black-icon-isolated-illustration-vector.jpg" },
    { title: "Secure & Reliable", desc: "Encrypted user data and safe authentication.",img:"https://www.svgrepo.com/show/21221/security-on.svg" },
    { title: "Community-Driven", desc: "Solutions proposed and voted by citizens.",img:"https://static.thenounproject.com/png/1071933-200.png" },
    { title: "Govt. Collaboration", desc: "Direct integrations for timely municipal response.",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C3e6DwklRAeHZWFaNliqaBia53X6G6htzg&s" },
  ];

  const panels = [
    { icon: <IconCitizen />, title: "Citizen Panel", desc: "Report issues, track progress, and earn rewards.", link: "/login" },
    { icon: <IconWorker />, title: "Worker Panel", desc: "View assigned tasks, update progress and close jobs.", link: "/login" },
    { icon: <IconDepartment />, title: "Department Panel", desc: "Manage reports, assign teams and monitor KPIs.", link: "/login" },
    { icon: <IconSubAdmin />, title: "Sub-Admin Panel", desc: "Verify escalations and supervise departmental activity.", link: "/login" },
    { icon: <IconAdmin />, title: "Admin Panel", desc: "System-wide control, analytics, user & config management.", link: "/login" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-sky-50 to-gray-50 flex flex-col items-center p-6">
      {/* HERO */}
      <header className="w-full max-w-6xl text-center mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-tight tracking-tight">
            JanSetu — Civic Sense Portal
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-700 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            A one-stop platform to report civic issues, engage with your community, and track real-time solutions.
            Together, we build smarter, cleaner, and more accountable cities.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/report"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-[1.01] transform transition text-sm md:text-base"
              aria-label="Submit a new civic report"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3h6v4H9z"/><rect x="4" y="7" width="16" height="14" rx="2"/></svg>
              Report an Issue
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-3 bg-white border border-sky-300 text-sky-700 px-6 py-3 rounded-xl shadow-sm hover:bg-white/80 transition text-sm md:text-base"
              aria-label="Login or signup"
            >
              Login / Signup
            </Link>
            <Link
              to="/introduction"
              className="inline-flex items-center gap-3 bg-white/80 text-sky-900 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition text-sm md:text-base"
              aria-label="Introduction To Civic Sense"
            >
              Introduction
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* FEATURES GRID */}
      <main className="w-full max-w-6xl mb-16">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </motion.section>

        {/* How It Works */}
        <section className="mt-12 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
            ⚙️ How It Works
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-slate-600 max-w-6xl mx-auto mb-10">
            Simple workflow — report, track, resolve. We help ensure complaints don't fall through the cracks.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {howItWorks.map((s, idx) => (
              <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full border border-gray-100">
                <h3 className="font-bold text-xl text-sky-800">{s.title}</h3>
                <p className="text-slate-600 text-base mt-3">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose JanSetu */}
        <section className="mt-12 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
            🌟 Why Choose JanSetu?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" className="text-slate-700 max-w-3xl mx-auto mb-8">
            A citizens-first platform combining transparency, accountability and reward mechanics to improve city life.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col h-full items-center border border-gray-100">
                {b.img && (
                  <img src={b.img} alt={b.title} className="w-28 h-28 object-contain mb-4 rounded-md" />
                )}
                <h4 className="font-bold text-xl text-sky-800 text-center">{b.title}</h4>
                <p className="text-slate-600 text-base mt-3 text-center">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 w-full max-w-4xl mx-auto" id="faq">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-2xl md:text-3xl font-bold text-sky-900 mb-6 text-center">
            ❓ Frequently Asked Questions
          </motion.h2>

          <div className="space-y-3">
            {[
              {
                q: "How do I submit a report?",
                a: "Use the 'Submit a Report' form: add a short title, clear photos, description, and allow location. You can also attach a voice note."
              },
              {
                q: "Can I track my report status?",
                a: "Yes — after submission you get a report ID and status updates; visit 'Track Reports' to view progress."
              },
              {
                q: "How do I join the community?",
                a: "Open the Community page from the menu, create posts, and interact with neighbors by commenting and sharing media."
              },
              {
                q: "Who responds to reports?",
                a: "Relevant municipal departments (Sanitation, Public Works, Water Supply, Parks, Emergency Services) receive and action reports based on type and location."
              },
              {
                q: "Is my personal data safe?",
                a: "Yes — JanSetu follows standard data protection practices. Personal contacts are used only for follow-up and not shared publicly."
              },
              {
                q: "How can I get rewards for civic actions?",
                a: "Active contributors earn points for verified reports and community engagement; check your profile for points and rewards."
              }
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl p-4 shadow-sm" open={i === 0}>
                <summary className="cursor-pointer font-semibold text-sky-800 list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <svg
                    className="w-5 h-5 ml-4 text-sky-600 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-2 text-slate-600">{item.a}</div>
                <style>{`details[open] > summary svg{ transform: rotate(180deg); }`}</style>
              </details>
            ))}
          </div>
        </section>

        {/* Role-based Panels */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4 text-center">🚀 What We Offer</h2>
          <p className="text-slate-700 max-w-3xl mx-auto mb-6 text-center">
            Role-based tools and citizen-first features to report, monitor, and resolve civic issues quickly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {panels.map((p, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col h-full border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    {React.cloneElement(p.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-sky-800">{p.title}</h3>
                    <p className="text-slate-600 text-base mt-1">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to={p.link} className="text-sky-600 font-medium hover:underline">
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/report" className="inline-block bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-[1.01] transition">
              Start Reporting →
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">💬 What Citizens Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 italic mb-4 text-base">“JanSetu helped me report a pothole and it was fixed within days — very reliable!”</p>
              <h4 className="font-bold text-blue-700">— Ananya S.</h4>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 italic mb-4 text-base">“Tracking and transparency made follow-up so easy. Highly recommended.”</p>
              <h4 className="font-bold text-blue-700">— Rahul V.</h4>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg">
            <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-3">Ready to take action?</motion.h3>
            <motion.p variants={fadeUp} className="max-w-2xl mx-auto mb-6">Be the change your city needs — join JanSetu and start reporting issues that matter.</motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow font-semibold hover:bg-gray-100 transition">
                Create an Account →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-6xl text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} JanSetu — Built for citizens, by citizens.
      </footer>
    </div>
  );
}
