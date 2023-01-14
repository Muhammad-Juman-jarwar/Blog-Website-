import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import classes from "./SmallSlider.module.css";

const SmallSlider = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const theme = useTheme();

  return ( 
    <React.Fragment>
      <div className={classes.smallsliderimg}>
        <Box sx={{ maxWidth: 700, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            enableMouseEvents
          >
            {images.map((step) => (
              <div className={classes.sliderimg} key={Math.random()}>
                <Box
                  component='img'
                  sx={{
                    height: 200,
                    display: "block",
                    maxWidth: 800,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt="Landscapes"
                />
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </div>
    </React.Fragment>
  );
};
export default SmallSlider;
