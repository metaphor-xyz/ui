import React from 'react';
import { View, Image } from 'react-native';

import Typography, { TypographyType } from './Typography';
import { createStyles } from './theme';

export interface NameWithIconProps {
  name: string;
  icon: string;
  iconSize?: 'sm' | 'lg';
  nameTyporgraphyType?: TypographyType;
}

export default function NameWithIcon({ name, icon, iconSize, nameTyporgraphyType }: NameWithIconProps) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={[styles.icon, iconSize === 'lg' && styles.lgIcon]}>
        <Image style={{ height: '100%' }} source={{ uri: icon }} />
      </View>
      <Typography type={nameTyporgraphyType || 'info'} style={styles.name}>
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
  lgIcon: {
    height: 38,
  },
  name: {
    flex: 1,
    marginLeft: 14,
  },
}));
