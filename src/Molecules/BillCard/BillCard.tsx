import React from "react";
import {
  Typography7,
  Typography8,
  Typography4,
} from "../../Atoms/Typography/typography";
import "./BillCard.css";

interface Prop1 {
  value: any;
}
export default function BillCard(props: Prop1) {
  return (
    <>
      <div className="bill_main1">
        <div className="total_bill">
          <Typography7 value="0.023451BTC" />
          <div className="vl_line" />
          <Typography7 value={"$" + props.value + ".00"} />
        </div>
        <div className="total_bill">
          <Typography7 value="transaction fee" />
          <div className="vl_line2" />
          <Typography7 value={"$1,000.00"} />
        </div>
        <div className="total_bill1">
          <Typography4 value="Total" />
          <div className="vl_line1" />
          <Typography4 value={"$" + (props.value + 1000 + ".00")} />
        </div>
      </div>
    </>
  );
}
