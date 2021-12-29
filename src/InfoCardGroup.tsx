import React, { ReactChild, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Image, TouchableOpacity, View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

export interface InfoCardProps {
  icon: string;
  title?: string;
  titleComponent?: ReactChild | ReactChild[];
  description?: string;
  descriptionComponent?: ReactChild | ReactChild[];
  postTextComponent?: ReactChild | ReactChild[];
  onPress?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  loading?: boolean;
}

function isPromise<T>(obj: unknown): obj is Promise<T> {
  return !!obj && typeof obj === 'object' && 'then' in obj;
}

export function InfoCard(_props: InfoCardProps) {
  return null;
}

// eslint-disable-next-line
type AnimationConfig = any;

interface InfoCardWrapperProps {
  infoCard: React.ReactElement<InfoCardProps>;
}

function InfoCardWrapper({ infoCard }: InfoCardWrapperProps) {
  const {
    icon,
    title,
    titleComponent,
    description,
    descriptionComponent,
    postTextComponent,
    onPress,
    disabled,
    loading,
  } = infoCard.props;

  const styles = useStyles();
  const scalingAnim = useRef(new Animated.Value(1)).current;
  const [mouseEntered, setMouseEntered] = useState(false);
  const [asyncLoading, setAsyncLoading] = useState(false);

  const onMouseEnter = useCallback(() => {
    setMouseEntered(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setMouseEntered(false);
  }, []);

  useEffect(() => {
    if (!disabled) {
      if (mouseEntered) {
        // Scale component when mouse enters
        Animated.timing(scalingAnim, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        } as AnimationConfig).start();
      } else {
        // Reset component to 100% scale when mouse leaves
        Animated.timing(scalingAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        } as AnimationConfig).start();
      }
    }
  }, [disabled, scalingAnim, mouseEntered]);

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
      <TouchableOpacity style={[styles.itemContainer, styles.disabled]} disabled>
        <ActivityIndicator color="#fff" size="small" />
      </TouchableOpacity>
    );
  }

  const innerComponent = (
    <Animated.View style={[styles.itemContainer, disabled && styles.disabled, { transform: [{ scale: scalingAnim }] }]}>
      <TouchableOpacity onPress={press} disabled={!onPress || disabled} activeOpacity={0.8}>
        <View style={styles.centerAlign}>
          <View style={styles.iconContainer}>
            <Image style={{ height: '100%' }} source={{ uri: icon }} />
          </View>

          {titleComponent ? <>{titleComponent}</> : <Typography type="body-bold">{title}</Typography>}

          {descriptionComponent ? (
            <>{descriptionComponent}</>
          ) : (
            <Typography type="info" style={styles.descriptionText}>
              {description}
            </Typography>
          )}
        </View>
        {postTextComponent}
      </TouchableOpacity>
    </Animated.View>
  );

  // If info card is a button, wrap in button tag
  if (onPress) {
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
    >
      {innerComponent}
    </button>;
  }

  // If info card is not a button, wrap in a div tag
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {innerComponent}
    </div>
  );
}

export interface ActionCardGroupProps {
  children: React.ReactElement<InfoCardProps> | React.ReactElement<InfoCardProps>[];
}

export default function ActionCardGroup({ children }: ActionCardGroupProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {items.map(child => (
        <InfoCardWrapper key={child.props.title} infoCard={child} />
      ))}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  iconContainer: {
    marginBottom: 18,
    height: 18,
    width: 28,
  },
  descriptionText: {
    marginTop: 4,
    color: theme.colors.placeholder,
  },

  itemContainer: {
    height: 290,
    width: 218,
    paddingTop: 36,
    paddingBottom: 36,
    paddingRight: 18,
    paddingLeft: 18,
    margin: 12,
    borderColor: theme.colors.onSurface,
    borderWidth: 1,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerAlign: {
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  hover: {
    opacity: 0.7,
  },
}));
