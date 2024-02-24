import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-4 sticky top-0">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects"}>project</NavLink>
      <NavLink to={"/aboutme"}>about me</NavLink>
      <NavLink to={"/contact"}>contact</NavLink>
    </div>
  );
};

export default NavBar;
