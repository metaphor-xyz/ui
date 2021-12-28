import React, { ReactChild, useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Typography from './Typography';
import { createStyles } from './theme';

export interface ActionCardProps {
  iconComponent: ReactChild | ReactChild[];
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

export function ActionCard(_props: ActionCardProps) {
  return null;
}

interface ActionCardWrapperProps {
  actionCard: React.ReactElement<ActionCardProps>;
}

function ActionCardWrapper({ actionCard }: ActionCardWrapperProps) {
  const {
    iconComponent,
    title,
    titleComponent,
    description,
    descriptionComponent,
    postTextComponent,
    onPress,
    disabled,
    loading,
  } = actionCard.props;

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
      <TouchableOpacity style={[styles.itemContainer, styles.disabled]} disabled>
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
    >
      <TouchableOpacity
        style={[styles.itemContainer, mouseEntered && styles.hover, disabled && styles.disabled]}
        onPress={press}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <View style={styles.centerAlign}>
          <View style={styles.iconContainer}>{iconComponent}</View>

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
    </button>
  );
}

export interface ActionCardGroupProps {
  children: React.ReactElement<ActionCardProps> | React.ReactElement<ActionCardProps>[];
}

export default function ActionCardGroup({ children }: ActionCardGroupProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {items.map(child => (
        <ActionCardWrapper key={child.props.title} actionCard={child} />
      ))}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    marginBottom: 18,
  },
  descriptionText: {
    color: theme.colors.placeholder,
  },

  itemContainer: {
    height: 265,
    width: 218,
    padding: 36,
    marginRight: 12,
    marginLeft: 12,
    borderColor: theme.colors.onSurface,
    borderWidth: 1,
    borderRadius: 2,
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
