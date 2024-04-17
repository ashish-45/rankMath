import React from "react";
import { FaDollarSign } from "react-icons/fa6";

const BitcoinCard = ({ name }) => {
  return (
    <div className="bitcoin-card">
      <div className="main-card" style={{ display: "inline-block" }}>
        <p className="dollar-styling">
          <FaDollarSign />
        </p>
        <h3>Buy BTC</h3>
      </div>
      <div className="main-card" style={{ display: "inline-block" }}>
        <p className="dollar-styling-two">
          <FaDollarSign />
        </p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default BitcoinCard;
