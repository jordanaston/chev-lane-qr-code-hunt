import React from "react";
import ChevLaneLogoBlack from "../../assets/Logos/Chev-Lane-Wavey-Logo-Black.png";
import TextBox from "../../components/TextBox";
import FinalQRBackground from "../../assets/Backgrounds/Final-QR-BG.png";

const FinalQr: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover bg-fixed text-justify"
      style={{ backgroundImage: `url(${FinalQRBackground})` }}
    >
      <img src={ChevLaneLogoBlack} alt="Chev Lane Logo" className="w-72" />

      <TextBox>
        <p className="text-white uppercase">
          <span className="font-bold">
            Congratulations on completing the Chev Lane QR Hunt!
          </span>
          <br />
          <br />
          Enjoy <span className="font-bold">$10</span> off ANY CHEV LANE
          purchase! Here's your special discount code:{" "}
          <span className="font-bold">SUSTAINABLE10</span>
          <br />
          <br />
          Code expires on 1st Jan 2024. HINT: SCREENSHOT THIS PAGE!
        </p>
      </TextBox>
      <TextBox>
        <p className="text-white uppercase">
          COLLECT YOUR 2ND SURPRISE FROM ANY CHEV LANE TEAM MEMBER!
        </p>
      </TextBox>
    </div>
  );
};

export default FinalQr;
