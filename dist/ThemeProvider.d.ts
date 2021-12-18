import React from "react";
import { DefaultTheme } from "react-native-paper";
export interface ThemeProviderProps {
    themeOverride?: typeof DefaultTheme;
}
export default function ThemeProvider({ themeOverride, children, }: React.PropsWithChildren<ThemeProviderProps>): JSX.Element;
