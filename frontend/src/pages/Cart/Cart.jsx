import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div style={{ marginTop: "100px" }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody >
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <tr key={index} className="align-middle">
                  <td class="mt-5">
                    <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{cartItems[item._id]}</td>
                  <td>${item.price * cartItems[item._id]}</td>
                  <td>
                    <span className="text-danger" style={{ cursor: "pointer" }}>
                      <p onClick={() => removeFromCart(item._id)} className="my-auto ms-2 fs-5">
                        x
                      </p>
                    </span>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
        <div class="row">
          <div class="col-sm-7 mb-3 mb-sm-0">
            <div className="card p-4 mt-5">
              {" "}
              {/*style={{ maxWidth: "160vw" }} */}
              <h5 className="mb-4">Cart Totals</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>${}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 fw-bold">
                <span>Total</span>
                <span>${}</span>
              </div>
              <button className="btn btn-danger w-100">PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div class="col-sm mt-5 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PromoCode</h5>
                <p class="card-text">If you have PromoCode, Enter Here!!</p>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Promo Code" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                  <button class="btn bg-dark btn-outline-secondary" type="button" id="button-addon2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;
