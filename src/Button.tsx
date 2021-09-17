import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 56px;
  background-color: ${({theme}) => theme.colors.pink};
  ${({theme}) => theme.colors.pink};
  border-radius: 6px;
  border: none;
  font-family: "Open Sans", monospace;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  
  &:active {
    padding: 6px 52px;
    border: solid 4px rgba(85, 77, 86, 0.25);
  }
  
  &:disabled {
    background-color: #e7bcc6;
  }
`
