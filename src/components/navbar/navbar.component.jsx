import './navbar.styles.css'
import logo from '../../images/Logo.png'
const Navbar = () => {
  console.log(" hello i am navbar  ");
  return (
    <div>
      <nav className="navbar navbar-expand-lg w-100 position-absolute bg-transparent">
        <div className="container">
          <div>
            <img src={logo} className="w-100" alt="" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center navbar-buttons-container">
              <li>
                <ul className="navbar-nav">
                  <li className="nav-item rounded-pill border border-1 px-2">
                    <a className="nav-link" aria-current="page" href="#contact-us">
                      About Us{" "}
                    </a>
                  </li>
                  <li className="nav-item rounded-pill border border-1 px-2">
                    <a className="nav-link" href="#articles">
                      Article
                    </a>
                  </li>
                  <li className="nav-item rounded-pill border border-1 px-2 dropdown">
                    <a
                      className="nav-link dropdown-toggle"
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
                          Action
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
              <li className="nav-item rounded-pill py-2 px-3 signup-btn">
                Sign Up!
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
