import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TriviaBackground from "../../assets/Backgrounds/Trivia-BG.png";
import TextBox from "../../components/TextBox";

const Trivia3: React.FC = () => {
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
      <Link to="/trivia2" className="text-white">
        ← BACK
      </Link>
      <TextBox>
        <p className="text-white text-md font-bold">
          Answer = C <br />
          <br />
        </p>

        <p className="text-white text-sm pb-2">
          Often brands highlight eco-friendly aspects of their business while
          downplaying their overall harmful aspects, resulting in a misleading
          overall image. <br />
          <br />
          Many well-known brands, like H&M, in 2011 have been accused of
          greenwashing - where their sustainable efforts were contradicted by
          their large overall impact.
          <br />
          <br />
          Luckily regulations are being imposed against greenwashing to promote
          transparency and accountability in business practices.
        </p>
      </TextBox>

      <p className="text-white uppercase mt-4 text-xl border border-white p-1 px-2">
        <Link to="/trivia4" className="inline-block">
          NEXT
        </Link>
      </p>
    </div>
  );
};

export default Trivia3;
