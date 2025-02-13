import React from "react";
import List from "./List";
import projectData from "../projectData";
import Footer from "./Footer";

const Section = () => {
  return (
    <div className="section">
      <h2 id="games">
        <b>Games I Worked On</b>
      </h2>
      <p>
        Games are my passion. I've been playing them all my life but decided I
        love making them just as much!
      </p>

      <List projects={projectData.majorProjects} />
      <List projects={projectData.secondaryProjects} />
      <List projects={projectData.lesserProjects} />
      <List projects={projectData.demoProjects} />

      
    </div>
  );
};

export default Section;
