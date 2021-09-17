import React from "react";
import { styled } from "./styled";

export const Tag = styled.button`
  padding: 6px 18px;
  border-radius: 6px;
  background-color: #edeced;
  border: none;
  font-family: "Open Sans", monospace;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.gandalf};

  &:hover {
    background-color: #d4d1d4;
  }

  &:focus {
    background-color: #419bf9;
    color: ${({ theme }) => theme.colors.white};
  }
`;
