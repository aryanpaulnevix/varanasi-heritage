// src/components/ChatbotWidget/ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import ChatbotSVG from "../../assets/icons/Chatbot.svg"; // make sure the path is correct

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Ask me about Varanasi's heritage 🌸" },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: `You asked: "${input}". I'm still learning! 🤖`,
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button with SVG */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-yellow-500 shadow-lg z-50 flex items-center justify-center hover:scale-105 transition-transform overflow-hidden"
        aria-label="Chatbot"
      >
        <img
          src={ChatbotSVG}
          alt="Chatbot"
          className="w-50 h-50"
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-500 text-white p-3 font-bold flex justify-between items-center">
            ChatBot
            <button onClick={toggleChat} className="text-white font-bold">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-gray-800 self-start"
                    : "bg-blue-500 text-white self-end"
                } p-2 rounded-lg max-w-[75%]`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2 border-t">
            <input
              className="flex-1 border rounded px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-yellow-500 text-white px-3 rounded hover:bg-yellow-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
