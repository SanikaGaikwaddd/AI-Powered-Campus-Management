import React from "react";
import {CalendarDays, ClipboardCheck, BookOpen, BriefcaseBusiness, MessageSquareText, Clock3, MapPin, Bell, Megaphone, Bot, ChevronRight} from "lucide-react";
import {Card,CardHeader} from "../components/Card";

function Stat({title,value,note,Icon}) {
  return <div className="stat-card"><div className="stat-icon"><Icon size={20}/></div><div><span>{title}</span><strong>{value}</strong><small>{note}</small></div></div>;
}

export default function Dashboard({user}) {
  return <>
    <div className="welcome">
      <div><span className="section-kicker">GOOD EVENING</span><h1>Hello, {user?.name?.split(" ")[0]} 👋</h1><p>Here’s your campus overview for today.</p></div>
      <div className="date-chip"><CalendarDays size={15}/> 6 September 2026</div>
    </div>

    <div className="stat-grid">
      <Stat title="Attendance" value="86%" note="+2.4% this month" Icon={ClipboardCheck}/>
      <Stat title="Upcoming Classes" value="04" note="Next: AI at 10:00 AM" Icon={BookOpen}/>
      <Stat title="Placement Drives" value="06" note="2 applications pending" Icon={BriefcaseBusiness}/>
      <Stat title="Open Requests" value="03" note="1 needs attention" Icon={MessageSquareText}/>
    </div>

    <div className="grid-2">
      <Card>
        <CardHeader title="Today's Schedule" Icon={Clock3} link="/timetable"/>
        {[
          ["09:00 AM","Machine Learning","Dr. Priya Shah","Room A-204"],
          ["10:00 AM","Artificial Intelligence","Prof. Rajesh Halke","Room B-102"],
          ["12:00 PM","Data Visualization","Prof. Neha Patil","Lab 2"],
          ["02:00 PM","Project Work","Group AIA6","Innovation Lab"]
        ].map(x=>
          <div className="schedule-item" key={x[0]}>
            <div className="time-dot"/>
            <span className="schedule-time">{x[0]}</span>
            <div className="schedule-main"><b>{x[1]}</b><span>{x[2]}</span></div>
            <span className="room"><MapPin size={12}/>{x[3]}</span>
          </div>
        )}
      </Card>

      <Card>
        <CardHeader title="Announcements" Icon={Megaphone} link="/events"/>
        {[
          ["Placement Drive","Infosys aptitude test registration closes Friday.","Today"],
          ["Timetable","Saturday's lecture moved to Lab 3.","Yesterday"],
          ["Campus Event","TechFest 2026 registrations are open.","2 days ago"]
        ].map(x=>
          <div className="announcement" key={x[0]}>
            <div className="ann-icon"><Bell size={15}/></div>
            <div><b>{x[0]}</b><p>{x[1]}</p><small>{x[2]}</small></div>
          </div>
        )}
      </Card>
    </div>

    <div className="ai-banner">
      <div className="ai-icon"><Bot/></div>
      <div><span className="section-kicker">AI INSIGHT</span><h3>2 subjects are below the 75% attendance target.</h3><p>CampusAI recommends attending the next 3 Database Management lectures.</p></div>
      <a className="secondary-btn" href="/ai-assistant">Ask AI <ChevronRight size={15}/></a>
    </div>
  </>;
}
