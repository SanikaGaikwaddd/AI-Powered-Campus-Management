import React from "react";
import {ClipboardCheck, AlertCircle} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {Card,CardHeader} from "../components/Card";
import {attendance} from "../data/mockData";

export default function Attendance() {
  return <>
    <PageHeader title="Attendance" subtitle="Track subject-wise attendance and AI recommendations."/>
    <div className="attendance-overview">
      <div className="attendance-ring"><b>86%</b><span>Overall</span></div>
      <div><h3>Good attendance</h3><p className="muted">117 of 136 lectures attended.</p><div className="progress"><i style={{width:"86%"}}/></div><small>19 lectures missed</small></div>
      <div className="alert-box"><AlertCircle size={18}/><div><b>Needs attention</b><span>Database Management is below 75%.</span></div></div>
    </div>

    <Card>
      <CardHeader title="Subject Attendance" Icon={ClipboardCheck}/>
      <div className="table-wrap"><table><thead><tr><th>Subject</th><th>Present</th><th>Total</th><th>Percentage</th><th>Status</th></tr></thead>
      <tbody>{attendance.map(s=><tr key={s[0]}><td><b>{s[0]}</b></td><td>{s[1]}</td><td>{s[2]}</td><td><b>{s[3]}</b></td><td><span className={`badge ${s[4]==="Low"?"danger":s[4]==="Good"?"warning":"success"}`}>{s[4]}</span></td></tr>)}</tbody></table></div>
    </Card>
  </>;
}
