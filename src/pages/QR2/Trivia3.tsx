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
          Some brands highlight eco-friendly aspects of their business while
          downplaying their harmful aspects, resulting in a deceptive overall
          image. <br />
          <br />
          This often diverts attention from negative aspects, like energy-usage
          or large-scale production through the marketing of a supposedly
          sustainable product.
          <br />
          <br />
          Several well-known brands have faced accusations of green-washing. For
          instance, in 2011, H&M faced criticism for its Conscious Collection
          while their overall environmental impact remained high.
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
