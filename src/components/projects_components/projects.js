import React from "react";
import Cards from "./cards";
import './projects.css'

const Projects = () => {
  return <div className='container mx-auto row'>
      <h2 className="projectTitle" >Projects</h2>
      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>
      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>
      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>

      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>
      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>
      <Cards titl={"Github Search"} content="This website allows users to search users on Github and view their public repositories." website={"https://saretoduncan.github.io/github-search/search" } github={"https://github.com/saretoduncan/github-search"}/>
  </div>;
};

export default Projects;
