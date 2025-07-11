import styled from "styled-components";
import type { ButtonProps } from "@/types/formComponents";
import { pxToRem } from "@/utils";

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${pxToRem(2)};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxToRem(20)};
  font-weight: 600;
  height: ${pxToRem(48)};
  padding: auto ${pxToRem(20)};
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;
  font-family: "Heebo", sans-serif;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primaryBackground};
    color: ${(props) => props.theme.buttons.primaryColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryBackgroundHover};
      color: ${(props) => props.theme.buttons.primaryColorHover};
    }
  }
  &.theme {
    background-color: ${(props) => props.theme.buttons.themeBackground};
    color: ${(props) => props.theme.buttons.themeColor};
    font-size: ${pxToRem(12)};
    height: ${pxToRem(32)};
    padding: 0 ${pxToRem(10)};
    min-width: ${pxToRem(80)};
    width: auto;

    &:hover {
      background-color: ${(props) => props.theme.buttons.themeBackgroundHover};
      color: ${(props) => props.theme.buttons.themeColorHover};
    }
  }
  &.round {
    background-color: transparent;
    width: ${pxToRem(28)};
    height: ${pxToRem(28)};
    padding: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {

  }
`;
