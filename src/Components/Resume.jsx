import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";

const Resume = () => {
  return (
    <div id="resume">
      <div id="pdf">
        <a
          className="pdf-link"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-d7d24.appspot.com/o/MelissaPastoreResume2022.pdf?alt=media&token=486fe26d-e325-4e81-b7d3-705d2b9bad5b"
          download
        >
          Download a PDF
        </a>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ background: "black", color: "#fff" }}
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          icon={<WorkIcon />}
        >
          <h3>Work Experience</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="July 2021 - Present"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Software Engineer</h3>
          <h3>Clair</h3>
          <h4>New York, NY</h4>
          <p>
            + Work closely with the product, QA and design teams to create a
            seamless user experience for Clair’s digital banking mobile app and
            embedded web onboarding app + Utilize React Native, TypeScript and
            Expo to develop and improve upon features for Clair’s apps
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="June 2021"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Teaching Assistant, Data Structures and Algorithms Course</h3>
          <h3>NYC Tech Talent Pipeline</h3>
          <h4>New York, NY</h4>
          <p>
            + Conducted live coding demos to help teach data structures and
            algorithms to students + Reviewed and provided constructive feedback
            on students’ code + Led mock technical interviews with students
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="February 2021 - May 2021"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Software Engineering Teaching Fellow</h3>
          <h3>Fullstack Academy</h3>
          <h4>New York, NY</h4>
          <p>
            + Provided ongoing mentoring and support to students through small
            group meetings and office hours + Assisted students with debugging
            support during workshops and projects + Graded, reviewed and
            provided constructive feedback on students’ code
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="October 2018-June 2020"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Director of Public Relations</h3>
          <h3>Iconix Brand Group</h3>
          <h4>New York, NY</h4>
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
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="February 2016-October 2018"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Senior Manager, Public Relations</h3>
          <h3>Lacoste USA</h3>
          <h4>New York, NY</h4>
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
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="June 2006-January 2016"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Public Relations Assistant to Public Relations Manager</h3>
          <h3>Swarovski North America Limited</h3>
          <h4>New York, NY</h4>
          <p>
            + Produced and executed U.S. media outreach strategy that generated
            more than 100 million media impressions in top-tier publications
            annually + Introduced an integrated influencer strategy to help
            accelerate awareness and consideration among younger consumers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "black", color: "#fff" }}
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          icon={<SchoolIcon />}
        >
          <h3>Education</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          date="October 2020 - February 2021"
          dateClassName={"date"}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Fullstack Academy</h3>
          <h4>
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
          contentStyle={{ background: "#4b5c74", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4b5c74" }}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Syracuse University</h3>
          <h4>BA in Broadcast Journalism and Policy Studies</h4>
          <p>Graduated Magna Cum Laude</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#4b5c74", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Resume;
