import styled from "styled-components";
import Inner from "blocks/About/Inner";
import ItemList from "blocks/About/ItemList";
import ItemListInner from "blocks/About/ItemListInner";
import Headers from "blocks/About/Headers";
import HeadersFlipped from "blocks/About/HeadersFlipped";
import TextContent from "blocks/About/TextContent";
import Image from "elements/Image";

const About = styled.section`
  padding: 40px 0;
`;

About.Inner = Inner;
About.ItemList = ItemList;
About.ItemListInner = ItemListInner;
About.Headers = Headers;
About.Image = Image;
About.HeadersFlipped = HeadersFlipped;
About.TextContent = TextContent;

export default About;
