import React from "react";
import Home from "blocks/Home";
// assets
import trafficDisco from "assets/images/Traffic_disco.jpg";
import trafficDiscom4 from "assets/video/Traffic_disco.mp4";
import trafficDiscowebm from "assets/video/Traffic_disco.webm";

const HomeComponent = () => {
  return (
    <Home>
      <Home.Video poster={trafficDisco} muted loop autoPlay>
        <source src={trafficDiscom4} type="video/mp4" />
        <source src={trafficDiscowebm} type="video/webm" />
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
              START NOW
            </Home.Link>
          </Home.Container>
        </Home.Item>
      </Home.Container>
    </Home>
  );
};

export default HomeComponent;
