import React from 'react';
import { View } from 'react-native';

import { createStyles } from './theme';

export interface ThreeColumnProps {
  children?: React.ReactNode | null;
}

export default function PaperContainer({ children }: ThreeColumnProps) {
  const styles = useStyles();

  return <View style={styles.container}>{children}</View>;
}

const useStyles = createStyles(_theme => ({
  container: {
    paddingRight: 68,
    paddingLeft: 68,
    paddingTop: 54,
    paddingBottom: 54,
    borderRadius: 25,
    boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.1)',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
