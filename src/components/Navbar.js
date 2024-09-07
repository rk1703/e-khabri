import React,{ useEffect } from "react";
import { Link,useLocation} from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid flex-column " >
          <div className="d-flex justify-content-between" style={{width:'100%'}}>
          <Link className="navbar-brand" to="/NEWS-APP">
            News-APP
          </Link>
          <div className="d-flex align-items-center ">

          <div
              className={`form-check form-switch mx-1 text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.togglemode}
                type="checkbox"
                id="flexSwitchCheckDefault"
                />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnText}
              </label>
            </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
            </div>
            </div>
                       
          <div className="collapse navbar-collapse overflow-hidden justify-content-center" style={{width:'95%'}} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0  ">
             
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sport">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/tech">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
    
        </div>
      </nav>
    </>
  );
};

export default Navbar;
