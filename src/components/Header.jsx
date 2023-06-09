import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="header">
      <h1 style={{ color: color }}>ReactHooks</h1>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Header;
