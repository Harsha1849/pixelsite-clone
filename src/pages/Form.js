import React from "react";
import "../components/Form.css";

const Form = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>

      <div className="container">
        <div className="card cart">
          <label className="title">Shipping Details</label>
          <div className="steps">
            <div className="step">
              <div>
                <p>221B Baker Street, W1U 8ED</p>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>

          <label className="title">Payment Method</label>
          <div className="steps">
            <div className="step">
              <p>Visa</p>
              <p>**** **** **** 4243</p>
            </div>
          </div>

          <label className="title">Promo Code</label>
          <div className="steps">
            <div className="step promo">
              <form className="form">
                <input className="input_field" placeholder="Enter a Promo Code" type="text" />
                <button>Apply</button>
              </form>
            </div>
          </div>

          <label className="title">Order Summary</label>
          <div className="steps">
            <div className="step">
              <div className="details">
                <span>Subtotal:</span>
                <span>$240.00</span>
                <span>Shipping:</span>
                <span>$10.00</span>
                <span>Tax:</span>
                <span>$30.40</span>
                <strong>Total:</strong>
                <strong>$280.40</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="card checkout">
          <div className="footer">
            <label className="price">$280.40</label>
            <button className="checkout-btn">Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
