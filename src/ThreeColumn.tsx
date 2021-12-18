import React from 'react';
import { View } from 'react-native';

import { createStyles } from './theme';

export interface ThreeColumnProps {
  leftComponent?: React.ReactNode | null;
  middleComponent?: React.ReactNode | null;
  rightComponent?: React.ReactNode | null;
}

export default function ThreeColumn({ leftComponent, middleComponent, rightComponent }: ThreeColumnProps) {
  const styles = useStyles();

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>{leftComponent}</View>
        <View style={styles.middleColumn}>{middleComponent}</View>
        <View style={styles.rightColumn}>{rightComponent}</View>
      </View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  superContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
    paddingTop: 54,
    paddingBottom: 54,
    paddingLeft: 4,
    paddingRight: 4,
    maxWidth: 1200,
  },
  leftColumn: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 40,
  },
  middleColumn: {
    flex: 3,
    paddingLeft: 40,
    paddingRight: 12,
  },
  rightColumn: {
    flex: 1.5,
    paddingLeft: 12,
  },
}));
