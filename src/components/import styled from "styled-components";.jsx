import styled from "styled-components";
import theme from "./theme";

const Text = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${theme.color.textSecondary};
  font-family: ${({ thin, light, medium, semiBold, bold, extraBold }) => {
    if (thin) return theme.font.primaryThin;
    if (light) return theme.font.primaryLight;
    if (medium) return theme.font.primaryMedium;
    if (semiBold) return theme.font.primarySemiBold;
    if (bold) return theme.font.primaryBold;
    if (extraBold) return theme.font.primaryExtraBold;
    return theme.font.primary;
  }};
  ${({ large, h1, h2, h3, h4, h5, s1, s2, s3, small, footnote, overline }) => {
    if (large) {
      return `
        font-size: 34px;
        line-height: 38px;
      `;
    } else if (h1) {
      return `
        font-size: 28px;
        line-height: 30px;
      `;
    } else if (h2) {
      return `
        font-size: 22px;
        line-height: 26px;
      `;
    } else if (h3) {
      return `
        font-size: 20px;
        line-height: 24px;
      `;
    } else if (h4) {
      return `
        font-size: 18px;
        line-height: 20px;
      `;
    } else if (h5) {
      return `
        font-size: 16px;
        line-height: 20px;
        color: ${theme.color.textSecondary};
        font-family: ${theme.font.primaryMedium};
      `;
    } else if (s1) {
      return `
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: ${theme.color.textSecondary};
        font-family: ${theme.font.primarySemiBold};
      `;
    } else if (s2) {
      return `
        font-size: 13px;
        line-height: 16px;
        font-weight: 600;
        color: ${theme.color.textSecondary};
        font-family: ${theme.font.primarySemiBold};
      `;
    } else if (s3) {
      return `
        font-size: 12px;
        line-height: 16px;
        font-weight: 600;
        color: ${theme.color.textSecondary};
        font-family: ${theme.font.primarySemiBold};
      `;
    } else if (small) {
      return `
        font-size: 11px;
        line-height: 15px;
      `;
    } else if (footnote) {
      return `
        font-size: 12px;
        line-height: 16px;
        color: ${theme.color.textNeutral};
      `;
    } else if (overline) {
      return `
        font-size: 11px;
        line-height: 16px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: ${theme.font.primarySemiBold};
      `;
    } else {
      return `
        font-size: 14px;
        line-height: 20px;
      `;
    }
  }}
  ${({ color }) => {
    if (!color) return;
    if (color === "primary") {
      return `color: ${theme.color.textPrimary}`;
    } else if (color === "secondary") {
      return `color: ${theme.color.textSecondary}`;
    } else if (color === "third") {
      return `color: ${theme.color.textThird}`;
    } else if (color === "neutral") {
      return `color: ${theme.color.textNeutral}`;
    } else if (color === "highlight") {
      return `color: ${theme.color.textHighlight}`;
    } else if (color === "danger") {
      return `color: ${theme.color.textDanger}`;
    } else if (color === "disabled") {
      return `color: ${theme.color.textDisabled}`;
    } else if (color) {
      return `color: ${color}`;
    }
  }};
  ${({ thin, light, medium, semiBold, bold, extraBold }) => {
    if (thin) return "font-weight: 100";
    if (light) return "font-weight: 300";
    if (medium) return "font-weight: 500";
    if (semiBold) return "font-weight: 600";
    if (bold) return "font-weight: 700";
    if (extraBold) return "font-weight: 900";
  }};
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ center }) => center && "text-align: center;"}
  ${({ italic }) => italic && "font-style: italic;"}
  ${({ underline }) => underline && "text-decoration: underline;"}
  ${({ uppercase }) => uppercase && "text-transform: uppercase;"}
  ${({ right }) =>
    right &&
    `
    align-self: flex-end;
    text-align: right;
  `}
  ${({ left }) =>
    left &&
    `
    align-self: flex-start;
    text-align: left;
  `}
`;

export default Text;
