import baseStyled, { ThemedStyledInterface, useTheme as baseUseTheme } from "styled-components";
import { Theme } from "./theme";

export const styled: ThemedStyledInterface<Theme> = baseStyled;
export const useTheme: () => Theme = baseUseTheme as () => Theme;
