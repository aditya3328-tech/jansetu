import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ReportCard({ report }) {
  const [expanded, setExpanded] = useState(false);
  if (!report) return null;

  const {
    title,
    problemtype,
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
    status = "Pending", // default status if not provided
  } = report;

  // Status badge colors
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    Resolved: "bg-green-100 text-green-800 border border-green-300",
    Rejected: "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <motion.div
      layout
      className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    >
      {/* Top Row - Title + Status + Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {problemtype || "Untitled Report"}
        </h2>

        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[status] || statusColors.Pending}`}
          >
            {status}
          </span>

          {/* Details Button */}
          <button
            className="text-blue-600 text-sm font-medium hover:underline"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Hide Details ▲" : "View Details ▼"}
          </button>
        </div>
      </div>

      {/* Expandable Section */}
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
              <p className="text-sm text-gray-700">{description}</p>
            )}

            {location && (
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {location}
              </p>
            )}

            {landmark && (
              <p className="text-sm text-gray-600">
                <strong>Landmark:</strong> {landmark}
              </p>
            )}

            {images &&
              (Array.isArray(images) ? (
                <div className="grid grid-cols-2 gap-2">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`report-${i}`}
                      className="w-full h-32 object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={images}
                  alt="report"
                  className="w-full h-48 object-cover rounded-lg shadow"
                />
              ))}

            {video && (
              <video src={video} controls className="w-full rounded-lg shadow" />
            )}

            {audioURL && (
              <audio src={audioURL} controls className="w-full rounded" />
            )}

            {/* Informer Info */}
            <div className="text-sm text-gray-700 space-y-1">
              <div>
                <strong>Informer:</strong> {informerName || "Anonymous"}
              </div>
              {problemtype && (
                <div>
                  <strong>problemtype:</strong> {problemtype}
                </div>
              )}
              {informerEmail && (
                <div>
                  <strong>Email:</strong> {informerEmail}
                </div>
              )}
              {informerPhone && (
                <div>
                  <strong>Phone:</strong> {informerPhone}
                </div>
              )}
              {latitude && longitude && (
                <div className="text-xl text-gray-500">
                  Lat:{" "}
                  {typeof latitude === "number"
                    ? latitude.toFixed(6)
                    : latitude}
                  , Lon:{" "}
                  {typeof longitude === "number"
                    ? longitude.toFixed(6)
                    : longitude}
                </div>
              )}
              {createdAt && (
                <div className="text-xs text-gray-400">
                  Submitted: {new Date(createdAt).toLocaleString()}
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

  if (hasProps) {
    const r = { ...props };
    return <ReportCard report={r} />;
  }

  return (
    <div className="p-6 h-screen max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📝 Track My Reports
      </h1>

      {reports.length === 0 ? (
        <div className="text-center text-gray-500 text-sm">
          No reports found. Submit a report to see it here.
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((rep) => (
            <ReportCard key={rep.id || rep.createdAt} report={rep} />
          ))}
        </div>
      )}
    </div>
  );
}
