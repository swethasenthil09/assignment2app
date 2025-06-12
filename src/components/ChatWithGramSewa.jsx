import React, { useState } from "react";
import { askChatGPT } from "./openaiService";

const ChatWithGramSewa = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botResponse = await askChatGPT(input);
    const botMessage = { sender: "bot", text: botResponse };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">🤖 Ask Smart Gram Sewa</h2>
      <div className="h-64 overflow-y-auto border border-gray-300 rounded p-3 mb-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block px-3 py-2 rounded-xl ${msg.sender === "user" ? "bg-green-200 text-gray-800" : "bg-gray-200 text-gray-700"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWithGramSewa;
