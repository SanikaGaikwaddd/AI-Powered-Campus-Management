import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import Placements from "./pages/Placements";
import Events from "./pages/Events";
import Complaints from "./pages/Complaints";
import LostFound from "./pages/LostFound";
import Documents from "./pages/Documents";
import AIAssistant from "./pages/AIAssistant";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("campusUser") || "null")
  );

  const login = (account) => {
    localStorage.setItem("campusUser", JSON.stringify(account));
    setUser(account);
  };

  const logout = () => {
    localStorage.removeItem("campusUser");
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />}
      />

      <Route
        element={
          user ? <Layout user={user} onLogout={logout} /> : <Navigate to="/login" replace />
        }
      >
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
    </Routes>
  );
}
