import "../style/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${showNavbar && "nav-black"}`}>
      <div className="nav-contents">
        <img src="Logo.svg" className="nav-logo" alt="Logo" />
        <img src="Avatar.png" className="nav-avatar" alt="Avatar" />
      </div>
    </div>
  );
}

export default Navbar;
