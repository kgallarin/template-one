import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import Inner from "blocks/About/Inner";
import ItemList from "blocks/About/ItemList";
import ItemListInner from "blocks/About/ItemListInner";
import TextContent from "blocks/About/TextContent";

const About = styled.section``;

const styles = {
  root: "100%"
};

About.Inner = Inner;
About.ItemList = ItemList;
About.ItemListInner = ItemListInner;
About.TextContent = TextContent;

export default withStyles(styles)(About);
