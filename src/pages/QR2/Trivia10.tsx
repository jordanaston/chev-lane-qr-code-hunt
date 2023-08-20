import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia10: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia9" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white text-sm pb-2 uppercase">
          Congratulations on completing our trivia challenge! We hope this
          taught you a thing or two.. <br />
          <br />
          Now get outta here! Go find the next QR code!
          <br />
          <br />
          # Clue <br />
          Search for Fashion Chelsea between the racks.
          <br />
        </p>
      </TextBox>

      <p className="text-white uppercase mt-4 text-xl border border-white p-1 px-2">
        <Link to="/trivia11" className="inline-block">
          DONE
        </Link>
      </p>
    </div>
  );
};

export default Trivia10;
