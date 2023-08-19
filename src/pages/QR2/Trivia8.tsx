import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import RadioOptions from "../../components/RadioOptions";

const Trivia8: React.FC = () => {
  const answers = [
    "Buying more clothes made from synthetic fibres.",
    "Washing clothes with cold water.",
    "Discarding old clothes in the trash.",
    "Avoid buying / wearing clothes made using synthetic fibre.",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia7" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white">
          Which of these sustainable fashion practices can help reduce
          micro-plastic pollution?
        </p>
      </TextBox>

      <RadioOptions options={answers} name="answer" />

      <p className="text-white uppercase mt-8 text-xl border border-white p-1 px-2">
        <Link to="/trivia9" className="inline-block">
          SUBMIT
        </Link>
      </p>
    </div>
  );
};

export default Trivia8;
