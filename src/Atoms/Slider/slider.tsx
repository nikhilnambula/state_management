import * as React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export const Slider1 = ({ ...props }) => {
  // const [value, setValue] = React.useState<number>(3000);

  // const handleChange = (event: Event, value: number | number[]) => {
  //   setValue(value as number);
  // };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ height: "88px", padding: "26px 18px 10px 26px" }}>
          <Slider
            sx={{
              color: "#B2B2B9",
            }}
            value={props.value}
            defaultValue={3000}
            step={1}
            track={false}
            min={1000}
            max={34000}
            // valueLabelDisplay="auto"
            onChange={props.onChange}
            orientation="vertical"
          />
        </Box>
      </div>
    </>
  );
};
