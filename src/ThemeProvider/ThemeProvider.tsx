import React, { FunctionComponent } from "react";
import { ThemeProvider as BaseThemeProvider }from "styled-components";

import { fonts } from "./fonts";
import { colors } from "./colors";

import "@fontsource/open-sans/latin.css";


export const ThemeProvider: FunctionComponent = ({ children }) => (
    <BaseThemeProvider theme={{
        colors,
        fonts
    }}>
        {children}
    </BaseThemeProvider>
)
