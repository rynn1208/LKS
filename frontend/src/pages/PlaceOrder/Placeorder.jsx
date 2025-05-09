import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Placeorder = () => {
   const { getTotalCartAmount } = useContext(StoreContext);
   return (
      <div class="row g-5 justify-content-center" style={{ marginTop: "30px" }}>
         <div class="col-md-7 col-lg-6 ">
            <h2>Delivery Information</h2>
            {/* multiple form */}
            <div class="input-group my-3">
               <input
                  type="text"
                  aria-label="First name"
                  placeholder="First Name"
                  class="form-control me-2 rounded-2"
               />
               <input
                  type="text"
                  aria-label="Last name"
                  class="form-control rounded-2"
                  placeholder="Last Name"
               />
            </div>
            {/*  */}
            {/* single Form */}
            <div class="input-group my-3">
               <input
                  type="text"
                  class="form-control "
                  placeholder="Email Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
               />
            </div>
            {/*  */}
            <div class="input-group my-3">
               <input
                  type="text"
                  class="form-control"
                  placeholder="Street"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
               />
            </div>
            {/* multiple form */}
            <div class="input-group my-3">
               <input
                  type="text"
                  aria-label="First name"
                  placeholder="City"
                  class="form-control me-2 rounded-2"
               />
               <input
                  type="text"
                  aria-label="Last name"
                  class="form-control rounded-2"
                  placeholder="State"
               />
            </div>
            {/*  */}
            {/* multiple form */}
            <div class="input-group my-3">
               <input
                  type="text"
                  aria-label="First name"
                  placeholder="Zip Code"
                  class="form-control me-2 rounded-2"
               />
               <input
                  type="text"
                  aria-label="Last name"
                  class="form-control rounded-2"
                  placeholder="Country"
               />
            </div>
            {/*  */}
            {/* single Form */}
            <div class="input-group my-3">
               <input
                  type="text"
                  class="form-control "
                  placeholder="Phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
               />
            </div>
            {/*  */}
         </div>

         <div class="col-lg-2"></div>
         <div class="col-md-5 col-lg-4 order-md-last">
            <div class="">
               <div class="mb-3 mb-sm-0">
                  <div className="card p-4 mt-5">
                     {" "}
                     {/*style={{ maxWidth: "160vw" }} */}
                     <h5 className="mb-4">Cart Totals</h5>
                     <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>${getTotalCartAmount()}</span>
                     </div>
                     <div className="d-flex justify-content-between mb-2">
                        <span>Delivery Fee</span>
                        <span>${getTotalCartAmount() === 0 ? 0 : 2}</span>
                     </div>
                     <hr />
                     <div className="d-flex justify-content-between mb-4 fw-bold">
                        <span>Total</span>
                        <span>
                           $
                           {getTotalCartAmount() === 0
                              ? 0
                              : getTotalCartAmount() + 2}
                        </span>
                     </div>
                     <button className="btn btn-danger w-100">
                        PROCEED TO PAYMENT
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Placeorder;
