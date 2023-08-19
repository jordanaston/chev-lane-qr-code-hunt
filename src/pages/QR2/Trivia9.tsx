import React from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia9: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono"
      style={{ backgroundImage: `url(${TriviaBackground})` }}
    >
      <Link to="/trivia8" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white text-md font-bold">
          Answer = D. Avoid synthetics <br />
          <br />
        </p>

        <p className="text-white text-sm pb-2">
          Microplastics = tiny plastic particles released from synthetic fibres
          such as polyester and nylon in clothing during washing. <br />
          <br />
          These particles infiltrate waterways, endanger marine life and
          potentially enter the food chain. Addressing this issue requires
          sustainable fabric choices, better washing practices, and innovative
          filtration systems.
          <br />
        </p>
      </TextBox>

      <p className="text-white uppercase mt-4 text-xl border border-white p-1 px-2">
        <Link to="/trivia10" className="inline-block">
          NEXT
        </Link>
      </p>
    </div>
  );
};

export default Trivia9;
