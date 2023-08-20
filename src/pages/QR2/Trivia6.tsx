import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import RadioOptions from "../../components/RadioOptions";

const Trivia6: React.FC = () => {
  const answers = [
    "1,256 Litres",
    "2,490 Litres",
    "3,781 Litres",
    "506 Litres",
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
      <Link to="/trivia5" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white">
          How many litres of water does it take on average to make 1 pair of
          jeans?
        </p>
      </TextBox>

      <RadioOptions options={answers} name="answer" />

      <p className="text-white uppercase mt-8 text-xl border border-white p-1 px-2">
        <Link to="/trivia7" className="inline-block">
          SUBMIT
        </Link>
      </p>
    </div>
  );
};

export default Trivia6;
