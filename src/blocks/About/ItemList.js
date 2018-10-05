import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import baseTheme from "styles/ThemeConfig";

const ItemList = styled(Grid)`
  background: ${baseTheme.palette.primary.dark};
  color: #fff;
`;

export default ItemList;
