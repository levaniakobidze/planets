import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
function App() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [color, setColor] = useState("#419EBB");

  return (
    <div className='App'>
      {/* <Router> */}
      <Navbar
        planetIndex={planetIndex}
        setPlanetIndex={setPlanetIndex}
        setColor={setColor}
        color={color}
      />
      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              planetIndex={planetIndex}
              setPlanetIndex={setPlanetIndex}
              color={color}
              setColor={setColor}
            />
          }
        />
        <Route
          path={":planet" || "Mercury"}
          element={
            <Home
              planetIndex={planetIndex}
              setPlanetIndex={setPlanetIndex}
              color={color}
              setColor={setColor}
            />
          }
        />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
