import React from 'react';
import { View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

interface SimpleVerticalStepperItemViewProps {
  component: React.ReactElement<SimpleVerticalStepperItemProps>;
  active: boolean;
}

function SimpleVerticalStepperItemView({ component, active }: SimpleVerticalStepperItemViewProps) {
  const styles = useStyles();

  return (
    <View style={styles.itemContainer}>
      <Typography style={[styles.itemLabel, active && styles.itemActive]}>{component.props.label}</Typography>
    </View>
  );
}

export interface SimpleVerticalStepperItemProps {
  id: string;
  label: string;
}

export function SimpleVerticalStepperItem(_props: SimpleVerticalStepperItemProps) {
  return null;
}

export interface SimpleVerticalStepperProps {
  children: React.ReactElement<SimpleVerticalStepperItemProps> | React.ReactElement<SimpleVerticalStepperItemProps>[];
  activeItem: string;
  headerComponent?: React.ReactNode | null;
}

export default function SimpleVerticalStepper({ children, activeItem, headerComponent }: SimpleVerticalStepperProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {headerComponent && <View style={styles.header}>{headerComponent}</View>}
      <View style={styles.content}>
        {items.map(c => (
          <SimpleVerticalStepperItemView key={c.props.id} component={c} active={c.props.id === activeItem} />
        ))}
      </View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {},
  header: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomColor: theme.colors.onSurface,
    borderBottomWidth: 1,
  },
  content: {},
  itemContainer: {
    marginBottom: 18,
  },
  itemLabel: {},
  itemActive: {
    fontWeight: '700',
  },
}));
