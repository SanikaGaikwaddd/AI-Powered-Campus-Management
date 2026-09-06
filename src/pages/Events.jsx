import React from "react";
import {MapPin,Megaphone} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {events} from "../data/mockData";

export default function Events(){
  return <>
    <PageHeader title="Events & Notices" subtitle="Stay updated with campus activities and important announcements."/>
    <div className="event-grid">{events.map(e=><div className="event-card" key={e[0]}><div className="event-cover"><span>{e[1]}</span><Megaphone size={32}/></div><div className="event-body"><small>{e[2]}</small><h3>{e[0]}</h3><p><MapPin size={13}/>{e[3]}</p><button className="primary-btn">Register</button></div></div>)}</div>
  </>;
}
