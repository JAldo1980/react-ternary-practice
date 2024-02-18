import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";

function App() {
  const [switchToggle, setSwitchToggle] = useState(true);

  const handleToggle = () => {
    setSwitchToggle((prevToggle) => !prevToggle);
    document.body.classList.toggle("dark");
    console.log(switchToggle);
  };

  return (
    <>
      <Header />
      <button onClick={handleToggle}>CLICK</button>
    </>
  );
}

export default App;
