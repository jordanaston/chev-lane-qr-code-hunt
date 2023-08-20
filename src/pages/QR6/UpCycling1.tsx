import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox";
import UpCyclingBackground from "../../assets/Backgrounds/Up-Cycling-BG1.png";

const UpCycling1: React.FC = () => {
  useEffect(() => {
    const middle =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;
    window.scrollTo(0, middle);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover font-mono relative"
      style={{
        backgroundImage: `url(${UpCyclingBackground})`,
        zIndex: 1,
      }}
    >
      <div className="" style={{ zIndex: 2 }}>
        <TextBox className="border-none bg-transparent">
          <p className="text-white text-3xl text-center font-semibold">
            # UPCYCLING 101
          </p>
        </TextBox>
      </div>
      <div className="" style={{ zIndex: 2 }}>
        <TextBox className="border-white">
          <p className="text-white text-lg text-justify uppercase">
            The majority of the items we stock have been up-cycled or
            recycled...
            <br />
            <br />
            How does embracing up-cycled fashion take us one step closer to a
            circular economy?
          </p>
        </TextBox>
      </div>

      <p
        className="text-white uppercase text-xl border border-white p-1 px-2 mt-10"
        style={{ zIndex: 2 }}
      >
        <Link
          to="/upcycling2"
          className="inline-block"
          onClick={() => window.scrollTo(0, 0)}
        >
          NEXT →
        </Link>
      </p>
    </div>
  );
};

export default UpCycling1;
