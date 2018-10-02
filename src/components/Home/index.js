import React, { Component } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// asset for video
import trafficDisco from "assets/images/Traffic_disco.jpg";
import trafficDiscom4 from "assets/video/Traffic_disco.mp4";
import trafficDiscowebm from "assets/video/Traffic_disco.webm";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.65);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;
const VideoHero = styled.video`
  background: #000;
  color: #fff;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: auto;
  width: auto;
  z-index: -1;
`;

const HomeContentWrapper = styled.section`
  background: none;
  overflow: hidden;
  height: 100%;
`;

const HomeContentInner = styled(Grid)`
  color: red;
  height: 100%;
`;

const styles = {
  root: {
    height: "100%"
  }
};
const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <VideoHero poster={trafficDisco} muted loop autoPlay>
        <source src={trafficDiscom4} type="video/mp4" />
        <source src={trafficDiscowebm} type="video/webm" />
      </VideoHero>
      <Overlay />
      <HomeContentWrapper>
        <HomeContentInner
          container
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="display2" color="primary" align="center">
              TAE NG KABAYO
            </Typography>
            <Typography variant="display5" color="primary" align="center">
              malapit na malapit na malapit na malapit ng ilabas
            </Typography>
          </Grid>
        </HomeContentInner>
      </HomeContentWrapper>
    </div>
  );
};

export default withStyles(styles)(Home);
