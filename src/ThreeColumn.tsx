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
    <View style={styles.container}>
      <View style={styles.leftColumn}>{leftComponent}</View>
      <View style={styles.middleColumn}>{middleComponent}</View>
      <View style={styles.rightColumn}>{rightComponent}</View>
    </View>
  );
}

const useStyles = createStyles(_theme => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 38,
  },
  leftColumn: {
    flex: 1,
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
