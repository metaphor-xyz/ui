import React from 'react';
import { View } from 'react-native';

import { createStyles } from './theme';

export default function BaseContainer({ children }: React.PropsWithChildren<unknown>) {
  const styles = useStyles();

  return <View style={styles.container}>{children}</View>;
}

const useStyles = createStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
