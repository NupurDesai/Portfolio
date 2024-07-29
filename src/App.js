import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import kittyloading from "./LottieFiles/kittyloading.json";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <Lottie
            animationData={kittyloading}
            loop={true}
            style={{ width: 500, height: 500 }} // Adjust size if needed
          />
        </div>
      ) : (
        <div className="main-content">
          {/* Night sky animation */}
          <Lottie
            className="bg"
            animationData={nightsky}
            loop={true}
            style={{ width: "110%", height: "145vh" }} // Ensure it covers the viewport
          />

          <Nav />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
