import React from "react";
import {BriefcaseBusiness,Sparkles} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {Card,CardHeader} from "../components/Card";
import {placements} from "../data/mockData";

export default function Placements(){
  return <>
    <PageHeader title="Placements" subtitle="Discover opportunities, eligibility and application status."/>
    <div className="placement-hero"><div><span className="section-kicker">AI RESUME ANALYZER</span><h2>Improve your placement readiness</h2><p>Upload your resume later to get an AI score and suggestions.</p></div><button className="primary-btn"><Sparkles size={15}/> Analyze Resume</button></div>
    <Card><CardHeader title="Upcoming Placement Drives" Icon={BriefcaseBusiness}/><div className="table-wrap"><table><thead><tr><th>Company</th><th>Role</th><th>Date</th><th>Package</th><th>Status</th></tr></thead><tbody>{placements.map(p=><tr key={p[0]}><td><b>{p[0]}</b></td><td>{p[1]}</td><td>{p[2]}</td><td><b>{p[3]}</b></td><td><span className={`badge ${p[4]==="Applied"?"success":"info"}`}>{p[4]}</span></td></tr>)}</tbody></table></div></Card>
  </>;
}
