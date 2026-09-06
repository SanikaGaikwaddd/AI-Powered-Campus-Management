import React,{useState} from "react";
import {MessageSquareText,Plus} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {Card,CardHeader} from "../components/Card";

export default function Complaints(){
  const [text,setText]=useState("");
  const [items,setItems]=useState([
    ["CMP-1042","Wi-Fi connectivity issue","IT Services","In Progress","02 Sep 2026"],
    ["CMP-1039","Classroom projector not working","Maintenance","Resolved","28 Aug 2026"]
  ]);
  function add(){
    if(!text.trim()) return;
    setItems([[`CMP-${1043+items.length}`,text,"General","Pending","Today"],...items]);
    setText("");
  }
  return <>
    <PageHeader title="Complaints & Requests" subtitle="Raise and track campus service requests."/>
    <Card className="compose"><h3>Raise a new request</h3><p className="muted">Describe your issue.</p><div className="compose-row"><input value={text} onChange={e=>setText(e.target.value)} placeholder="e.g. Classroom fan is not working"/><button className="primary-btn" onClick={add}><Plus size={15}/> Submit</button></div></Card>
    <Card><CardHeader title="My Requests" Icon={MessageSquareText}/><div className="table-wrap"><table><thead><tr><th>Ticket</th><th>Issue</th><th>Department</th><th>Status</th><th>Date</th></tr></thead><tbody>{items.map(i=><tr key={i[0]}><td><b>{i[0]}</b></td><td>{i[1]}</td><td>{i[2]}</td><td><span className={`badge ${i[3]==="Resolved"?"success":i[3]==="Pending"?"warning":"info"}`}>{i[3]}</span></td><td>{i[4]}</td></tr>)}</tbody></table></div></Card>
  </>;
}
