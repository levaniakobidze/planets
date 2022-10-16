import "./App.css";
import React, { useState } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [color, setColor] = useState("#419EBB");
  return (
    <div className='App'>
      <Navbar
        planetIndex={planetIndex}
        setPlanetIndex={setPlanetIndex}
        setColor={setColor}
        color={color}
      />
      <Home
        planetIndex={planetIndex}
        setPlanetIndex={setPlanetIndex}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
