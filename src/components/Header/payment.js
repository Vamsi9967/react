import React, { useState } from 'react';
import './payment.css';

const Payment = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, price) => {
    setCart([...cart, { name: productName, price: price }]);
  };

  const updateCartDisplay = () => {
    // Function to update cart display (similar to your original implementation)
  };

  const checkout = () => {
    // Implement checkout logic here (e.g., navigate to a checkout page)
    alert("Thank you for your purchase!");
    // Optional: Clear the cart after checkout
    setCart([]);
    updateCartDisplay();
  };

  return (
    <div>
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            Please make the payment, after that you can enjoy all the features and
            benefits.
          </span>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="Give p-3">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />
                <span>Name on card</span>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />
                    <i className="fa fa-credit-card" />
                    <span>Card Number</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span className="west">Expiry</span>
                    </div>
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Street Address</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>City</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>State/Province</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Zip code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span>Previous step</span>
              <button className="btn btn-checkout" onClick={checkout}>
                Pay
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Give Give-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">$549</h1> <span>.99</span>
              </div>
              <span>
                Enjoy all the features and perk after you complete the payment
              </span>
              <a href="#" className="yellow decoration">
                Know all the features
              </a>
              <div className="hightlight">
                <span>
                  100% Guaranteed support and update for the next 5 years.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
