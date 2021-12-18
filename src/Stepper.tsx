import React from 'react';
import { View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

interface StepperItemViewProps {
  component: React.ReactElement<StepperItemProps>;
  active: boolean;
}

function StepperItemView({ component, active }: StepperItemViewProps) {
  const styles = useStyles();

  return (
    <View style={styles.itemContainer}>
      <Typography style={[styles.itemLabel, active && styles.itemActive]}>{component.props.label}</Typography>
    </View>
  );
}

export interface StepperItemProps {
  id: string;
  label: string;
}

export function StepperItem(_props: StepperItemProps) {
  return null;
}

export interface StepperProps {
  children: React.ReactElement<StepperItemProps> | React.ReactElement<StepperItemProps>[];
  activeItem: string;
  headerComponent?: React.ReactNode | null;
}

export default function Stepper({ children, activeItem, headerComponent }: StepperProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {headerComponent && <View style={styles.header}>{headerComponent}</View>}
      <View style={styles.content}>
        {items.map(c => (
          <StepperItemView key={c.props.id} component={c} active={c.props.id === activeItem} />
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
