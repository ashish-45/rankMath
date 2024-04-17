import React from "react";
import bitcoin from "../assets/images/bitcoin.png";
import { BsChevronCompactDown } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="main-card">
        <div className="topbar">
          <div className="icon-styling">
            <img src={bitcoin} alt="not found" /> <span>Bitcoin</span>
          </div>
          <div>
            <p>BTC</p>
          </div>
        </div>
        <div className="bitcoin-value">
          <p>3.529020 BTC</p>
        </div>
        <div className="bitcoin-usd-Value">
          <div className="usd-value">
            <p>$19.153 USD</p>
          </div>
          <div className="negative-value">
            <p>-2.32 %</p>
          </div>
        </div>
        <div className="dropdown-icon">
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
};

export default Card;
