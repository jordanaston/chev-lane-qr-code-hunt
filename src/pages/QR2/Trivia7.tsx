import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia7: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia6" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white text-md font-bold">
          Answer = 3,781 Litres <br />
          <br />
        </p>

        <p className="text-white text-sm pb-2">
          Not only does it take 3,781 litres of water on average to make just
          one pair of jeans, textile manufacturing uses 20% of the worlds clean
          water each year! <br />
          <br />
        </p>
      </TextBox>

      <p className="text-white uppercase mt-4 text-xl border border-white p-1 px-2">
        <Link to="/trivia8" className="inline-block">
          NEXT
        </Link>
      </p>
    </div>
  );
};

export default Trivia7;
