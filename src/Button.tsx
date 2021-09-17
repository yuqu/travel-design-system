import React from "react";
import { styled } from "./styled";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = styled.button<ButtonProps>`
  padding: ${({
    variant
  }) => {
    switch (variant) {
      case "tertiary":
        return "8px 54px";
      case "secondary":
      case "primary":
      default:
        return "10px 56px";
    }
  }};
  background-color: ${({
    theme,
    variant
  }) => {
    switch (variant) {
      case "tertiary":
        return "transparent";
      case "secondary":
        return "rgba(193, 190, 193, 0.75)";
      case "primary":
      default:
        return theme.colors.pink;
    }
  }};
  border-radius: 6px;
  border: ${({
   theme,
   variant
  }) => {
    switch (variant) {
      case "tertiary":
        return `solid 2px ${theme.colors.pink}`;
      case "secondary":
      case "primary":
      default:
        return "none";
    }
  }};
  font-family: "Open Sans", monospace;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: ${({
    theme,
    variant
  }) => {
    switch (variant) {
      case "tertiary":
        return theme.colors.pink;
      case "secondary":
        return theme.colors.teflon;
      case "primary":
      default:
        return "#fff";
    }
  }};
  
  &:active {
    padding: 6px 52px;
    border: ${({
     theme,
     variant
    }) => {
      switch (variant) {
        case "tertiary":
          return `solid 4px ${theme.colors.pink}`;
        case "secondary":
        case "primary":
        default:
          return "solid 4px rgba(85, 77, 86, 0.25)";
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${({
      variant
    }) => {
      switch (variant) {
        case "tertiary":
          return "transparent";
        case "secondary":
          return "rgba(193, 190, 193, 0.75)";
        case "primary":
        default:
          return "#dd748d";
      }
    }};
  }
`
