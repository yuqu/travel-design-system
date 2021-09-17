import React from "react";
import { styled } from "./styled";

interface TagProps {
  selected?: boolean;
}

export const Tag = styled.button<TagProps>`
  padding: 6px 18px;
  border-radius: 6px;
  background-color: ${({ selected }) => (
    selected
      ? "#419bf9"
      : "#edeced"
  )};
  border: none;
  font-family: "Open Sans", monospace;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme, selected }) => (
    selected
      ? theme.colors.white
      : theme.colors.gandalf
  )};
  
  &:hover {
    background-color: #d4d1d4;
  }
`;
