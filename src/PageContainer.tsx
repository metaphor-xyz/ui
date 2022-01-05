import React from 'react';
import { View } from 'react-native';

import { createStyles } from './theme';

export interface ThreeColumnProps {
  children?: React.ReactNode | null;
}

export default function PageContainer({ children }: ThreeColumnProps) {
  const styles = useStyles();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 16,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    maxWidth: 1200,
  },
}));
