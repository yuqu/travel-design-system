import React from "react";
import { styled } from "./styled";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 56px;
  background-color: ${({
    theme,
    variant
  }) => {
    switch (variant) {
      case "secondary":
        return "rgba(193, 190, 193, 0.75)";
      case "primary":
      default:
        return theme.colors.pink;
    }
  }};
  border-radius: 6px;
  border: none;
  font-family: "Open Sans", monospace;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: ${({
    theme,
    variant
  }) => {
    switch (variant) {
      case "secondary":
        return theme.colors.teflon;
      case "primary":
      default:
        return "#fff";
    }
  }};
  
  &:active {
    padding: 6px 52px;
    border: solid 4px rgba(85, 77, 86, 0.25);
  }
  
  &:disabled {
    background-color: ${({
      variant
    }) => {
      switch (variant) {
        case "secondary":
          return "rgba(193, 190, 193, 0.75)";
        case "primary":
        default:
          return "#e7bcc6";
      }
    }};
  }
`
