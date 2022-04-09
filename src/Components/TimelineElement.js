import "react-vertical-timeline-component/style.min.css";

import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";

export const TimelineElement = ({
  date,
  type,
  title,
  company,
  location,
  bullets,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#13505B", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #13505B" }}
      date={date}
      dateClassName={"date"}
      iconStyle={{ background: "black", color: "#fff" }}
      icon={type === "work" ? <WorkIcon /> : <SchoolIcon />}
    >
      <h3>{title}</h3>
      <h3>{company}</h3>
      <h4>{location}</h4>
      {bullets.map((bullet) => (
        <p>+ {bullet}</p>
      ))}
    </VerticalTimelineElement>
  );
};
