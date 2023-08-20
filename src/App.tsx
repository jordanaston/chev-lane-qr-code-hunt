import 'normalize.css/normalize.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro1 from "./pages/QR1/Intro1";
import Intro2 from "./pages/QR1/Intro2";
import Trivia1 from "./pages/QR2/Trivia1";
import Trivia2 from "./pages/QR2/Trivia2";
import Trivia3 from "./pages/QR2/Trivia3";
import Trivia4 from "./pages/QR2/Trivia4";
import Trivia5 from "./pages/QR2/Trivia5";
import Trivia6 from "./pages/QR2/Trivia6";
import Trivia7 from "./pages/QR2/Trivia7";
import Trivia8 from "./pages/QR2/Trivia8";
import Trivia9 from "./pages/QR2/Trivia9";
import Trivia10 from "./pages/QR2/Trivia10";
import Trivia11 from "./pages/QR2/Trivia11";
import Challenge1 from "./pages/QR3/Challenge1";
import Challenge2 from "./pages/QR3/Challenge2";
import FashionChelsea1 from "./pages/QR4/FashionChelsea1";
import FashionChelsea2 from "./pages/QR4/FashionChelsea2";
import FashionChelsea3 from "./pages/QR4/FashionChelsea3";
import FashionChelsea4 from "./pages/QR4/FashionChelsea4";
import FashionChelsea5 from "./pages/QR4/FashionChelsea5";
import FashionChelsea6 from "./pages/QR4/FashionChelsea6";
import FashionChelsea7 from "./pages/QR4/FashionChelsea7";
import DesignerSpotlight1 from "./pages/QR5/DesignerSpotlight1";

import FinalQr from "./pages/QR7/FinalQr";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Routes>
          <Route path="/" element={<Intro1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route path="/trivia1" element={<Trivia1 />} />
          <Route path="/trivia2" element={<Trivia2 />} />
          <Route path="/trivia3" element={<Trivia3 />} />
          <Route path="/trivia4" element={<Trivia4 />} />
          <Route path="/trivia5" element={<Trivia5 />} />
          <Route path="/trivia6" element={<Trivia6 />} />
          <Route path="/trivia7" element={<Trivia7 />} />
          <Route path="/trivia8" element={<Trivia8 />} />
          <Route path="/trivia9" element={<Trivia9 />} />
          <Route path="/trivia10" element={<Trivia10 />} />
          <Route path="/trivia11" element={<Trivia11 />} />
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
          <Route path="/fashionchelsea1" element={<FashionChelsea1 />} />
          <Route path="/fashionchelsea2" element={<FashionChelsea2 />} />
          <Route path="/fashionchelsea3" element={<FashionChelsea3 />} />
          <Route path="/fashionchelsea4" element={<FashionChelsea4 />} />
          <Route path="/fashionchelsea5" element={<FashionChelsea5 />} />
          <Route path="/fashionchelsea6" element={<FashionChelsea6 />} />
          <Route path="/fashionchelsea7" element={<FashionChelsea7 />} />
          <Route path="/designerspotlight1" element={<DesignerSpotlight1 />} />

          <Route path="/finalqr" element={<FinalQr />} />
          <Route
            path="*"
            element={
              <div className="flex flex-grow justify-center font-mono text-customBlack items-center">
                oops wrong url!
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
