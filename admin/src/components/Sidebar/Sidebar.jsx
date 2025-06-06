import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#speedometer2"></use>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlink:href="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul> */}

      {/* <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary ms-5 border"  >
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center sidebar ">
          {" "}
          <li class="nav-item">
            {" "}
            <NavLink
              to="/add"
              class="nav-link active py-3 border-bottom rounded-0"
              aria-current="page"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0 bg-dark" : "nav-link py-3 border-bottom rounded-0")}
              aria-label="Home"
              data-bs-original-title="Home"
            >
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <p class="d-flex flex-row">Add Item</p>
            </NavLink>{" "}
          </li>{" "}
          <li>
            {" "}
            <NavLink
              to="/list"
              class="nav-link py-3 border-bottom rounded-0"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0 bg-dark" : "nav-link py-3 border-bottom rounded-0")}   
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                />
              </svg>
              <p class="d-flex flex-row">List Items</p>
            </NavLink>{" "}
          </li>{" "}
          <li>
            {" "}
            <NavLink
              to="/orders"
              class="nav-link py-3 border-bottom rounded-0"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0 bg-dark" : "nav-link py-3 border-bottom rounded-0")}
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                />
              </svg>
              <p class="d-flex flex-row">Orders</p>
            </NavLink>{" "}
          </li>{" "}
          </ul>{" "}
          </div> */}

      {/* <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary ms-5 border">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center sidebar">
          <li className="nav-item">
            <NavLink
              to="/add"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0" : "nav-link py-3 border-bottom rounded-0")}
              aria-label="Add"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="..." />
              </svg>
              <p className="d-flex flex-row">Add Item</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0" : "nav-link py-3 border-bottom rounded-0")}
              aria-label="List"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                <path d="..." />
              </svg>
              <p className="d-flex flex-row">List Items</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) => (isActive ? "nav-link active py-3 border-bottom rounded-0" : "nav-link py-3 border-bottom rounded-0")}
              aria-label="Orders"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                <path d="..." />
              </svg>
              <p className="d-flex flex-row">Orders</p>
            </NavLink>
          </li>
        </ul>
      </div> */}

        <div></div>
      <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary " >
        {" "}
        <a
          href="/"
          class="d-block p-3 link-body-emphasis text-decoration-none"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          {" "}
          <svg class="bi pe-none" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>{" "}
          <span class="visually-hidden">Icon-only</span>{" "}
        </a>{" "}
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          {" "}
          <li class="nav-item">
            {" "}
            <a
              href="#"
              class="nav-link active py-3 border-bottom rounded-0"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Home"
              data-bs-original-title="Home"
            >
              {" "}
              <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Home">
                <use xlink:href="#home"></use>
              </svg>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              class="nav-link py-3 border-bottom rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              {" "}
              <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard">
                <use xlink:href="#speedometer2"></use>
              </svg>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              class="nav-link py-3 border-bottom rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              {" "}
              <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Orders">
                <use xlink:href="#table"></use>
              </svg>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              class="nav-link py-3 border-bottom rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Products"
              data-bs-original-title="Products"
            >
              {" "}
              <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Products">
                <use xlink:href="#grid"></use>
              </svg>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#"
              class="nav-link py-3 border-bottom rounded-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Customers"
              data-bs-original-title="Customers"
            >
              {" "}
              <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Customers">
                <use xlink:href="#people-circle"></use>
              </svg>{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        <div class="dropdown border-top">
          {" "}
          <a
            href="#"
            class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />{" "}
          </a>{" "}
          <ul class="dropdown-menu text-small shadow">
            {" "}
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>{" "}
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>{" "}
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>{" "}
            <li>
              <hr class="dropdown-divider" />
            </li>{" "}
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
