import React from "react";
import { ChevronRight } from "lucide-react";

export function Card({children,className=""}) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function CardHeader({title,Icon,link}) {
  return (
    <div className="card-head">
      <div>{Icon && <Icon size={18}/>}<h3>{title}</h3></div>
      {link && <a href={link}>View all <ChevronRight size={14}/></a>}
    </div>
  );
}
