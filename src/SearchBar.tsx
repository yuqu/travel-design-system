import React, { FunctionComponent } from "react";
import { styled } from "./styled";
import { PlusIcon, SearchIcon } from "./icons";
import { IconColor } from "./icons/IconColor";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBarContainer = styled.div`
  width: 324px;
  height: 36px;
  padding: 6px 24px 6px 10px;
  border-radius: 6px;
  border: solid 1px #edeced;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 6px;
  &:focus-within {
    outline-offset: 0;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const SearchBarInput = styled.input`
  border: none;
  font-family: "Open Sans", monospace;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ::placeholder {
    color: #c1bec1;
  }
  &:focus, &:focus-visible {
    outline-offset: 0;
    outline: none;
  }
`;

export const SearchBar: FunctionComponent<SearchBarProps> = ({  placeholder }) => (
  <SearchBarContainer>
    <SearchIcon color={IconColor.GANDALF} />
    <SearchBarInput placeholder={placeholder} />
  </SearchBarContainer>
);
