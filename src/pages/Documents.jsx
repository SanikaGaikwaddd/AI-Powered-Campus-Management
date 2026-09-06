import React from "react";
import {FileText,ChevronRight} from "lucide-react";
import PageHeader from "../components/PageHeader";

const docs=["Academic Calendar 2026-27","Examination Timetable","Placement Guidelines","Student Handbook"];

export default function Documents(){
  return <>
    <PageHeader title="Documents" subtitle="Centralized access to important campus documents."/>
    <div className="document-grid">{docs.map(d=><div className="document-card" key={d}><div className="doc-icon"><FileText/></div><div><h3>{d}</h3><p>PDF • Updated recently</p></div><button className="icon-btn"><ChevronRight/></button></div>)}</div>
  </>;
}
