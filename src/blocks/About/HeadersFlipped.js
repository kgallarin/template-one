import styled from "styled-components";
import baseTheme from "styles/ThemeConfig";

const TextFlipped = styled.span`
  && {
    font-family: "Raleway" sans-serif;
    position: relative;
    word-spacing: 9px;
    top: 60px;
    transform: rotate(-90deg);
    left: -53px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: ${baseTheme.palette.secondary.main};
  }
`;

export default TextFlipped;
