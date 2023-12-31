import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import ChevLaneLogo from "../../assets/Logos/Chev-Lane-Wavey-Logo.png";

const Trivia1: React.FC = () => {
  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <img src={ChevLaneLogo} alt="Chev Lane Logo" className="w-72" />

      <p className="text-white opacity-80 text-xl mb-2">ECO-TRIVIA</p>
      <p className="text-white opacity-75 uppercase mt-4 text-xl border border-white border-opacity-80 p-1 px-2">
        <Link to="/trivia2" className="inline-block">
          START
        </Link>
      </p>
    </div>
  );
};

export default Trivia1;
