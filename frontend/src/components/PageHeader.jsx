import React from "react";

export default function PageHeader({title,subtitle}) {
  return (
    <div className="page-heading">
      <div>
        <span className="section-kicker">CAMPUS MANAGEMENT</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
