import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ReportCard({ report, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  if (!report) return null;

  const {
    problem,
    description,
    location,
    landmark,
    images,
    video,
    audioURL,
    informerName,
    informerEmail,
    informerPhone,
    latitude,
    longitude,
    createdAt,
    status = "Pending",
    id,
  } = report;

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    Resolved: "bg-green-100 text-green-800 border border-green-300",
    Rejected: "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <motion.div
      layout
      className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {problem || "Untitled Report"}
          </h2>
          <span
            className={`inline-block mt-1 text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${statusColors[status] || statusColors.Pending}`}
          >
            {status}
          </span>
        </div>

        <div className="flex flex-col gap-2 items-end">
          {/* Toggle Details */}
          <button
            className="text-blue-600 text-sm font-medium hover:underline"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Hide ▲" : "Details ▼"}
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 text-xs font-semibold hover:text-red-700"
          >
            🗑 Delete
          </button>
        </div>
      </div>

      {/* Expandable Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-3"
          >
            {description && (
              <p className="text-gray-700 leading-relaxed">{description}</p>
            )}

            {location && (
              <p className="text-gray-600">
                <strong>📍 Location:</strong> {location}
              </p>
            )}

            {landmark && (
              <p className="text-gray-600">
                <strong>🏞 Landmark:</strong> {landmark}
              </p>
            )}

            {/* Images */}
            {images &&
              (Array.isArray(images) ? (
                <div className="grid grid-cols-2 gap-2">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`report-${i}`}
                      className="w-full h-32 object-cover rounded-xl shadow-md"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={images}
                  alt="report"
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
              ))}

            {video && (
              <video
                src={video}
                controls
                className="w-full rounded-xl shadow-md"
              />
            )}

            {audioURL && (
              <audio src={audioURL} controls className="w-full rounded" />
            )}

            {/* Informer Info */}
            <div className="text-sm text-gray-700 space-y-1 pt-2 border-t border-gray-100">
              <div>
                <strong>👤 Informer:</strong> {informerName || "Anonymous"}
              </div>
              {informerEmail && (
                <div>
                  <strong>📧 Email:</strong> {informerEmail}
                </div>
              )}
              {informerPhone && (
                <div>
                  <strong>📞 Phone:</strong> {informerPhone}
                </div>
              )}
              {latitude && longitude && (
                <div className="text-gray-500">
                  <strong>🌍 Coordinates:</strong>{" "}
                  {typeof latitude === "number"
                    ? latitude.toFixed(6)
                    : latitude}
                  ,{" "}
                  {typeof longitude === "number"
                    ? longitude.toFixed(6)
                    : longitude}
                </div>
              )}
              {createdAt && (
                <div className="text-xs text-gray-400">
                  ⏱ Submitted: {new Date(createdAt).toLocaleString()}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Trackmyreport(props) {
  const hasProps =
    props &&
    Object.keys(props).length > 0 &&
    (props.title || props.description || props.latitude);

  const [reports, setReports] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("janSetu_reports") || "[]");
      setReports(saved);
    } catch (e) {
      setReports([]);
    }
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      const updatedReports = reports.filter((r) => r.id !== id);
      setReports(updatedReports);
      localStorage.setItem("janSetu_reports", JSON.stringify(updatedReports));
    }
  };

  if (hasProps) {
    const r = { ...props };
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <ReportCard report={r} onDelete={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📝 Track My Reports
      </h1>

      {reports.length === 0 ? (
        <div className="text-center text-gray-500 text-sm bg-white p-6 rounded-xl shadow-md">
          No reports found. Submit a report to see it here.
        </div>
      ) : (
        <div className="space-y-5">
          {reports.map((rep) => (
            <ReportCard key={rep.id || rep.createdAt} report={rep} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
