import React from "react";
import { Link } from "react-router-dom";
import ChelseaImage2 from "../../assets/Images/Chelsea-Image-2.png";

const FashionChelsea2: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover bg-fixed text-justify">
      <p className="font-mono text-lg mb-4 text-customBlack">
        DESIGNER / FASHION CHELSEA
      </p>
      <div className="">
        <img
          src={ChelseaImage2}
          alt="Chev Lane Logo"
          className="w-72 border border-customBlack"
        />

        <p className="font-mono text-xs mb-4 text-customBlack underline mt-4">
          Chelsea Hickman
        </p>
        <p className="font-mono text-xs mb-4 text-customBlack">
          Location / Melbourne
        </p>
        <p className="font-mono text-xs mb-4 text-customBlack">
          Up-Cycled, Salvaged Waste
        </p>
        <p className="font-mono text-xs mb-4 text-customBlack">
          Fashion Activist
        </p>
        <div className="flex justify-between">
          <p
            className="text-customBlack uppercase text-md text-right"
            style={{ zIndex: 2 }}
          >
            <Link
              to="/fashionchelsea1"
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
              to="/fashionchelsea3"
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

export default FashionChelsea2;
