import React from "react";
import StackCard from "./Stack_card";
import abtImg from "../images/nomad.svg";
import frontEnd from "../images/frontend.svg";
import androidImg from "../images/androidImg.svg";
import backendImg from "../images/backendImg.svg";
import "./About.css";

const frontendTools = [
  "VS code",
  "CodeKit",
  "Bootstrap",
  "Bulma",
  "Codepen",
  "Terminal",
];
const androidDevTools = ["Android studio", "Junit", "Gradle", "Terminal"];
const backendDevTools = [
  "Spring Boot, Java-spark",
  "Maven",
  "Junit",
  "Hibernet",
  "Intellij idea",
  "Docker",
  "Terminal",
];
const devTools = (tools) => {
  return tools.map((tols) => {
    return <li>{tols}</li>;
  });
};
const About = () => {
  return (
    <div className=" bg-light mt-3 position-relative ">
      <div className="container-fluid   d-flex text-light about_section">
        <div className=" container mx-auto row pt-3">
          <h1 class="fw-bold section_title1">About me</h1>
          <div className="col-12 col-md-6 align-self-center">
            <p class="">
              Am a Stoic and a Software developer. I wish to apply the
              principles of stoicism to both life and software development. I
              fell in love with programming during the corona lockdowns. I love
              philosophy and read self-help books in my spare time. I am more
              interested in the science behind or inner engineering of all
              technologies I come across and haven't limited myself to any
              "stack".
            </p>
          </div>
          <figure className="col-12 d-flex justify-content-center col-md-6 ">
            <img className="img-fluid w-75 " src={abtImg} />
          </figure>
        </div>
      </div>
      <div class="container position-absolute row abs_section">
        <StackCard
          img={frontEnd}
          titl={"Front-end Developer"}
          about={`I like to code things from 
scratch, and enjoy bringing 
ideas to life in the browser.`}
          stackTitle={`Language I speak:`}
          stacks={`HTML,CSS,Reactjs,Angular2+
          Vanilla js`}
          devTitles={`Dev Tools`}
          dev={devTools(frontendTools)}
        />
        <StackCard
          img={androidImg}
          titl={"Android Developer"}
          about={`Making android applications
          that are usefull to others make me feel proud of myself. 
          its like a super power.`}
          stackTitle={`Language I speak:`}
          stacks={`Kotlin and Java`}
          devTitles={`Dev Tools`}
          dev={devTools(androidDevTools)}
        />
      </div>
    </div>
  );
};

export default About;
