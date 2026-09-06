import React,{useState} from "react";
import {MapPin,ChevronRight} from "lucide-react";
import PageHeader from "../components/PageHeader";

const days=["Monday","Tuesday","Wednesday","Thursday","Friday"];
const data={
Monday:[["09:00","Machine Learning","A-204"],["11:00","DBMS","B-102"],["02:00","Project Work","Innovation Lab"]],
Tuesday:[["10:00","Artificial Intelligence","B-102"],["12:00","Cloud Computing","A-301"],["03:00","Sports","Ground"]],
Wednesday:[["09:00","Data Visualization","Lab 2"],["11:00","Software Engineering","A-204"],["02:00","Placement Prep","Seminar Hall"]],
Thursday:[["10:00","Machine Learning","A-204"],["12:00","AI Lab","Lab 4"],["03:00","Project Work","Innovation Lab"]],
Friday:[["09:00","DBMS","B-102"],["11:00","Cloud Computing","A-301"],["02:00","AI Seminar","Seminar Hall"]]
};

export default function Timetable(){
  const [day,setDay]=useState("Monday");
  return <>
    <PageHeader title="Timetable" subtitle="Your weekly academic schedule in one view."/>
    <div className="day-tabs">{days.map(d=><button key={d} onClick={()=>setDay(d)} className={day===d?"active":""}>{d}<small>3 classes</small></button>)}</div>
    <div className="timetable-grid">{data[day].map(x=><div className="class-card" key={x[0]}><span className="class-time">{x[0]}</span><div className="class-color"/><div><b>{x[1]}</b><span><MapPin size={12}/>{x[2]}</span></div><button className="icon-btn"><ChevronRight size={15}/></button></div>)}</div>
  </>;
}
