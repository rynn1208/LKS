import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="back" id="footer">
      <div class="container">
        {" "}
        <footer class="row justify-content-around row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 ">
          {" "}
          <div class="col-md-6 mb-5">
            {" "}
            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
              {" "}
              <img src="/ryanncorp.png" alt="" style={{ width: "140px", height: "40px" }} />
            </a>{" "}
            <p class="text-body-primary">
              Nikmati pengalaman belanja makanan yang praktis dan menyenangkan. Kami menyediakan berbagai pilihan makanan siap saji, dan camilan lezat dengan
              kualitas terbaik. Pengiriman cepat dan layanan pelanggan ramah siap memenuhi kebutuhan harian Anda.
            </p>{" "}
            <div class="d-flex flex-row">
              <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none mx-2 text-light" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook link" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>{" "}
              <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none mx-2 text-light" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter link" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </a>{" "}
              <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none mx-2 text-light " aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin link" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>{" "}
            </div>
          </div>{" "}
          <div class="col mb-3">
            {" "}
            <h5>COMPANY</h5>{" "}
            <ul class="nav flex-column">
              {" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-primary">
                  Home
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-primary">
                  About Us
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-primary">
                  Delivery
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-primary">
                  Privacy Policy
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="col mb-3">
            {" "}
            <h5>GET IN TOUCH</h5>{" "}
            <ul class="nav flex-column">
              {" "}
              <li class="">
                <p class="p-0 mb-2 text-body-primary">+62 857-5995-5047</p>
              </li>{" "}
              <li class="">
                <a class=" mb-2 p-0 text-body-primary" style={{ textDecoration: "none" }}>
                  rynnschool12@gmail.com
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </footer>{" "}
        <footer class="py-3 my-4">
          <p class="text-center text-body-primary border-top">© 2025 Company, Inc</p>{" "}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
