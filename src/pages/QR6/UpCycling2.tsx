import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox";
import UpCyclingBackground2 from "../../assets/Backgrounds/Up-Cycling-BG2.png";
import UpCyclingImage1 from "../../assets/Images/Up-Cycling-Image1.png";
import UpCyclingImage2 from "../../assets/Images/Up-Cycling-Image2.png";
import UpCyclingImage3 from "../../assets/Images/Up-Cycling-Image3.png";

const UpCycling2: React.FC = () => {
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    function handleLoad() {
      window.scrollTo(0, 0);
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
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative text-customBlack"
      style={{
        backgroundImage: `url(${UpCyclingBackground2})`,
        zIndex: 1,
      }}
    >
      <div className="mt-10" style={{ zIndex: 2 }}>
        <TextBox className="border-none bg-transparent">
          <p className="text-3xl text-center font-semibold"># UPCYCLING 101</p>
        </TextBox>
      </div>
      <img src={UpCyclingImage1} alt="Chev Lane Logo" className="w-80" />
      <div className="text-left font-medium text-lg pl-4" style={{ zIndex: 2 }}>
        <TextBox className="border-none bg-transparent">
          <p className="">• Reduces waste using discarded materials.</p>
          <p className="mt-6">• Minimises the need for new raw resources.</p>
        </TextBox>
      </div>
      <img src={UpCyclingImage2} alt="Chev Lane Logo" className="w-82" />
      <div className="text-left font-medium text-lg pl-4" style={{ zIndex: 2 }}>
        <TextBox className="border-none bg-transparent">
          <p className="">• Extends the life-cycle of clothing items.</p>
          <p className="mt-6">
            • Encourages sustainable production & consumption.
          </p>
          <p className="mt-6">• Saves energy & water in manufacturing.</p>
        </TextBox>
      </div>
      {revealClue ? (
        <img
          src={UpCyclingImage3}
          alt="Chev Lane Logo"
          className="w-80 mb-6 mt-4"
        />
      ) : (
        <button
          className="border p-1 px-2 mt-4 mb-4 text-lg border-customBlack"
          onClick={() => setRevealClue(true)}
        >
          REVEAL NEXT CLUE!
        </button>
      )}
      <div className="text-left font-medium text-lg pl-4" style={{ zIndex: 2 }}>
        <TextBox className="border-none bg-transparent">
          <p className="">• Fosters creativity and innovation in design.</p>
          <p className="mt-6">
            • Supports local artisans and small businesses.
          </p>
          <p className="mt-6">• Contributes to a more closed-loop system.</p>
        </TextBox>
      </div>
      <p
        className="uppercase text-xl border border-customBlack p-1 px-2 mt-2 mb-12 mr-2"
        style={{ zIndex: 2 }}
      >
        <Link
          to="/upcycling1"
          className="inline-block"
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

export default UpCycling2;
