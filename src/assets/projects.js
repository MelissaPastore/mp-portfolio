import React from "react";
import goodCitizen from "../../public/assets/GoodCitizen.png";
import vitamon from "../../public/assets/Vitamon2.png";
import bookshopper from "../../public/assets/Bookshopper.png";

export const projects = [
  {
    title: "Good Citizen Assistant",
    description:
      "The Good Citizen Assistant was created to help people be more engaged and informed citizens. Current features include looking up your elected officials using your address, either through a self-service form or via a Watson Assistant chat option and looking up recent voting records for current members of Congress.",
    tech: [
      "JavaScript",
      "React",
      "Redux",
      "IBM Watson",
      "Propublica Congress API",
      "Google Civic Information API",
    ],
    links: [
      "https://github.com/MelissaPastore/goodcitizen",
      " https://goodcitizenassistant.herokuapp.com/ ",
    ],
    img: goodCitizen,
  },
  {
    title: "Vitamon",
    description:
      "Vitamon is a fun mobile application that allows users to set and achieve goals through a routine and reward system. Vitamons are monsters that are fed through users’ healthy habits and daily accomplishments. You can also add friends to help keep you accountable. Created with a team of three other developers in a three-week sprint.",
    tech: [
      "JavaScript",
      "React",
      "Redux",
      "React Native",
      "Node.js",
      "Expo",
      "Victory",
      "Lottie",
      "Express",
      "Passport",
      "Sequelize",
    ],
    links: [
      "https://github.com/Vitamon-App/vitamon-frontend",
      "https://www.youtube.com/watch?v=tBSBIeprY3k&list=PLx0iOsdUOUmnwv1vrUcoOhP736-omYGMN&index=26&t=1s",
    ],
    img: vitamon,
  },

  ,
  {
    title: "Bookshopper",
    description:
      "Bookshopper is a mock ecommerce app built in a ten day sprint by a team of four developers.",
    tech: [
      "Javascript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Passport",
      "Sequelize",
    ],
    links: [
      "https://github.com/2011-team-chatime/graceshopper",
      "https://bookshoper1.herokuapp.com/",
    ],
    img: bookshopper,
  },
];
