import React from "react";
import { Link } from "react-router-dom";
import Challenge2Background from "../../assets/Backgrounds/Challenge2-BG.png";
import TextBox from "../../components/TextBox";

const Challenge2: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative"
      style={{
        backgroundImage: `url(${Challenge2Background})`,
        zIndex: 1,
      }}
    >
      {/* <div
        style={{
          content: '""',
          position: "absolute",
          top: "20px",
          right: "20px",
          bottom: "20px",
          left: "20px",
          border: "0.1px solid white",
          zIndex: 0,
        }}
      ></div> */}
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
            1. Choose a fabric scrap from our collection of off-cuts and
            discarded pieces. Each piece has a story to tell and a chance to
            live a longer life.
            <br />
            <br />
            2. Use fabric paint and your creativity to doodle, draw, or share an
            activism message on your fabric. Let your imagination flow as you
            make your mark. Whether it's a simple squiggle or a powerful
            message, your creation is a symbol of positive change.
            <br />
            <br />
            3. Once done, we’ll give it a moment to dry then a team member will
            hand-sew each patch onto others to craft a collective art piece.
            <br />
            <br />
            This community artwork embodies the spirit of collaboration and
            mindful fashion. Your contribution WILL be a lasting reminder of the
            impact we can make when we come together for a more sustainable
            future.
            <br />
            <br />
            Alright, enough of the SOPPY STUFF! GO HUNT DOWN THOSE QR CODES!
            <br />
            <br />
            # CLUE - the code is hidden within a two-word accessory.
            <br />
            <br />
            HINT - DENIM PATCHWORK...
          </p>
        </TextBox>
      </div>
      <p
        className="text-customBlack mb-7 text-xl mr-4 px-2"
        style={{ zIndex: 2 }}
      >
        <Link to="/challenge1" className="text-white">
          ← Back
        </Link>
      </p>
    </div>
  );
};

export default Challenge2;
