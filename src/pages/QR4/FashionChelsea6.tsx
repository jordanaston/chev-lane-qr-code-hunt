import React from "react";
import { Link } from "react-router-dom";
import ChelseaImage6 from "../../assets/Images/Chelsea-Image-6.png";

const FashionChelsea6: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover bg-fixed text-justify">
      <div className="">
        <img src={ChelseaImage6} alt="Chev Lane Logo" className="w-80" />

        <div className="flex justify-between mt-8">
          <p
            className="text-customBlack uppercase text-md text-right"
            style={{ zIndex: 2 }}
          >
            <Link
              to="/fashionchelsea5"
              className="inline-block font-mono font-light border border-customBlack p-1 px-2"
            >
              ← BACK
            </Link>
          </p>
          <p
            className="text-customBlack uppercase text-md text-right"
            style={{ zIndex: 2 }}
          >
            <Link
              to="/fashionchelsea7"
              className="inline-block font-mono font-light border border-customBlack p-1 px-2"
            >
              NEXT →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FashionChelsea6;