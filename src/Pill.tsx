import React, { ReactChild } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Typography from './Typography';
import { createStyles } from './theme';

export interface PillProps {
  iconComponent?: ReactChild | ReactChild[];
  text?: string;
  loading?: boolean;
}

export default function Pill({ iconComponent, loading, text }: PillProps) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {iconComponent}

      {loading ? <ActivityIndicator color="#fff" size="small" /> : <Typography type="info">{text}</Typography>}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    height: 20,
    padding: 4,
    paddingRight: 6,
    paddingLeft: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    flexDirection: 'row',
    backgroundColor: theme.colors.onSurface,
  },
}));
