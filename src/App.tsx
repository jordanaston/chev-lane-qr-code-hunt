import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro1 from "./pages/QR1/Intro1";
import Intro2 from "./pages/QR1/Intro2";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-customBlack flex flex-col">
        <Routes>
          <Route path="/" element={<Intro1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route
            path="*"
            element={
              <div className="flex flex-grow justify-center font-mono text-white items-center">
                wrong url silly!
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
