import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia5: React.FC = () => {
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
      <Link to="/trivia4" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white text-md font-bold">
          Answer = A <br />
          <br />
        </p>

        <p className="text-white text-sm pb-2">
          Fast fashion is a retail strategy known for rapidly producing
          inexpensive clothing, allowing retailers to respond to the latest
          fashion trends. <br />
          <br />
          This leads to frequent collection changes & demand for cheap,
          short-lived garments, causing environmental & ethical concerns like
          labor exploitation & textile waste.
          <br />
          <br />
          It's worth noting that fast fashion largely dominates our Westfield
          shopping centres.
        </p>
      </TextBox>

      <p className="text-white uppercase mt-4 text-xl border border-white p-1 px-2">
        <Link to="/trivia6" className="inline-block">
          NEXT
        </Link>
      </p>
    </div>
  );
};

export default Trivia5;
