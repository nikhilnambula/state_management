import React from "react";
import Typography from "@mui/material/Typography";
// import { lineHeight } from "@mui/system";

interface Props1 {
  value: any;
}
interface Props2 {
  value: string;
}
export const Typography1 = (props: Props1) => {
  return (
    <Typography
      sx={{
        width: "118px",
        height: "48px",
        fontFamily: "Graphik",
        fontSize: "23px",
        fontWeight: "600",
      }}
    >
      ${props.value}.00
    </Typography>
  );
};
export const Typography2 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "118px",
        height: "48px",
        fontStyle: "normal",
        fontFamily: "Graphik",
        fontSize: "22px",
        fontWeight: "600",
      }}
    >
      {props.value}
    </Typography>
  );
};
export const Typography3 = (props: Props2) => {
  return (
    <Typography
      sx={{
        fontFamily: "Graphik",
        fontStyle: "normal",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "22px",
        letter: "1%",
      }}
    >
      {props.value}
    </Typography>
  );
};
export const Typography4 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "38px",
        height: "22px",
        fontFamily: "Graphik",
        fontSize: "16px",
        fontStyle: "normal",
        // color: "#7D7D89",
        fontWeight: "500",
        lineHeight: "22px",
        letter: "1%",
        padding: "99px 0px",
      }}
    >
      {props.value}
    </Typography>
  );
};
export const Typography5 = (props: Props2) => {
  return (
    <Typography
      sx={{
        fontFamily: "Graphik",
        fontSize: "14px",
        color: "#7D7D89",
        fontWeight: "500",
        lineHeight: "16px",
        letter: "1%",
        order: "0",
      }}
    >
      {props.value}
    </Typography>
  );
};

export const Typography6 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "171px",
        height: "34px",
        fontStyle: "normal",
        fontFamily: "Graphik",
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "34px",
        color: "#343446",
      }}
    >
      {props.value}
    </Typography>
  );
};

export const Typography7 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "86px",
        height: "14px",
        fontStyle: "normal",
        fontFamily: "Graphik",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "14px",
        color: "#343446",
      }}
    >
      {props.value}
    </Typography>
  );
};

export const Typography8 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "86px",
        height: "14px",
        fontStyle: "normal",
        fontFamily: "Graphik",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "14px",
        color: "#343446",
      }}
    >
      $ {props.value}
    </Typography>
  );
};
export const Typography9 = (props: Props2) => {
  return (
    <Typography
      sx={{
        width: "38px",
        height: "22px",
        fontFamily: "Graphik",
        fontSize: "16px",
        fontStyle: "normal",
        color: "#7D7D89",
        fontWeight: "500",
        lineHeight: "22px",
        letter: "1%",
        padding: "99px 0px",
      }}
    >
      {props.value}
    </Typography>
  );
};
