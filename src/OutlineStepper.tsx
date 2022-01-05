import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

interface OutlineStepperItemViewProps {
  component: React.ReactElement<OutlineStepperItemProps>;
  active: boolean;
  onPress: () => Promise<void>;
  loading?: boolean;
}

function OutlineStepperItemView({ component, active, onPress, loading }: OutlineStepperItemViewProps) {
  const styles = useStyles();
  const [mouseEntered, setMouseEntered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setMouseEntered(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setMouseEntered(false);
  }, []);

  const isLoading = loading || component.props.loading;

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
        cursor: component.props.disabled || active ? 'default' : 'pointer',
        background: 'none',
        padding: 0,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={component.props.disabled || active}
    >
      <TouchableOpacity
        style={[
          styles.itemContainer,
          active && styles.active,
          mouseEntered && !active && styles.hover,
          component.props.disabled && styles.disabled,
        ]}
        onPress={onPress}
        disabled={component.props.disabled || active}
        activeOpacity={0.8}
      >
        {component.props.icon && (
          <View style={styles.itemIcon}>
            <Image style={{ height: '100%' }} source={{ uri: component.props.icon }} />
          </View>
        )}
        <Typography type="small-button" style={[styles.itemLabel, active && styles.itemActive]}>
          {component.props.label}
        </Typography>
      </TouchableOpacity>
    </button>
  );
}

export interface OutlineStepperItemProps {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function OutlineStepperItem(_props: OutlineStepperItemProps) {
  return null;
}

export interface OutlineStepperProps {
  children: React.ReactElement<OutlineStepperItemProps> | React.ReactElement<OutlineStepperItemProps>[];
  activeItem: string;
  headerComponent?: React.ReactNode | null;
  loading?: boolean;
  onPressItem?: (id: string) => void;
}

function isPromise<T>(obj: unknown): obj is Promise<T> {
  return !!obj && typeof obj === 'object' && 'then' in obj!;
}

export default function OutlineStepper({
  children,
  activeItem,
  headerComponent,
  loading,
  onPressItem,
}: OutlineStepperProps) {
  const styles = useStyles();

  const [asyncLoading, setAsyncLoading] = useState(false);

  const pressItem = useCallback(
    async (id: string) => {
      if (onPressItem) {
        const result = onPressItem(id);
        if (isPromise(result)) {
          try {
            setAsyncLoading(true);
            await result;
          } finally {
            setAsyncLoading(false);
          }
        }
      }
    },
    [onPressItem]
  );

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {headerComponent && <View style={styles.header}>{headerComponent}</View>}
      <View style={styles.content}>
        {items.map(c => (
          <OutlineStepperItemView
            key={c.props.id}
            component={c}
            active={c.props.id === activeItem}
            onPress={() => pressItem(c.props.id)}
            loading={loading || asyncLoading}
          />
        ))}
      </View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: { width: 152, alignItems: 'center' },
  header: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomColor: theme.colors.onSurface,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  content: { width: '100%' },
  itemContainer: {
    width: '100%',
    height: 33,
    padding: 8,
    paddingRight: 14,
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  itemLabel: {
    color: theme.colors.placeholder,
  },
  itemActive: {
    fontWeight: '700',
  },
  active: {
    backgroundColor: theme.colors.onSurface,
  },
  disabled: {
    opacity: 0.6,
  },
  hover: {
    backgroundColor: theme.colors.onSurface,
    opacity: 0.6,
  },
}));
