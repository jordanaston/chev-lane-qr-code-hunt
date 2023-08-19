import React from "react";
import IntroBackground from "../../assets/Backgrounds/Intro-BG.png";
import ChevLaneLogo from "../../assets/Logos/Chev-Lane-Wavey-Logo.png";

const Intro1: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${IntroBackground})` }}
    >
      <img src={ChevLaneLogo} alt="Chev Lane Logo" className="w-48 md:w-64" />
    </div>
  );
};

export default Intro1;
