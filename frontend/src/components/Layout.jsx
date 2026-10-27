import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard, ClipboardCheck, CalendarDays, BriefcaseBusiness,
  Megaphone, MessageSquareText, PackageSearch, FileText, Bot,
  UserRound, Settings as SettingsIcon, LogOut, Menu, X, Bell, Search,
  GraduationCap
} from "lucide-react";

const links = [
  ["/dashboard","Dashboard",LayoutDashboard],
  ["/attendance","Attendance",ClipboardCheck],
  ["/timetable","Timetable",CalendarDays],
  ["/placements","Placements",BriefcaseBusiness],
  ["/events","Events & Notices",Megaphone],
  ["/complaints","Complaints",MessageSquareText],
  ["/lost-found","Lost & Found",PackageSearch],
  ["/documents","Documents",FileText],
  ["/ai-assistant","AI Assistant",Bot]
];

export default function Layout({user,onLogout}) {
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const initials=user?.name?.split(" ").map(x=>x[0]).join("").slice(0,2) || "ST";
  const title=links.find(x=>x[0]===location.pathname)?.[1] ||
    (location.pathname==="/profile" ? "Profile" : "Settings");

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? "show" : ""}`}>
        <div className="brand">
          <div className="brand-logo"><GraduationCap size={22}/></div>
          <div><strong>CampusAI</strong><span>MIT ADT Campus</span></div>
        </div>

        <p className="nav-title">MAIN MENU</p>
        <nav>
          {links.map(([to,label,Icon])=>(
            <NavLink
              key={to}
              to={to}
              onClick={()=>setOpen(false)}
              className={({isActive})=>`nav-link ${isActive?"active":""}`}
            >
              <Icon size={18}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/profile" className="nav-link"><UserRound size={18}/><span>Profile</span></NavLink>
          <NavLink to="/settings" className="nav-link"><SettingsIcon size={18}/><span>Settings</span></NavLink>
          <button className="nav-link logout" onClick={onLogout}><LogOut size={18}/><span>Logout</span></button>
        </div>
      </aside>

      {open && <div className="overlay" onClick={()=>setOpen(false)} />}

      <main className="main">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={()=>setOpen(!open)}>
            {open ? <X/> : <Menu/>}
          </button>

          <div>
            <small>AI-POWERED CAMPUS MANAGEMENT</small>
            <h2>{title}</h2>
          </div>

          <div className="top-actions">
            <button className="icon-btn"><Search size={18}/></button>
            <button className="icon-btn notification"><Bell size={18}/><i/></button>
            <div className="mini-profile">
              <div className="avatar">{initials}</div>
              <div><b>{user?.name}</b><span>{user?.role}</span></div>
            </div>
          </div>
        </header>

        <div className="content"><Outlet/></div>
      </main>
    </div>
  );
}
