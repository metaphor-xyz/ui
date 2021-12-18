import { StyleSheet } from 'react-native';
import { useTheme, DefaultTheme } from 'react-native-paper';

type Theme = typeof DefaultTheme;
type StylesCallback<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
> = (_theme: Theme) => T | StyleSheet.NamedStyles<T>;

export const createStyles = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  styles: StylesCallback<T>
): (() => T | StyleSheet.NamedStyles<T>) => {
  return () => {
    const theme = useTheme();

    return styles(theme);
  };
};
