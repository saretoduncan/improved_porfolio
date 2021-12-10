import React from "react";

import abtImg from "../images/nomad.svg";
import "./About.css";

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
        <div class="container position-absolute   bg-danger   abs_section"></div>
    </div>
  );
};

export default About;
