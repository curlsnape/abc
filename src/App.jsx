import React from "react";
import { Link } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
