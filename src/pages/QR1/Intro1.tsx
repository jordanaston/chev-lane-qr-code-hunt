import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IntroBackground from "../../assets/Backgrounds/Intro-BG.png";
import ChevLaneLogo from "../../assets/Logos/Chev-Lane-Wavey-Logo.png";
import TextBox from "../../components/TextBox";

const Intro1: React.FC = () => {
  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-center bg-cover text-justify"
      style={{ backgroundImage: `url(${IntroBackground})` }}
    >
      <img src={ChevLaneLogo} alt="Chev Lane Logo" className="w-72" />

      <TextBox>
        <p className="text-white uppercase">
          Welcome to our Chev Lane QR code Hunt: Tracing Fashion Sustainability
        </p>
        <p className="text-white uppercase mt-4">
          Click{" "}
          <Link to="/intro2" className="underline inline-block font-bold">
            ENTER
          </Link>{" "}
          to begin your journey and learn about sustainable fashion practices!
        </p>
      </TextBox>
      <TextBox>
        <p className="text-white uppercase">
          FIND and complete ALL 5 QR CODES hidden within our stall & WIN A
          reward AT THE END.
        </p>
        <p className="text-white mt-4 text-xs">
          10-15 mins to complete on average.
        </p>
      </TextBox>
    </div>
  );
};

export default Intro1;
