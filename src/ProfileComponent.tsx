import Davatar from '@davatar/react';
import React from 'react';
import { View } from 'react-native';

import Button from './Button';
import { createStyles } from './theme';

interface ProfileComponentProps {
  name: string;
  address: string;
  onClick?: () => void;
}

export default function ProfileComponent({ name, address, onClick }: ProfileComponentProps) {
  const styles = useStyles();
  return (
    <Button
      color="unfilled"
      rounded
      onPress={onClick}
      title={name}
      postTextComponent={
        <View style={styles.davatarContainer}>
          <Davatar size={28} address={address || '0x0000000000000000000000000000000000000000'} />
        </View>
      }
    />
  );
}

const useStyles = createStyles(_theme => ({
  davatarContainer: {
    marginLeft: 14,
  },
}));
