import { NavLink } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => setIsOpen(!isOpen);
  return (
    <div className="p-3 shadow-lg mb-2 bg-white flex flex-col-reverse">
      <nav className={isOpen ? "navbar" : "navbar-close"}>
        <NavLink to={"/"} className="navbar-button">
          Home
        </NavLink>
        <NavLink to={"/projects"} className="navbar-button">
          Projects
        </NavLink>
        <NavLink to={"/aboutme"} className="navbar-button">
          About
        </NavLink>
        <NavLink to={"/contact"} className="navbar-button">
          Contact
        </NavLink>
      </nav>
      <HamburgerButton onClick={handleOpenClose} />
    </div>
  );
};

export default NavBar;
