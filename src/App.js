import "./css/App.css";
import React from "react";
import ImageDisplay from "./Components/ImageDisplay";

const App = () => {
  return (
    <div className="App">
      App
      <ImageDisplay />
      <button>Get Image</button>
    </div>
  );
};

export default App;
