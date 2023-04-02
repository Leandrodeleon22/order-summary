import React from "react";
import Wrappers from "../assets/Wrappers/OrderSummary";
import hero from "../assets/images/illustration-hero.svg";
import musicIcon from "../assets/images/icon-music.svg";

const OrderSummary = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="image">
          <img src={hero} alt="image" />
        </div>
        <div className="order-summary">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcast on
            any device anyhwere you like!
          </p>

          <div className="annual-plan">
            <img src={musicIcon} alt="icon" />
            <div className="rate">
              <h3>Annual Plan</h3>
              <span>$59.99/year</span>
            </div>

            <a href="" className="change">
              Change
            </a>
          </div>

          <button className="btn-proceed ">Proceed to Payment</button>
          <button className="btn-cancel">Cancel Order</button>
        </div>
      </div>
    </Wrappers>
  );
};

export default OrderSummary;
