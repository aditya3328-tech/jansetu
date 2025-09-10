import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem("janSetu_chat_messages");
      return raw ? JSON.parse(raw) : [{ sender: "bot", text: "👋 Hello! Welcome to JanSetu — try: 'How do I submit a report?'" }];
    } catch (e) {
      return [{ sender: "bot", text: "👋 Hello! Welcome to JanSetu — try: 'How do I submit a report?'" }];
    }
  });
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const quickReplies = [
    "How do I submit a report?",
    "Track my report",
    "Join the community",
    "Contact support"
  ];

  // Local knowledge base for JanSetu-specific answers and lightweight intent handling
  const localResponses = {
    submit: {
      text: `To submit a report: 1) Add a short Title (e.g., 'Pothole near Market Road'). 2) Describe severity and hazards. 3) Use the auto-detected location or paste GPS coordinates. 4) Attach clear photos (multiple angles) and an optional voice note. You can open the report form here: /report`,
    },
    track: {
      text: `To track a report, go to Track Reports in the app. If you have a report ID, paste it here and I can guide you on the status format.`,
    },
    community: {
      text: `The Community page hosts posts from citizens. You can create posts with images/videos and engage with others. Open Community: /community`,
    },
    contact: {
      text: `Contact support via the Contact page or call the civic helpdesk listed there. Open Contact: /contact`,
    },
    departments: {
      text: `Departments: Sanitation, Public Works, Water Supply, Parks & Environment, Emergency Services. Ask me about a specific department for more details.`,
    }
  };

  const sendMessage = async (text) => {
    if (!text || !text.trim()) return;
    const userMsg = { sender: "user", text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);
    // small delay so UI shows typing indicator
    try {
      // check local knowledge for quick, reliable answers before calling external API
      const key = text.toLowerCase();
      const found = Object.keys(localResponses).find(k => key.includes(k));
      if (found) {
        setMessages((m) => [...m, { sender: 'bot', text: localResponses[found].text }]);
        setLoading(false);
        return;
      }

      // safe default prompt for the model
      const promptSystem = `You are JanSetu Assistant. Answer briefly about JanSetu features only. If the user asks about submitting, tracking, community, contact or departments, prefer clear step-by-step instructions and link to the corresponding app page.`;

      // also send a condensed local knowledge summary to the model to ground answers
      const knowledgeSummary = `JanSetu features: Submit a Report (title, description, location, photos/video, voice note), Track Reports (report id/status), Community (posts with media), Contact page. Departments include Sanitation, Public Works, Water Supply, Parks & Environment, Emergency Services.`;

      const response = await axios.post(
        // NOTE: keep using the existing endpoint if configured; consider moving key to env
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDWieOm9RcugoA8Hoa84XgtwDkUshhDyMM",
        {
          contents: [
            { parts: [{ text: promptSystem }, { text: knowledgeSummary }, { text }] }
          ]
        },
        { timeout: 8000 }
      );

      const botReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I can only help with JanSetu features.";
      setMessages((m) => [...m, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error(err?.response?.data || err?.message || err);
      // graceful fallback answer
      setMessages((m) => [...m, { sender: "bot", text: "Sorry — I'm having trouble right now. You can try: 'How do I submit a report?'" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => sendMessage(input);

  useEffect(() => {
    // persist messages
    try {
      localStorage.setItem("janSetu_chat_messages", JSON.stringify(messages));
    } catch (e) {
      // ignore
    }
    // auto-scroll
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight + 200;
    }
  }, [messages]);

  // Listen for global 'open-chat' events so other pages can open the widget
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-chat', handler);
    return () => window.removeEventListener('open-chat', handler);
  }, []);

  return (
  <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Floating button */}
      {!open && (
        <>
          <div className="hidden sm:flex flex-col items-end mr-1">
            <span className="text-2xs font-bold text-gray-700">Chatbot </span>
            <span className="text-3xs text-gray-500">JanSetu Assistant</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transform transition-all hover:scale-105"
            title="Open chat"
          >
            <img className="h-8 w-8" src="/logo.png" alt="chat" />
          </button>
        </>
      )}

      {open && (
        <div className="fixed z-50 inset-x-0 bottom-0 h-[70vh] sm:bottom-6 sm:right-6 sm:inset-auto sm:w-[420px] sm:h-[520px] bg-white shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="w-8 h-8 rounded-full bg-white/20 p-1" />
              <div>
                <div className="font-semibold text-lg">JanSetu Assistant</div>
                <div className="text-xs text-white/80">Ask about reporting, tracking & community</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { setMessages([{ sender: "bot", text: "👋 Hello! Welcome to JanSetu — try: 'How do I submit a report?'" }]); }} className="text-white/90 text-sm">Reset</button>
              <button onClick={() => setOpen(false)} className="text-white text-lg">✖</button>
            </div>
          </div>

          {/* Suggested quick replies */}
          <div className="p-3 border-b">
            <div className="flex gap-2 overflow-x-auto">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50 pb-24">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`${msg.sender === 'bot' ? 'bg-white' : 'bg-blue-500 text-white'} rounded-lg p-3 max-w-[78%] shadow-sm`}
                >
                  <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse delay-75" />
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t bg-white sticky bottom-0">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-blue-600 text-white px-3 py-2 rounded-full disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
