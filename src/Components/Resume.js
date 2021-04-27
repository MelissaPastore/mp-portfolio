import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

const Resume = () => {
  return (
    <div>
      <div className="resume-head">Education</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--education"
          date="October 2020 - February 2021"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Fullstack Academy</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Web Development Fellowship, a partnership with the NYC Tech Talent
            Pipeline
          </h4>
          <p>
            An immersive software engineering bootcamp program that teaches full
            stack JavaScript and computer science fundamentals including data
            structures and algorithms.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--education"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Syracuse University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            BA in Broadcast Journalism and Policy Studies
          </h4>
          <p>Graduated Magna Cum Laude</p>
        </VerticalTimelineElement>

        <div className="resume-head">Work Experience</div>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #13505B" }}
          date="February 2021 - May 2021"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Teaching Fellow
          </h3>
          <h3 className="vertical-timeline-element-title">Fullstack Academy</h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            + Provided ongoing mentoring and support to students through small
            group meetings and office hours + Assisted students with debugging
            support during workshops and projects + Graded, reviewed and
            provided constructive feedback on students’ code
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #13505B" }}
          className="vertical-timeline-element--work"
          date="October 2018-June 2020"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Director of Public Relations
          </h3>
          <h3 className="vertical-timeline-element-title">
            Iconix Brand Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            + Led public relations and communications efforts across a portfolio
            of more than 20 brands including Danskin, Umbro and London Fog +
            Worked directly with the CEO on corporate communications, media
            training and messaging + Developed and executed integrated
            communications strategies that drove sales for key launches
            including the Jenna Dewan x Danskin collection, which garnered more
            than 500 million media impressions and led to record-breaking
            traffic on Danskin.com
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #13505B" }}
          className="vertical-timeline-element--work"
          date="February 2016-October 2018"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Manager, Public Relations
          </h3>
          <h3 className="vertical-timeline-element-title">Lacoste USA</h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            + Reported directly to the CEO during the first year to improve and
            execute a U.S. public relations strategy that increased impressions
            and PR value by more than 200% + Headed public relations and
            communications efforts for major collaborations and sponsorships
            including LACOSTE x Supreme, Save Our Species and The Miami Open
            tennis tournament + Secured business and brand feature stories in
            outlets such as The New York Times, WWD, Adweek and Fortune
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#13505B", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #13505B" }}
          className="vertical-timeline-element--work"
          date="June 2006-January 2016"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Public Relations Assistant to Public Relations Manager
          </h3>
          <h3 className="vertical-timeline-element-title">
            Swarovski North America Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            + Produced and executed U.S. media outreach strategy that generated
            more than 100 million media impressions in top-tier publications
            annually + Introduced an integrated influencer strategy to help
            accelerate awareness and consideration among younger consumers
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#0F8FA9", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Resume;
