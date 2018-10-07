import styled from "styled-components";
import Inner from "blocks/About/Inner";
import ItemList from "blocks/About/ItemList";
import ItemListInner from "blocks/About/ItemListInner";
import TextContent from "blocks/About/TextContent";
import Image from "elements/Image";

const About = styled.section`
  padding: 40px 0;
`;

About.Inner = Inner;
About.ItemList = ItemList;
About.ItemListInner = ItemListInner;
About.TextContent = TextContent;
About.Image = Image;

export default About;
