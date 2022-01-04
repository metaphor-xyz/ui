import React from 'react';
import { Image, View } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

interface BreadcrumbsItemViewProps {
  component: React.ReactElement<BreadcrumbsItemProps>;
  active: boolean;
  showSeparator: boolean;
}

function BreadcrumbsItemView({ showSeparator, component, active }: BreadcrumbsItemViewProps) {
  const styles = useStyles();

  return (
    <View style={styles.itemContainer}>
      {showSeparator && (
        <Typography type="info" style={[styles.itemLabel, active && styles.itemActive]}>
          {' ∫ '}
        </Typography>
      )}

      {component.props.icon && (
        <View style={styles.icon}>
          <Image style={{ height: '100%' }} source={{ uri: component.props.icon }} />
        </View>
      )}

      <Typography type="info" style={[styles.itemLabel, active && styles.itemActive]}>
        {component.props.label}
      </Typography>
    </View>
  );
}

export interface BreadcrumbsItemProps {
  id: string;
  label: string;
  icon?: string;
}

export function BreadcrumbsItem(_props: BreadcrumbsItemProps) {
  return null;
}

export interface BreadcrumbsProps {
  children: React.ReactElement<BreadcrumbsItemProps> | React.ReactElement<BreadcrumbsItemProps>[];
  activeItem: string;
  headerComponent?: React.ReactNode | null;
}

export default function Breadcrumbs({ children, activeItem }: BreadcrumbsProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {items.map((c, i) => (
          <BreadcrumbsItemView
            key={c.props.id}
            component={c}
            active={c.props.id === activeItem}
            showSeparator={i !== 0 && items.length !== 1}
          />
        ))}
      </View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {},
  content: {
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    alignItems: 'center',
  },
  itemLabel: {
    color: theme.colors.placeholder,
  },
  itemActive: {
    fontWeight: '700',
  },
  icon: {
    height: 28,
    width: 28,
    border: `1px solid ${theme.colors.onSurface}`,
    borderRadius: 2,
    marginRight: 12,
    overflow: 'hidden',
  },
}));
