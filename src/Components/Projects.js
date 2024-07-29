import React from "react";
import ProjectBox from "./ProjectBox";
import MiniProjects from "../images/MiniProjects.png";
import ElectroMart from "../images/ElectroMart.png";
import GestureMouse from "../images/GestureMouse.png";
import FacultyManagementSystem from "../images/FacultyManagementSystem.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={FacultyManagementSystem}
          projectName="FacultyManagementSystem"
        />
        <ProjectBox projectPhoto={MiniProjects} projectName="MiniProjects" />
        <ProjectBox projectPhoto={GestureMouse} projectName="GestureMouse" />
        <ProjectBox projectPhoto={ElectroMart} projectName="ElectroMart" />
      </div>
    </div>
  );
};

export default Projects;
