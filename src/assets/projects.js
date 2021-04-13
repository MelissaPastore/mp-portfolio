import React from "react";
import {
  Heroku,
  Html5,
  Javascript,
  MaterialUi,
  NodeDotJs,
  Postgresql,
  Postman,
  ReactJs,
  Redux,
  Ibmwatson,
  Google,
  Expo,
  Express,
} from "@icons-pack/react-simple-icons";

export const projects = [
  {
    title: "Good Citizen Assistant",
    description:
      "The Good Citizen Assistant was created to help people be more engaged and informed citizens. Current features include looking up your elected officials using your address, either through a self-service form or via a Watson Assistant chat option and looking up recent voting records for current members of Congress.",
    tech: [
      <Javascript color="#F7DF1E" />,
      <ReactJs color="#61DAFB" />,
      <Redux color="#764ABC" />,
      <Ibmwatson color="#BE95FF" />,
      "The Propublica Congress API",
      "The Google Civic Information API",
    ],
    links: [
      "https://github.com/MelissaPastore/goodcitizen",
      " https://goodcitizenassistant.herokuapp.com/ ",
    ],
    img: "src/assets/GoodCitizen.png",
  },
  {
    title: "Vitamon",
    description:
      "Vitamon is a fun mobile application that allows users to set and achieve goals through a routine and reward system. Vitamons are monsters that are fed through users’ healthy habits and daily accomplishments. You can also add friends to help keep you accountable. Created with a team of three other developers in a three-week sprint.",
    tech: [
      <Javascript color="#F7DF1E" />,
      <ReactJs color="#61DAFB" />,
      <Redux color="#764ABC" />,
      "React Native",
      <NodeDotJs color="##339933" />,
      <Expo color="#000020" />,
      "Victory",
      "Lottie",
      <Express color="#000000" />,
      "Passport",
      "Sequelize",
    ],
    links: ["https://github.com/Vitamon-App/vitamon-frontend"],
    img: "src/assets/Vitamon2.png",
  },

  ,
  {
    title: "Bookshopper",
    description:
      "Bookshopper is a mock ecommerce app built in a ten day sprint by a team of four developers.",
    tech: [
      <Javascript color="#F7DF1E" />,
      <ReactJs color="#61DAFB" />,
      <Redux color="#764ABC" />,
      <NodeDotJs color="##339933" />,
      <Express color="#000000" />,
      "Passport",
      "Sequelize",
    ],
    links: [
      "https://github.com/2011-team-chatime/graceshopper",
      "https://bookshoper1.herokuapp.com/",
    ],
    img: "src/assets/Bookshopper.png",
  },
];
