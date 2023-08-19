import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia2: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia1" className="text-customGray pt-2">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white">What does green-washing refer to?</p>
      </TextBox>
      <p className="text-customGray text-xl mb-2">Questions Here</p>
      <p className="text-customGray uppercase mt-4 text-xl border border-customGray px-1">
        <Link to="/trivia2" className="inline-block">
          SUBMIT
        </Link>
      </p>
    </div>
  );
};

export default Trivia2;
