import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-4">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/aboutme"}>About me</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </div>
  );
};

export default NavBar;
