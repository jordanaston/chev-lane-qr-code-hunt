import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import RadioOptions from "../../components/RadioOptions";

const Trivia4: React.FC = () => {
  const answers = [
    "Producing cheap, mass-produced garments following current trends.",
    "Production of timeless and classic designs.",
    "Implementing labor-intensive, slow production methods.",
    "It produces garments in limited quantities for exclusivity.",
  ];

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
      <Link to="/trivia3" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white">
          What is "fast fashion" in the context of the fashion industry?
        </p>
      </TextBox>

      <RadioOptions options={answers} name="answer" />

      <p className="text-white uppercase mt-8 text-xl border border-white p-1 px-2">
        <Link to="/trivia5" className="inline-block">
          SUBMIT
        </Link>
      </p>
    </div>
  );
};

export default Trivia4;
