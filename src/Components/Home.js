import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>NUPUR DESAI</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Hey there! I'm Nupur Desai 👋
            <br />
            <br />
            From the bustling city of Navi Mumbai, I’m currently diving into the
            world of MCA at Mumbai University. If there’s one thing about me,
            it’s that I’m a curious soul with a knack for creativity and a mind
            that grasps things faster . 🚀
            <br /> <br />
            Proficient in <b>ReactJs , UI & UX (Figma)</b> and <b>Core Java</b>,
            I’m diving into <b>MERN Stack</b> projects while constantly
            exploring new tech trends and challenges. 💻🎨🚀
            <br />
            <br />
            Also, I love <b>chai</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
