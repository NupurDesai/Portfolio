import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FacultyManagementSystemDesc:
      "I am very proficient in UI and UX designing using Figma. I designed and developed a College Faculty Management System during a hackathon, streamlining faculty management with an intuitive, user-friendly interface. My responsibilities included both the design and frontend development, ensuring a seamless user experience.",
    FacultyManagementSystemGithub: "https://github.com/NupurDesai",
    FacultyManagementSystemWebsite: "#",

    MiniProjectsDesc:
      "MiniProjects is a collection of small, interesting projects that I have worked on to enhance my skills in MERN Stack and various technologies. I developed these small projects to demonstrate and practice a wide range of functionalities.",
    MiniProjectsGithub: "https://github.com/NupurDesai",
    MiniProjectsWebsite: "#",

    GestureMouseDesc:
      "GestureMouse is an innovative project that enables hands-free mouse control using hand gesture recognition technology. By leveraging real-time tracking, users can seamlessly navigate their computer interfaces through intuitive hand movements.",
    GestureMouseGithub: "https://github.com/NupurDesai",
    GestureMouseWebsite: "#",

    ElectroMartDesc:
      "ElectroMart is an e-commerce platform focusing on electronic products. This project was developed using JAVA and offers a seamless shopping experience.",
    ElectroMartGithub: "https://github.com/NupurDesai",
    ElectroMartWebsite: "#",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
