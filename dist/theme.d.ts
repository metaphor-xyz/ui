import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";
declare type Theme = typeof DefaultTheme;
declare type StylesCallback<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>> = (_theme: Theme) => T | StyleSheet.NamedStyles<T>;
export declare const createStyles: <T extends StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<T>>(styles: StylesCallback<T>) => () => T | StyleSheet.NamedStyles<T>;
export {};
