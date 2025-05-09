import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = ({ setShowLogin }) => {
  return (
    <div>
      {/* <header
            class="p-3 shadow"
            style={{ backgroundColor: "#102E50", borderRadius: "5px" }}
         >
            {" "}
            <div class="container">
               {" "}
               <div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
                  {" "}
                  <a
                     href="/"
                     class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5"
                  >
                     {" "}
                     <img
                        src="/ryanncorp.png"
                        alt=""
                        style={{ width: "120px", height: "auto" }}
                     />
                  </a>{" "}
                  <button
                     className="navbar-toggler text-white border-0"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#navbarCollapseContent"
                     aria-controls="navbarCollapseContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                     className="collapse navbar-collapse mt-3 mt-lg-0"
                     id="navbarCollapseContent"
                  >
                     <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-underline">
                        {" "}
                        <li>
                           <a href="#home" class="nav-link px-2 text-white">
                              Home
                           </a>
                        </li>{" "}
                        <li>
                           <a
                              href="#explore-menu"
                              class="nav-link px-2 text-white"
                           >
                              Menu
                           </a>
                        </li>{" "}
                        <li>
                           <a
                              href="#mobile-app"
                              class="nav-link px-2 text-white"
                           >
                              MobileApps
                           </a>
                        </li>{" "}
                        <li>
                           <a href="#footer" class="nav-link px-2 text-white">
                              ContactUs
                           </a>
                        </li>
                     </ul>{" "}
                     <form
                        class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                        role="search"
                     >
                        {" "}
                        <input
                           type="search"
                           class="form-control form-control-dark text-bg-white"
                           placeholder="Search..."
                           aria-label="Search"
                        />{" "}
                     </form>{" "}
                     <div class="text-end bag">
                        {" "}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="28"
                           height="28"
                           fill="currentColor"
                           class="bi bi-basket3 me-3 text-light"
                           viewBox="0 0 16 16"
                        >
                           <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                        </svg>
                        <button type="button" class="btn btn-warning">
                           Sign-up
                        </button>{" "}
                     </div>{" "}
                  </div>
               </div>{" "}
            </div>{" "}
         </header>  */}

      <nav className="navbar navbar-expand-lg navbar-dark shadow p-3" style={{ backgroundColor: "#102E50", borderRadius: "5px" }}>
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src="/ryanncorp.png" alt="Logo" style={{ width: "120px", height: "auto" }} />
          </Link>

          {/* Toggle Button */}
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

          {/* Collapse Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 nav-underline">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#explore-menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#mobile-app">
                  MobileApps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#footer">
                  ContactUs
                </a>
              </li>
            </ul>

            {/* Search & Sign Up */}
            <form className="d-flex me-3" role="search">
              <input className="form-control" type="search" placeholder="Search..." aria-label="Search" />
            </form>
            <div className="d-flex align-items-center mt-2 bag">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="white"
                  className="bi bi-basket3 me-3"
                  style={{ cursor: "pointer" }}
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                </svg>
              </Link>

              <div className="dot"></div>
              <button onClick={() => setShowLogin(true)} className="btn btn-warning" type="button">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
