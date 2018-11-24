import React from "react";
import Home from "blocks/Home";
// assets
import mLights from "assets/images/Modem-lights.jpg";
import mLightsm4 from "assets/video/Modem-lights.mp4";
import mLightswebm from "assets/video/Modem-lights.webm";

const HomeComponent = () => {
  return (
    <Home>
      <Home.Video poster={mLights} muted loop autoPlay>
        <source src={mLightsm4} type="video/mp4" />
        <source src={mLightswebm} type="video/webm" />
      </Home.Video>
      <Home.Overlay />
      <Home.Container
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        <Home.Item item xs={12}>
          <Home.HeadingText variant="display3" color="primary" align="center">
            digital <br /> creative <Home.HighLighted>agency</Home.HighLighted>
          </Home.HeadingText>
          <Home.SubHeadingText
            variant="caption"
            color="primary"
            align="center"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            quasi soluta. Perspiciatis sed aliquid,
          </Home.SubHeadingText>
          <Home.Container container alignItems="center" justify="center">
            <Home.Link
              modifiers={["homeBtn"]}
              color="primary"
              variant="contained"
            >
              START NOW HELLO
            </Home.Link>
          </Home.Container>
        </Home.Item>
      </Home.Container>
    </Home>
  );
};

export default HomeComponent;
