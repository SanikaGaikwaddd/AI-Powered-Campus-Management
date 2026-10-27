import React from "react";
import PageHeader from "../components/PageHeader";

export default function Profile({user}){
  const initials=user?.name?.split(" ").map(x=>x[0]).join("").slice(0,2);
  return <>
    <PageHeader title="Profile" subtitle="View your account information."/>
    <section className="card profile-card"><div className="profile-avatar">{initials}</div><div><span className="section-kicker">{user?.role}</span><h2>{user?.name}</h2><p>{user?.email}</p><div className="profile-tags"><span>TY CSE (AI)</span><span>Division AIA6</span><span>Campus ID: AIA130</span></div></div></section>
  </>;
}
