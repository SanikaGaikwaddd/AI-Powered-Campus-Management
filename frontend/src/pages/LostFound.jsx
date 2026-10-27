import React from "react";
import {PackageSearch,Plus} from "lucide-react";
import PageHeader from "../components/PageHeader";

const items=[["Black Wallet","Found near Library","05 Sep"],["Blue Water Bottle","Found in Lab 2","04 Sep"],["Student ID Card","Found near A Block","03 Sep"],["Calculator","Found in Room B-102","01 Sep"]];

export default function LostFound(){
  return <>
    <PageHeader title="Lost & Found" subtitle="Report missing items and find items reported by others."/>
    <div className="two-actions"><button className="primary-btn"><Plus size={15}/> Report Lost Item</button><button className="secondary-btn"><PackageSearch size={15}/> Report Found Item</button></div>
    <div className="lost-grid">{items.map(i=><div className="lost-card" key={i[0]}><div className="lost-icon"><PackageSearch/></div><div><span className="badge info">Found</span><h3>{i[0]}</h3><p>{i[1]}</p><small>{i[2]}</small></div><button className="secondary-btn">Claim</button></div>)}</div>
  </>;
}
