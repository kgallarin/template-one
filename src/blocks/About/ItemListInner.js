import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const ItemListInner = styled.div`
  ${"" /* padding: 50px; */};
`;

export default withStyles(({ palette, spacing }) => ({
  root: {
    background: "#000 !important"
  }
}))(ItemListInner);
