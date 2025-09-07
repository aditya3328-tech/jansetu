import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Welcome to JanSetu. How may I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDWieOm9RcugoA8Hoa84XgtwDkUshhDyMM",
        {
          contents: [
            {
              parts: [
                {
text: `
You are JanSetu Assistant, a helpful guide for the Civic Sense Portal.
Your rules:
- Only talk about JanSetu features (Submit Report, Community, Services, About Us, Contact).
- Always answer in 2–3 short sentences only.
- Reply in the SAME LANGUAGE as the user’s question (Hindi if user asks in Hindi, English if user asks in English).
- Be clear, simple, and avoid extra details.
- If unsure, say "I can only help with JanSetu features."
                  `
                },
                { text: input }
              ]
            }
          ]
        }
      );

      const botReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error connecting to server." }
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className=" text-white rounded-full  flex-col items-center  p-4 mb-10  bg-blue-400 hover:bg-blue-600 transition"
        >
         <img className="h-12 w-12" src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png" alt="" />
        </button>
      )}
      {open && (
        <div className="w-[400px] h-[520px] bg-white shadow-xl rounded-2xl flex flex-col">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold">JanSetu Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white text-lg">✖</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-black self-start"
                    : "bg-blue-500 text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              className="flex-1 border rounded-l-lg p-2 text-sm"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
