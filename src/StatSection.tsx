import Davatar from '@davatar/react';
import React from 'react';
import { View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

export interface StatSectionProps {
  title: string;
  bigText?: string;
  avatarAddresses?: string[];
}

export default function StatSection({ title, bigText, avatarAddresses }: StatSectionProps) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Typography type="info" style={styles.title}>
        {title}
      </Typography>
      {bigText && (
        <Typography type="h1" style={styles.bigText}>
          {bigText}
        </Typography>
      )}
      {avatarAddresses && avatarAddresses.length > 0 && (
        <View style={styles.avatarsContainer}>
          {avatarAddresses.map(avatarAddress => (
            <View key={avatarAddress} style={styles.avatarContainer}>
              <Davatar size={54} address={avatarAddress || '0x0000000000000000000000000000000000000000'} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    alignItems: 'center',
    width: 200,
  },
  title: {
    color: theme.colors.disabled,
  },
  bigText: {
    marginTop: 32,
  },
  avatarsContainer: {
    marginTop: 32,
    paddingTop: 8,
    flexDirection: 'row',
  },
  avatarContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
}));
