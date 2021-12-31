import React, { ReactChild, useState } from 'react';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Typography from './Typography';
import { createStyles } from './theme';

type ButtonColor = 'primary' | 'secondary' | 'unfilled';

export interface ButtonProps {
  title?: string;
  titleComponent?: ReactChild | ReactChild[];
  onPress?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  loading?: boolean;
  size?: string;
  color?: ButtonColor;
  fullWidth?: boolean;
  rounded?: boolean;
  preTextComponent?: ReactChild | ReactChild[];
  postTextComponent?: ReactChild | ReactChild[];
}

function isPromise<T>(obj: unknown): obj is Promise<T> {
  return !!obj && typeof obj === 'object' && 'then' in obj!;
}

export default function Button({
  preTextComponent,
  postTextComponent,
  title,
  titleComponent,
  onPress,
  disabled,
  size,
  fullWidth,
  rounded,
  color,
  loading,
}: ButtonProps) {
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

  const colorClass: keyof typeof styles = color ? `color-${color}` : 'color-primary';

  if (isLoading) {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          size === 'sm' && styles.containerSM,
          styles.loadingButton,
          styles.disabled,
          fullWidth && styles.fullWidth,
          rounded && styles.rounded,
          styles[colorClass],
        ]}
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
        width: fullWidth ? '100%' : undefined,
        borderRadius: rounded ? '100px' : undefined,
        maxWidth: '330px',
        padding: 0,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      <TouchableOpacity
        style={[
          styles.container,
          size === 'sm' && styles.containerSM,
          mouseEntered && styles.hover,
          disabled && styles.disabled,
          fullWidth && styles.fullWidth,
          rounded && styles.rounded,
          styles[colorClass],
        ]}
        onPress={press}
        disabled={disabled}
        activeOpacity={0.8}
      >
        {preTextComponent}
        {titleComponent ? (
          <>{titleComponent}</>
        ) : (
          <Typography type={size === 'sm' ? 'small-button' : 'button'}>{title}</Typography>
        )}
        {postTextComponent}
      </TouchableOpacity>
    </button>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    maxWidth: 330,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flexDirection: 'row',
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
  fullWidth: {
    width: '100%',
  },
  rounded: {
    borderRadius: 100,
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
  'color-primary': {
    backgroundColor: theme.colors.primary,
  },
  'color-secondary': {
    backgroundColor: theme.colors.accent,
  },
  'color-unfilled': {
    backgroundColor: theme.colors.background,
    border: `2px solid ${theme.colors.onSurface}`,
  },
}));
