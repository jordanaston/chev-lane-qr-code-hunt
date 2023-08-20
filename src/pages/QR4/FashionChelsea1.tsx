import React from "react";
import { Link } from "react-router-dom";
import ChelseaImage1 from "../../assets/Images/Chelsea-Image-1.png";

const FashionChelsea1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover bg-fixed text-justify">
      <img
        src={ChelseaImage1}
        alt="Chev Lane Logo"
        className="w-80 border border-customBlack"
      />

      <p
        className="text-customBlack uppercase mt-8 text-xl border border-customBlack p-1 px-2"
        style={{ zIndex: 2 }}
      >
        <Link to="/fashionchelsea2" className="inline-block font-mono font-light">
          LEARN ABOUT MY STORY! →
        </Link>
      </p>
    </div>
  );
};

export default FashionChelsea1;
