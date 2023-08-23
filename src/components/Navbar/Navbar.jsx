import "./Navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg w-100 position-absolute">
        <div className="container">
          <div>
            <img src="/assets/images/Logo.png" className="w-100" alt="" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center">
              <li className={"w-100 w-lg-fit"}>
                <ul className="navbar-nav gap-1 gap-lg-2">
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill border border-1 px-3"
                      aria-current="page"
                      href="#about-us"
                    >
                      About Us{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill border border-1 px-3"
                      href="#articles"
                    >
                      Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill border border-1 px-3 dropdown dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Property
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#properties">
                          Goto Properties
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={"nav-item w-auto"}>
                <Link
                  className="nav-link rounded-pill py-3 px-4 signup-btn"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
