import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-10 p-3 flex flex-row justify-center gap-3 shadow-sm">
      <NavLink to={"/"} className="navbar-button">
        Home
      </NavLink>
      <NavLink to={"/projects"} className="navbar-button">
        Projects
      </NavLink>
      <NavLink to={"/aboutme"} className="navbar-button">
        About me
      </NavLink>
      <NavLink to={"/contact"} className="navbar-button">
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
