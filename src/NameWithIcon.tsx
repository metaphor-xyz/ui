import React from 'react';
import { View, Image } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

export interface NameWithIconProps {
  name: string;
  icon: string;
}

export default function NameWithIcon({ name, icon }: NameWithIconProps) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image style={{ height: '100%' }} source={{ uri: icon }} />
      </View>
      <Typography type="info" style={styles.name}>
        {name}
      </Typography>
    </View>
  );
}

const useStyles = createStyles(_theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  name: {
    flex: 1,
    marginLeft: 12,
  },
}));
