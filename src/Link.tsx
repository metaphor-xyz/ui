import React, { useState } from 'react';
import { useCallback } from 'react';
import { Alert, TouchableOpacity, Linking } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Typography from './Typography';
import { createStyles } from './theme';

export interface ButtonProps {
  text?: string;
  url?: string;
  onPress?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  loading?: boolean;
}

function isPromise<T>(obj: unknown): obj is Promise<T> {
  return !!obj && typeof obj === 'object' && 'then' in obj!;
}

export default function Link({ text, url, onPress, disabled, loading }: ButtonProps) {
  const styles = useStyles();
  const [asyncLoading, setAsyncLoading] = useState(false);

  const press = useCallback(async () => {
    if (onPress) {
      const result = onPress();
      if (isPromise(result)) {
        try {
          setAsyncLoading(true);
          await result;
        } finally {
          setAsyncLoading(false);
        }
      }
    } else if (url) {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`This is an unsupported URL: ${url}`);
      }
    }
  }, [onPress, url]);

  const isLoading = loading || asyncLoading;

  if (isLoading) {
    return (
      <TouchableOpacity style={[styles.container, styles.disabled]} disabled>
        <ActivityIndicator color="#fff" size="small" />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={press}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Typography type="button">{text}</Typography>
    </TouchableOpacity>
  );
}

const useStyles = createStyles(_theme => ({
  container: {
    // cursor: "pointer",
  },
  disabled: {
    opacity: 0.6,
  },
}));
