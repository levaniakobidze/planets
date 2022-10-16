import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
