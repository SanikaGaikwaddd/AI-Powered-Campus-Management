import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, ChevronRight, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";

const API = import.meta.env.VITE_API_URL;

const SUGGESTIONS = {
  Student: [
    "What is the minimum attendance required?",
    "What CGPA is needed for placements?",
    "How do I raise a complaint?",
    "How can I apply for re-evaluation?"
  ],
  Faculty: [
    "How many casual leaves do faculty get?",
    "When must internal marks be uploaded?",
    "How do I apply for leave?",
    "What are the library timings?"
  ],
  Admin: [
    "What is the minimum attendance required?",
    "How many casual leaves do faculty get?",
    "What is the placement policy?",
    "How long do complaints take to resolve?"
  ]
};

// "student_attendance_policy.pdf" -> "attendance policy"
const prettySource = (s) =>
  s.replace(/\.pdf$/i, "").replace(/^(student|faculty|all)_/, "").replace(/_/g, " ");

export default function AIAssistant() {
  const account = JSON.parse(localStorage.getItem("campusUser") || "null");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m CampusAI. Ask me about campus rules, attendance, exams, placements and more." }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text) {
    const q = (text ?? input).trim();
    if (!q || loading) return;

    setMessages(m => [...m, { from: "user", text: q }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/ai/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${account?.token}`
        },
        body: JSON.stringify({ question: q })
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(
          res.status === 401
            ? "Your session expired. Please log out and sign in again."
            : json.message || "Something went wrong."
        );
      }

      setMessages(m => [
        ...m,
        { from: "ai", text: json.data.answer.trim(), sources: json.data.sources }
      ]);
    } catch (err) {
      const text = err.message === "Failed to fetch"
        ? "I can’t reach the server right now. Please check that the backend is running."
        : err.message;
      setMessages(m => [...m, { from: "ai", text }]);
    } finally {
      setLoading(false);
    }
  }

  const suggestions = SUGGESTIONS[account?.role] || SUGGESTIONS.Student;

  return (
    <>
      <PageHeader title="AI Assistant" subtitle="Ask questions and get answers from official campus documents." />
      <div className="chat-layout">
        <section className="chat-card">
          <div className="chat-head">
            <div className="ai-avatar"><Bot /></div>
            <div><b>CampusAI Assistant</b><span>● Online</span></div>
          </div>

          <div className="messages">
            {messages.map((m, i) => (
              <div className={`message ${m.from}`} key={i}>
                <div>
                  {m.text}
                  {m.sources?.length > 0 && (
                    <span className="src-row">
                      {m.sources.map((s, j) => (
                        <span className="src-chip" key={j}>
                          <FileText size={10} /> {prettySource(s.source)} · p.{s.page}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {loading && <div className="message ai"><div>Thinking…</div></div>}
            <span ref={endRef} />
          </div>

          <div className="chat-input">
            <input
              value={input}
              disabled={loading}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask something..."
            />
            <button onClick={() => send()} disabled={loading}><Send size={17} /></button>
          </div>
        </section>

        <aside className="card suggestions">
          <span className="section-kicker">TRY ASKING</span>
          <h3>Popular questions</h3>
          {suggestions.map(q => (
            <button key={q} onClick={() => send(q)}>{q}<ChevronRight size={14} /></button>
          ))}
        </aside>
      </div>
    </>
  );
}