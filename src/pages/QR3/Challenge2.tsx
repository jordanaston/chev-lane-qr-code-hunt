import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Challenge2Background from "../../assets/Backgrounds/Challenge2-BG.png";
import TextBox from "../../components/TextBox";
import Typewriter from "../../components/Typewriter";

const Challenge2: React.FC = () => {
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    function handleLoad() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("DOMContentLoaded", handleLoad);
      return () => window.removeEventListener("DOMContentLoaded", handleLoad);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative"
      style={{
        backgroundImage: `url(${Challenge2Background})`,
        zIndex: 1,
      }}
    >
      <div className="pt-2" style={{ zIndex: 2 }}>
        <TextBox>
          <p className="text-white text-md text-center">
            COMMUNITY TEXTILE ART INSTALLATION
          </p>
        </TextBox>
      </div>
      <div className="pb-2" style={{ zIndex: 2 }}>
        <TextBox>
          <p className="text-white text-md">
            1. Choose a fabric scrap from our collection of off-cuts & discarded
            pieces.
            <br />
            <br />
            2. Use fabric paint & your creativity to doodle, draw, or share an
            activism message on your pieces of fabric. Whether it's a simple
            squiggle or a powerful message, your creation is a symbol of
            positive change.
            <br />
            <br />
            3. Once done, we can give it a moment to dry, then a team member
            will connect your patch onto the others to craft a collective art
            piece.
            <br />
            <br />
            This community artwork embodies the spirit of collaboration and
            mindful fashion. Your contribution will be a lasting reminder of the
            impact we can make when we come together.
            <br />
            <br />
            {revealClue ? (
              <>
                # CLUE <br />
                <div className="uppercase">
                  <Typewriter
                    text="CONGRATS ON FINDING ALL 5 QR CODES! Once finished WITH THE ART INSTALLATION, you can collect your reward from the Chev Lane team!"
                    delay={40}
                  />
                  <br />
                </div>
              </>
            ) : (
              <button
                className="border p-1 px-2"
                onClick={() => setRevealClue(true)}
              >
                REVEAL NEXT CLUE!
              </button>
            )}
          </p>
        </TextBox>
      </div>
      <p
        className="text-customBlack mb-7 text-xl mr-4 px-2"
        style={{ zIndex: 2 }}
      >
        <Link
          to="/challenge1"
          className="text-white"
          onClick={() => {
            setTimeout(() => {
              const middle =
                (document.documentElement.scrollHeight - window.innerHeight) /
                2;
              window.scrollTo(0, middle);
            }, 100);
          }}
        >
          ← BACK
        </Link>
      </p>
    </div>
  );
};

export default Challenge2;
