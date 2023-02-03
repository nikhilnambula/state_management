import React from "react";
import { Slider1 } from "../Atoms/Slider/slider";
import Stack from "@mui/material/Stack";
import {
  Typography1,
  Typography2,
  Typography3,
  Typography4,
  Typography9,
} from "../Atoms/Typography/typography";
import "./card.css";
import BuyMax from "../Atoms/Buttons/Button";
import PurchaseCard1 from "../Molecules/PurchaseCard/purchasecard1";
import IconCard from "../Molecules/Iconcard/IconCard";
import IconDetails from "../Molecules/IconDetails/IconDetails";
import BillCard from "../Molecules/BillCard/BillCard";
import BuyNow from "../Atoms/BuyNow/BuyNow";

interface Props {}

export const Card: React.FC<Props> = () => {
  const [value, setValue] = React.useState<number>(9000);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number);
  };

  return (
    <>
      <div className="color">
        <div className="Main_card">
          <Typography3 value="Amount details"></Typography3>
          <div className="card1">
            <Typography1 value={value} />
            <BuyMax></BuyMax>
          </div>
          <Stack direction="row" spacing={1}>
            <Slider1 value={value} onChange={handleChange} />
            <Typography9 value="1BTC=$3,406,069.54" />
          </Stack>

          <div className="card2">
            <Typography2 value="0.023451" />
            <Typography9 value="BTC" />
          </div>
        </div>
        <br></br>
        <div className="bill_card">
          <div className="purchase_card1">
            <PurchaseCard1></PurchaseCard1>
          </div>
          <div className="h_line"></div>
          <div className="icon_card_main">
            <div className="icon_card1">
              <IconCard />
              <IconDetails />
            </div>
          </div>
          <div className="h_line"></div>
          <div className="main_frame">
            <div className="bill_main1">
              <div className="total_bill">
                <BillCard value={value} />
              </div>
            </div>
            <BuyNow></BuyNow>
          </div>
        </div>
      </div>
    </>
  );
};
