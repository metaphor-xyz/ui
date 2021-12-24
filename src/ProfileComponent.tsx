import React from 'react';
import { View, Image } from 'react-native';

import Button from './Button';
import { createStyles } from './theme';

interface ProfileComponentProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

export default function ProfileComponent({ name, icon, onClick }: ProfileComponentProps) {
  const styles = useStyles();
  return (
    <Button
      color="unfilled-with-border"
      rounded
      onPress={onClick}
      title={name}
      postTextComponent={
        <View style={styles.itemIcon}>
          <Image style={{ height: '100%' }} source={{ uri: icon }} />
        </View>
      }
    />
  );
}

const useStyles = createStyles(theme => ({
  itemIcon: {
    width: 24,
    height: 24,
    marginLeft: 14,
  },
}));
