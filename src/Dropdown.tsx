import React, { FunctionComponent } from "react";
import { styled } from "./styled";
import { ArrowDownIcon, MinusIcon } from "./icons";

const DropdownContainer = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 44px;  
  border-radius: 8px;
  background-color: rgba(254, 104, 143, 0.1);
  display: grid;
  grid-template-columns: 28px auto 28px;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  font-family: "Open Sans", monospace;
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fe688f;

  & :first-child {
    grid-column-start: 2;
  }
`

export const Dropdown: FunctionComponent = ({ children }) => (
  <DropdownContainer>
    <span>
      {children}
    </span>
    <ArrowDownIcon />
  </DropdownContainer>
)
