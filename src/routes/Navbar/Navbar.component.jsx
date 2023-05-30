import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>

          <Link className="nav-link" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
