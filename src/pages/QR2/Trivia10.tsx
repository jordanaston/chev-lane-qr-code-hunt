import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";
import Typewriter from "../../components/Typewriter";

const Trivia10: React.FC = () => {
  const [revealClue, setRevealClue] = useState(false);

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
          {revealClue ? (
            <>
              # Clue <br />
              <Typewriter
                text="Search for Fashion Chelsea between the racks."
                delay={40}
              />
              <br />
            </>
          ) : (
            <button
              className="yourButtonStylesHere border p-1 px-2"
              onClick={() => setRevealClue(true)}
            >
              REVEAL NEXT CLUE!
            </button>
          )}
        </p>
      </TextBox>
    </div>
  );
};

export default Trivia10;
