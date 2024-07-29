import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Know me <b>better</b> !
          </h1>
          <p>
            Hi, I’m <b>Nupur Desai</b> from Navi Mumbai, currently navigating
            the final year of my <b>MCA</b> and diving into the world of{" "}
            <b>MERN stack web development</b>. 🚀
            <br />
            <br />
            I’m excited about new <b>collaborations</b> and projects where I can
            both contribute and grow. Feel free to <b>connect</b> with me; my
            contact links are below.Don’t forget to check out some of my work in
            the projects section.
            <br /> <br />
            Outside of coding, I’ve been passionate about sports since
            childhood, particularly <b>karate</b> and <b>kickboxing</b>. I’ve
            competed in numerous championships and kicked my way to success!
            🥋🥊
            <a href="https://www.instagram.com/nupurrdesai/">Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Java" />
        <Skills skill="Figma" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
