import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IntroBackground from "../../assets/Backgrounds/Intro-BG.png";
import TextBox from "../../components/TextBox";
import Typewriter from "../../components/Typewriter";

const Intro2: React.FC = () => {
  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${IntroBackground})` }}
    >
      <TextBox>
        <p className="text-white"># CLUE</p>
        <p className="text-white mt-4 mb-4">
          <Typewriter text="BETWEEN THESE PAGES, A SECRET LIES..." delay={40} />
        </p>
        <Link to="/" className="text-white pt-2">
          ← BACK
        </Link>
      </TextBox>
    </div>
  );
};

export default Intro2;
