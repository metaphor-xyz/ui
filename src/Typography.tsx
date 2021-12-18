import React, { ReactChild } from 'react';
import { StyleSheet, Text as ReactNativeText, TextProps } from 'react-native';

import { createStyles } from './theme';
import useIsMoWeb from './useIsMoWeb';

export type TypographyType = 'h1' | 'h2' | 'h3' | 'body-bold' | 'body' | 'button' | 'info' | 'small-button';

type Props = {
  children?: ReactChild | ReactChild[];
  // eslint-disable-next-line
  style?: any;
  fontWeight?: 200 | 300 | 400 | 500 | 600;
  variant?: string;
  type?: TypographyType;
} & TextProps;

export default function Typography(props: Props) {
  const isMoWeb = useIsMoWeb();
  const styles = useStyles();

  return (
    <ReactNativeText
      {...props}
      style={[
        styles.basic,
        styles[props.fontWeight?.toString() || '400'],
        props.variant && styles[`${props.variant}${isMoWeb ? 'XS' : ''}`],
        props.style,
        props.type && styles[props.type],
      ]}
    >
      {props.children}
    </ReactNativeText>
  );
}

const useStyles = createStyles<StyleSheet.NamedStyles<Record<string, StyleSheet>>>(theme => ({
  '200': {
    fontFamily: 'Manrope_400Regular',
  },
  '300': {
    fontFamily: 'Manrope_400Regular',
  },
  '400': {
    fontSize: 16,
    fontFamily: 'Manrope_400Regular',
  },
  '500': {
    fontFamily: 'Manrope_400Regular',
  },
  '600': {
    fontFamily: 'Manrope_600SemiBold',
  },
  basic: {
    color: theme.colors.text,
  },
  header: {
    fontSize: 48,
  },
  headerXS: {
    fontSize: 40,
  },
  caption: {
    fontSize: 14,
    opacity: 0.8,
  },
  captionXS: {
    fontSize: 14,
    opacity: 0.8,
  },
  h1: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 64,
    lineHeight: 74,
    letterSpacing: -0.02,
  },
  h2: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 36,
    lineHeight: 49,
  },
  h3: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 20,
    lineHeight: 40,
  },
  'body-bold': {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 14,
    lineHeight: 20,
  },
  info: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 12,
    lineHeight: 22,
  },
  'small-button': {
    fontFamily: 'Manrope_700Bold',
    fontSize: 12,
    lineHeight: 22,
  },
}));
