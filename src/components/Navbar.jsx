import { NavLink } from "react-router-dom";
import Sundownlogo from "../assets/Sundownlogo.svg"
function Navbar() {
  return (
    <div className="nav-container">
        <nav>
            <img src={Sundownlogo} alt="logo"/>
          <div>
            <h4><NavLink to="/work">Work</NavLink></h4>
            <h4><NavLink to="/studio">Studio</NavLink></h4>
            <h4><NavLink to="/contact">Contact</NavLink></h4>
          </div>
        </nav>
      </div>

  );
}

export default Navbar;
