import { useState } from "react";
import Header from "./components/header/header";
import SelectCar from "./components/customize/app";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <Header
        changeDarkLight={toggleDarkMode}
      />
      <SelectCar />
    </div>
  );
}

export default function Main() {
  return <App />;
}
