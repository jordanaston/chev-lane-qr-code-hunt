import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import JordFace from "../../assets/jord-face.png";

const Trivia11: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia10" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <img src={JordFace} alt="Jord Face" />
      </TextBox>
    </div>
  );
};

export default Trivia11;
