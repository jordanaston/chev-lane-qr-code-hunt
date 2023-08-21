import React, { useEffect, useState } from "react";
import TextBox from "../../components/TextBox";
import DesignerSpotlightBackground from "../../assets/Backgrounds/Designer-Spotlight-BG.png";
import Typewriter from "../../components/Typewriter";

const DesignerSpotlight1: React.FC = () => {
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
        backgroundImage: `url(${DesignerSpotlightBackground})`,
        zIndex: 1,
      }}
    >
      <div className="" style={{ zIndex: 2 }}>
        <TextBox className="border-white">
          <p className="text-white text-lg text-center">DESIGNER SPOTLIGHT!</p>
        </TextBox>
      </div>
      <div className="" style={{ zIndex: 2 }}>
        <TextBox className="border-white">
          <p className="text-white text-sm text-justify">
            Explore profiles of the talented designers we stock on our website.
            <br />
            <br />
            Has anything in the stall made you curious? You can learn more about
            the designer, their inspiration, design processes, & their
            sustainability ethos.
            <br />
            <br />
            Spend as much time as you'd like before moving on – you can even
            revisit later after the hunt.
            <br />
          </p>
        </TextBox>
      </div>

      <p
        className="text-white uppercase mt-4 text-lg border border-white p-1 px-2"
        style={{ zIndex: 2 }}
      >
        <a
          href="https://www.chevlane.com/designers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          Explore Designers →
        </a>
      </p>
      <p className="text-white text-lg text-justify">
        {revealClue ? (
          <>
            <p className="mt-4 text-sm"># CLUE</p>
            <p className="mt-4 text-sm">
              <Typewriter
                text="THE ANSWER LIES WITHIN THE FABRIC SCRAPS..."
                delay={40}
              />
            </p>
          </>
        ) : (
          <button
            className="border border-white mt-4 p-1 px-2"
            onClick={() => setRevealClue(true)}
          >
            REVEAL NEXT CLUE!
          </button>
        )}
      </p>
    </div>
  );
};

export default DesignerSpotlight1;
