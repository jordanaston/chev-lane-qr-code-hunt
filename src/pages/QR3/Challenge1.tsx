import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ChallengeBackground from "../../assets/Backgrounds/Challenge-BG.png";
import TextBox from "../../components/TextBox";

const Challenge1: React.FC = () => {
  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative"
      style={{
        backgroundImage: `url(${ChallengeBackground})`,
        zIndex: 1,
      }}
    >
      <div className="px-5" style={{ zIndex: 2 }}>
        <TextBox className="border-customBlack">
          <p className="text-white text-lg text-center">
            Community Textile Art Installation:
          </p>
        </TextBox>
      </div>
      <div className="px-5" style={{ zIndex: 2 }}>
        <TextBox className="bg-transparent border-customBlack">
          <p className="text-customBlack font-semibold text-lg text-justify">
            WELCOME TO OUR INTERACTIVE ART INSTALLATION CHALLENGE!
            <br />
            <br />
            JOIN US IN CREATING A TEXTILE ART-PIECE WHICH SYMBOLISES A
            SUSTAINABLE COMMITMENT.
          </p>
        </TextBox>
      </div>
      <p
        className="text-customBlack uppercase mt-4 text-xl border border-customBlack p-1 px-2"
        style={{ zIndex: 2 }}
      >
        <Link
          to="/challenge2"
          className="inline-block font-semibold"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100); 
          }}
        >
          CHALLENGE DETAILS →
        </Link>
      </p>
    </div>
  );
};

export default Challenge1;
