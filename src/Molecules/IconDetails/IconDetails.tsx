import React from "react";
import "./IconDetails.css";
import { Typography5, Typography3 } from "../../Atoms/Typography/typography";
export default function IconDetails() {
  return (
    <div className="details_card">
      <div className="icon_details">
        <Typography5 value="Payment Method" />
        <Typography3 value="Visa credit ...8845" />
      </div>
      <div className="icon_details">
        <Typography5 value="Delivery fees" />
        <Typography3 value="0.001 BTC" />
      </div>
      <div className="icon_details">
        <Typography5 value="Deposit to" />
        <Typography3 value="Bitcoin wallet" />
      </div>
    </div>
  );
}
