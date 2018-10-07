import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import baseTheme from "styles/ThemeConfig";
import styles from "@material-ui/core/styles";

const Inner = styled(Grid)`
  && {
    max-width: 960px;
    margin: 0 auto;
    ${[baseTheme.breakpoints.down("sm")]}: {
      padding: 0 50px;
    };
  }
`;

export default Inner;
