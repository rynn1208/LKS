import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand">Admin Panel</a>
          <div class="dropdown text-end">
            <a href="#" class="d-block link-body-emphasis text-decoration-none " aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="33" height="33" class="rounded-circle" />{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
