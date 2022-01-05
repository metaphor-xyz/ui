// import discordIcon from "./assets/discordIcon.png";
import React, { useState } from 'react';
import { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { createStyles } from './theme';

export interface DiscordButtonProps {
  onPress?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  loading?: boolean;
  size?: string;
  imageSrc?: string;
}

function isPromise<T>(obj: unknown): obj is Promise<T> {
  return !!obj && typeof obj === 'object' && 'then' in obj!;
}

export default function DiscordButton({ onPress, disabled, size, loading, imageSrc }: DiscordButtonProps) {
  const styles = useStyles();
  const [mouseEntered, setMouseEntered] = useState(false);
  const [asyncLoading, setAsyncLoading] = useState(false);

  const onMouseEnter = useCallback(() => {
    setMouseEntered(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setMouseEntered(false);
  }, []);

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
    }
  }, [onPress]);

  const isLoading = loading || asyncLoading;

  if (isLoading) {
    return (
      <TouchableOpacity
        style={[styles.container, size === 'sm' && styles.containerSM, styles.loadingButton, styles.disabled]}
        disabled
      >
        <ActivityIndicator color="#fff" size="small" />
      </TouchableOpacity>
    );
  }

  return (
    <button
      style={{
        border: 'none',
        cursor: disabled ? 'default' : 'pointer',
        background: 'none',
        padding: 0,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      aria-label="Join Discord"
    >
      <TouchableOpacity
        style={[
          styles.container,
          size === 'sm' && styles.containerSM,
          mouseEntered && styles.hover,
          disabled && styles.disabled,
        ]}
        onPress={press}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Image style={{ height: '100%' }} source={{ uri: imageSrc }} />
      </TouchableOpacity>
    </button>
  );
}

const useStyles = createStyles(_theme => ({
  container: {
    height: 32,
    width: 32,
  },
  containerSM: {
    height: 34,
  },
  disabled: {
    opacity: 0.6,
  },
  hover: {
    opacity: 0.85,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 24,
  },
  textSM: {
    fontSize: 13,
  },
  loadingButton: {
    minWidth: 100,
  },
}));
