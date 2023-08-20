import React from "react";
import { Link } from "react-router-dom";
import IntroBackground from "../../assets/Backgrounds/Intro-BG.png";
import TextBox from "../../components/TextBox";

const Intro2: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${IntroBackground})` }}
    >
      <TextBox>
        <p className="text-white"># CLUE</p>
        <p className="text-white mt-4 mb-4">
          THE ANSWERS LIE WITHIN THE FABRIC...{" "}
        </p>
        <Link to="/" className="text-white pt-2">
          ← BACK
        </Link>
      </TextBox>
    </div>
  );
};

export default Intro2;
