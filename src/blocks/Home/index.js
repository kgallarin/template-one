import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Video from "blocks/Home/Video";
import Overlay from "blocks/Home/Overlay";
import Container from "blocks/Home/Container";
import Item from "blocks/Home/Item";
import HeadingText from "blocks/Home/HeadingText";
import SubHeadingText from "blocks/Home/SubHeadingText";
import HighLighted from "blocks/Home/HighLighted";
import StyledButton from "elements/Buttons";

const Home = styled.section`
  height: 100%;
`;

const styles = theme => ({
  root: {
    height: "100%"
  },
  homeButton: {
    marginTop: theme.spacing.unit * 2
  }
});

Home.Video = Video;
Home.Overlay = Overlay;
Home.Container = Container;
Home.Item = Item;
Home.HeadingText = HeadingText;
Home.SubHeadingText = SubHeadingText;
Home.Link = StyledButton;
Home.HighLighted = HighLighted;

export default withStyles(styles)(Home);
