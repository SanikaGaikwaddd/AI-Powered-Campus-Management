import React from "react";
import PageHeader from "../components/PageHeader";

export default function Settings(){
  const settings=["Email notifications","Placement alerts","AI recommendations","Event reminders"];
  return <>
    <PageHeader title="Settings" subtitle="Manage your application preferences."/>
    <section className="card settings-list">{settings.map((s,i)=><div className="setting-row" key={s}><div><b>{s}</b><p>Receive useful campus updates.</p></div><label className="switch"><input type="checkbox" defaultChecked={i!==2}/><span/></label></div>)}</section>
  </>;
}
