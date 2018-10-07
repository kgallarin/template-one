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
  background: none;
`;

Home.Video = Video;
Home.Overlay = Overlay;
Home.Container = Container;
Home.Item = Item;
Home.HeadingText = HeadingText;
Home.SubHeadingText = SubHeadingText;
Home.Link = StyledButton;
Home.HighLighted = HighLighted;

export default Home;
