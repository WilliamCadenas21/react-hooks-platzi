import { useState } from "react";

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Header;
