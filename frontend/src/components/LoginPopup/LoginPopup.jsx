import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
   const [currState, setCurState] = useState("Sign Up");

   return (
      <div className="">
         <div
            class="modal modal-sheet full d-block  p-4 py-md-5 "
            tabindex="-1"
            role="dialog"
            id="modalSignin"
         >
            {" "}
            <div class="modal-dialog popup-content">
               {" "}
               <div class="modal-content rounded-4 shadow">
                  {" "}
                  <div class="modal-header p-5 pb-4 border-bottom-0">
                     {" "}
                     <h1 class="fw-bold mb-0 fs-2">{currState}</h1>{" "}
                     <button
                        onClick={() => setShowLogin(false)}
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>{" "}
                  </div>{" "}
                  <div class="modal-body p-5 pt-0">
                     {" "}
                     <form class="">
                        {currState === "Login" ? (
                           <></>
                        ) : (
                           <input
                              class="form-control rounded-3 mb-3 py-3"
                              type="text"
                              placeholder="Your Name"
                           ></input>
                        )}
                        <div class="form-floating mb-3">
                           {" "}
                           <input
                              type="email"
                              class="form-control rounded-3"
                              id="floatingInput"
                              placeholder="name@example.com"
                           />{" "}
                           <label for="floatingInput">Email address</label>{" "}
                        </div>{" "}
                        <div class="form-floating mb-3">
                           {" "}
                           <input
                              type="password"
                              class="form-control rounded-3"
                              id="floatingPassword"
                              placeholder="Password"
                           />{" "}
                           <label for="floatingPassword">Password</label>{" "}
                        </div>{" "}
                        <button
                           class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                           type="submit"
                        >
                           {currState === "Sign Up"
                              ? "Create Account"
                              : "Login"}
                        </button>{" "}
                        <div class="input-group mb-3">
                           <div class="input-group-text">
                              <input
                                 class="form-check-input mt-0"
                                 type="checkbox"
                                 value=""
                                 aria-label="Checkbox for following text input"
                                 required
                              />
                           </div>
                           <small class="ms-2 mt-1 text-body-secondary">
                           By clicking Sign up, you agree to the terms of use.
                        </small>{" "}
                        </div>
                        
                        {currState === "Login" ? (
                           <p>
                              Create a new account?{" "}
                              <span onClick={() => setCurState("Sign Up")}>
                                 Click Here
                              </span>{" "}
                           </p>
                        ) : (
                           <p>
                              Already have an account?{" "}
                              <span onClick={() => setCurState("Login")}>
                                 Login Here
                              </span>{" "}
                           </p>
                        )}
                     </form>{" "}
                  </div>{" "}
               </div>{" "}
            </div>{" "}
         </div>
      </div>
   );
};

export default LoginPopup;
