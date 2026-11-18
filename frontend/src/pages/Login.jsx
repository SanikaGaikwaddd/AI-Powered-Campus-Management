import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Sparkles, ChevronRight } from "lucide-react";

const API = import.meta.env.VITE_API_URL;

export default function Login({ onLogin }) {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("student@mitadt.ac.in");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const post = (path, body) =>
    fetch(`${API}/api/auth/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let res = await post("login", { email, password });
      let json = await res.json();

      // Demo only: users live in memory, so register on first login
      if (!res.ok) {
        const name =
          role === "Student"
            ? "Sanika Gaikwad"
            : role === "Faculty"
            ? "Prof. Rajesh Halke"
            : "Campus Admin";

        res = await post("register", { name, email, password, role });
        json = await res.json();

        if (!res.ok) throw new Error(json.message || "Login failed");
      }

      onLogin({ ...json.data.user, token: json.data.token });
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot reach the server. Is the backend running?"
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-art">
        <div className="login-brand">
          <div className="brand-logo"><GraduationCap /></div>
          <b>CampusAI</b>
        </div>
        <div className="art-content">
          <span className="pill"><Sparkles size={14} /> Intelligent Campus Platform</span>
          <h1>One platform for a smarter campus.</h1>
          <p>
            Attendance, timetable, placements, events, complaints and AI
            assistance — all connected in one secure web application.
          </p>
        </div>
      </div>

      <div className="login-card-wrap">
        <form className="login-card" onSubmit={submit}>
          <div className="mobile-brand">
            <div className="brand-logo"><GraduationCap /></div>
            <b>CampusAI</b>
          </div>

          <span className="section-kicker">WELCOME BACK</span>
          <h2>Sign in to your account</h2>
          <p className="muted">Access your personalized campus dashboard.</p>

          <label>Login as</label>
          <div className="role-switch">
            {["Student", "Faculty", "Admin"].map((r) => (
              <button
                type="button"
                key={r}
                onClick={() => setRole(r)}
                className={role === r ? "selected" : ""}
              >
                {r}
              </button>
            ))}
          </div>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="primary-btn wide" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"} <ChevronRight size={16} />
          </button>

          {error && (
            <p className="login-note" style={{ color: "#bf4747" }}>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}