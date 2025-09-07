import React, { useState, useEffect, useRef } from "react";

export default function ReportPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [landmark, setLandmark] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [recording, setRecording] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const mediaRecorderRef = useRef(null);

  // Auto-detect location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setLocation(data.display_name || `${latitude}, ${longitude}`);
        } catch (err) {
          setLocation(`${latitude}, ${longitude}`);
        }
      });
    }
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setVideo(file);
  };

  // Voice recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioURL(URL.createObjectURL(blob));
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone access denied or not supported.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      title,
      description,
      location,
      landmark,
      images,
      video,
      audioURL,
    };
    console.log("Report Submitted:", reportData);

    // Reset form
    setTitle("");
    setDescription("");
    setLocation("");
    setLandmark("");
    setImages([]);
    setVideo(null);
    setAudioURL(null);

    // Show success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4 animate-bounce">
            ✅ Report Submitted Successfully!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for reporting. You can track your report in the{" "}
            <strong>Track Reports</strong> section.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow">
        📝 Submit a Report
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl space-y-8 border border-gray-100"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Title</label>
          <div className="relative">
            <i className="ri-edit-2-line absolute left-3 top-3 text-gray-400 text-lg"></i>
            <input
              type="text"
              className="w-full border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
            placeholder="Describe the issue clearly..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="block font-semibold mb-2 text-gray-700">
            Landmark
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Nearby landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Upload Images
          </label>
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 transition cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              id="image-upload"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <i className="ri-image-add-line text-6xl text-blue-500 mb-3"></i>
              <span className="font-medium">Drag & Drop images here</span>
              <span className="text-sm">or click to browse</span>
            </label>
          </div>
          {images.length > 0 && (
            <div className="flex gap-3 flex-wrap mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-28 h-28 object-cover rounded-xl shadow-md border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Video Upload */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Upload Video
          </label>
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 transition cursor-pointer">
            <input
              type="file"
              accept="video/*"
              id="video-upload"
              onChange={handleVideoUpload}
              className="hidden"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <i className="ri-video-add-line text-6xl text-blue-500 mb-3"></i>
              <span className="font-medium">Drag & Drop video here</span>
              <span className="text-sm">or click to browse</span>
            </label>
          </div>
          {video && (
            <video
              src={URL.createObjectURL(video)}
              controls
              className="mt-4 w-full rounded-xl shadow-md border"
            />
          )}
        </div>

        {/* Voice Recording */}
        <div>
          <label className="block font-semibold mb-4 text-gray-700">
            Voice Note
          </label>
          {!recording ? (
            <button
              type="button"
              onClick={startRecording}
              className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-red-700 hover:scale-105 transition"
            >
              <i className="ri-mic-fill text-lg"></i> Start Recording
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 hover:scale-105 transition"
            >
              ⏹ Stop Recording
            </button>
          )}
          {audioURL && (
            <audio controls src={audioURL} className="mt-4 w-full"></audio>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition"
        >
          🚀 Submit Report
        </button>
      </form>
    </div>
  );
}
