import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import RadioOptions from "../../components/RadioOptions";

const Trivia2: React.FC = () => {
  const answers = [
    "Using plant-based detergents for laundry to conserve water",
    "The practice of using eco-friendly packaging for products",
    "Claims of environmental sustainability by a brand that are false or misleading",
    "A term used for companies that actively support environmental regulations",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia1" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white">What does green-washing refer to?</p>
      </TextBox>

      <RadioOptions options={answers} name="answer" />

      <p className="text-white uppercase mt-8 text-xl border border-white p-1 px-2">
        <Link to="/trivia2" className="inline-block">
          SUBMIT
        </Link>
      </p>
    </div>
  );
};

export default Trivia2;
