import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChelseaBackground from "../../assets/Images/Chelsea-Image-7.png";
import TextBox from "../../components/TextBox";
import Typewriter from "../../components/Typewriter";

const FashionChelsea7: React.FC = () => {
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative"
      style={{
        backgroundImage: `url(${ChelseaBackground})`,
        zIndex: 1,
      }}
    >
      <div className="" style={{ zIndex: 2 }}>
        <TextBox className="bg-transparent bg-white border-customBlack">
          <p className="text-customBlack text-sm text-justify">
            The good thing is, we can make informed choices to invest our
            fashion budget wisely!
            <br />
            <br />
            From purchasing from op-shops & online marketplaces such as Depop,
            to embracing practices like repairing, & supporting local designers,
            there's a wide range of more ethical & sustainable options
            available.
            <br />
            <br />
            Consider investing in higher-quality items that resonate with you.
            While the initial expense might be greater, they provide lasting
            value for both you and the makers.
            <p className="text-customBlack text-sm text-justify">
              {revealClue ? (
                <>
                  <p className="mt-4"># CLUE</p>
                  <p className="mt-4">
                    <Typewriter text="RAISE YOUR GAZE..." delay={40} />
                  </p>
                </>
              ) : (
                <button
                  className="border border-customBlack mt-4 p-1 px-2"
                  onClick={() => setRevealClue(true)}
                >
                  REVEAL NEXT CLUE!
                </button>
              )}
            </p>
          </p>
        </TextBox>
      </div>
      <p
        className="text-customBlack uppercase text-xl border border-customBlack p-1 px-2"
        style={{ zIndex: 2 }}
      >
        <Link to="/fashionchelsea6" className="inline-block">
          ← BACK
        </Link>
      </p>
    </div>
  );
};

export default FashionChelsea7;
