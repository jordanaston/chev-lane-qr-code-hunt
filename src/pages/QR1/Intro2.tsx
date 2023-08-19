import React from "react";
import IntroBackground from "../../assets/Backgrounds/Intro-BG.png";

const Intro2: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${IntroBackground})` }}
    ></div>
  );
};

export default Intro2;
