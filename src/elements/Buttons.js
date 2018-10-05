import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import baseTheme from "styles/ThemeConfig";

const MODIFIER_CONFIG = {
  disabled: () => `
    `,
  success: () => `
  `,

  warning: () => `
  `,

  large: () => `
  `,
  uppercase: () => `
    && {
      text-transform : uppercase;
    }
  `,
  homeBtn: () => `
    && {
      background: ${baseTheme.palette.secondary.main};
      margin:${baseTheme.spacing.unit * 3}px 0;
      transition: .5s all ease;
      border: 1px solid transparent;

      &:hover {
        color: #fff;
        border: 1px solid #fff;
      }
    }
  `
};

const StyledButton = styled(Button)`
  && {
    ${"" /* define button styles */};
  }
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default StyledButton;
