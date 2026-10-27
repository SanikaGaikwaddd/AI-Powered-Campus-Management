import React,{useState} from "react";
import {Bot,Send,ChevronRight} from "lucide-react";
import PageHeader from "../components/PageHeader";

function getAnswer(q){
  const s=q.toLowerCase();
  if(s.includes("attendance")) return "Your overall attendance is 86%. Database Management is at 68%.";
  if(s.includes("placement")) return "There are 6 upcoming placement drives. Infosys and Capgemini are marked Applied.";
  if(s.includes("class") || s.includes("timetable")) return "Your next AI class is at 10:00 AM in Room B-102.";
  if(s.includes("complaint")) return "Go to Complaints & Requests, enter your issue and click Submit.";
  return "I can help with attendance, timetable, placements, events, documents and complaints.";
}

export default function AIAssistant(){
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([{from:"ai",text:"Hi! I’m CampusAI. Ask me about your campus."}]);
  function send(){
    if(!input.trim()) return;
    const q=input.trim();
    setMessages(m=>[...m,{from:"user",text:q},{from:"ai",text:getAnswer(q)}]);
    setInput("");
  }
  return <>
    <PageHeader title="AI Assistant" subtitle="Ask questions and get campus-aware answers."/>
    <div className="chat-layout">
      <section className="chat-card">
        <div className="chat-head"><div className="ai-avatar"><Bot/></div><div><b>CampusAI Assistant</b><span>● Online</span></div></div>
        <div className="messages">{messages.map((m,i)=><div className={`message ${m.from}`} key={i}><div>{m.text}</div></div>)}</div>
        <div className="chat-input"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask something..."/><button onClick={send}><Send size={17}/></button></div>
      </section>
      <aside className="card suggestions"><span className="section-kicker">TRY ASKING</span><h3>Popular questions</h3>{["What is my attendance percentage?","Which placement drives are open?","When is my next AI class?","How do I raise a complaint?"].map(q=><button key={q} onClick={()=>setInput(q)}>{q}<ChevronRight size={14}/></button>)}</aside>
    </div>
  </>;
}
