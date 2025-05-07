import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header class="p-3 shadow" style={{ backgroundColor: "#102E50", borderRadius: "5px" }}>
        {" "}
        <div class="container">
          {" "}
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {" "}
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5">
              {" "}
              <img src="/ryanncorp.png" alt="" style={{ width: "120px", height: "auto" }} />
            </a>{" "}
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-underline">
              {" "}
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Home
                </a>
              </li>{" "}
              <li>
                <a href="#explore-menu" class="nav-link px-2 text-white">
                  Menu
                </a>
              </li>{" "}
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  MobileApps
                </a>
              </li>{" "}
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  ContactUs
                </a>
              </li>
            </ul>{" "}
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              {" "}
              <input type="search" class="form-control form-control-dark text-bg-white" placeholder="Search..." aria-label="Search" />{" "}
            </form>{" "}
            <div class="text-end bag"> 
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-basket3 me-3 text-light" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
              </svg>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    </div>
  );
};

export default Navbar;
