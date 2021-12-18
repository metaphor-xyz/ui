import { useFonts, Manrope_400Regular, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import React from 'react';
import { View } from 'react-native';
import { Provider, DefaultTheme } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#AEFF6F',
    accent: 'rgba(21, 33, 21, 0.1)',
    background: '#FFF',
    onSurface: '#DBD9D2',
  },
};

export interface ThemeProviderProps {
  themeOverride?: typeof DefaultTheme;
}

export default function ThemeProvider({ themeOverride, children }: React.PropsWithChildren<ThemeProviderProps>) {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
  });

  const combinedTheme = { ...theme, ...themeOverride };

  if (!fontsLoaded) {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Provider theme={combinedTheme}>{children}</Provider>;
}
