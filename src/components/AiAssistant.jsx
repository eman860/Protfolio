import React, { useState, useRef, useEffect } from 'react';
import { aiKnowledgeBase } from '../data/portfolioData';

const defaultPrompts = [
  "Tell me about Imman's projects.",
  "What technologies does Imman use?",
  "Does Imman know React?",
  "Show me Imman's AI projects.",
  "What internships has Imman completed?",
  "How can I contact Imman?",
  "Show me projects using Java.",
];

export default function AiAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Imman's AI portfolio assistant. What would you like to know about his software projects, technical skills, or work history?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const processQuery = (queryText) => {
    if (!queryText.trim()) return;

    // Append user message
    const userMsg = { sender: 'user', text: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = queryText.toLowerCase();

      // Find best matching answer from knowledge base
      let matched = aiKnowledgeBase.find((kb) =>
        kb.keywords.some((kw) => lower.includes(kw))
      );

      let reply = matched
        ? matched.answer
        : "Imman is a Computer Science & Engineering student at Annai Mira College of Engineering and Technology (CGPA 8.20). He specializes in Java, Full-Stack web development, and Machine Learning research. Feel free to ask about his Hospital Booking System, AI research paper at ICCIS-3.0, or internships!";

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  const handleSend = (e) => {
    e.preventDefault();
    processQuery(input);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-modal-wrapper" onClick={onClose}>
      <div
        className="ai-modal-panel glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="ai-modal-header">
          <div className="ai-brand-col">
            <div className="ai-sparkle-circle">
              <span>✦</span>
            </div>
            <div>
              <h3 className="ai-title">Ask Imman AI</h3>
              <p className="ai-sub">Verified Portfolio Assistant</p>
            </div>
          </div>

          <button
            type="button"
            className="ai-close-btn"
            onClick={onClose}
            aria-label="Close AI Assistant"
          >
            ✕
          </button>
        </div>

        {/* Suggested Prompts Strip */}
        <div className="ai-prompts-tray">
          <span className="tray-label">SUGGESTED:</span>
          <div className="tray-scroll">
            {defaultPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="ai-prompt-chip"
                onClick={() => processQuery(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Message Log */}
        <div className="ai-messages-container">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`ai-message-row ${msg.sender === 'user' ? 'msg-user' : 'msg-ai'}`}
            >
              {msg.sender === 'ai' && (
                <div className="ai-avatar-tiny">
                  <span>✦</span>
                </div>
              )}
              <div className="ai-bubble">
                <p className="ai-bubble-text" style={{ whiteSpace: 'pre-line' }}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="ai-message-row msg-ai">
              <div className="ai-avatar-tiny">
                <span>✦</span>
              </div>
              <div className="ai-bubble ai-typing-bubble">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form className="ai-input-bar" onSubmit={handleSend}>
          <input
            type="text"
            className="ai-text-field"
            placeholder="Ask about projects, Java, AI, internships..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="ai-send-btn"
            disabled={!input.trim()}
            aria-label="Send query"
          >
            ↑
          </button>
        </form>
      </div>
    </div>
  );
}
