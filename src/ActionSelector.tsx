import React from 'react';
import { View, Image } from 'react-native';

import { ButtonProps } from './Button';
import Button from './Button';
import Typography from './Typography';
import { createStyles } from './theme';

export interface ActionSelectorItemAction extends ButtonProps {
  id: string;
}

export interface ActionSelectorItemProps {
  name: string;
  icon?: string;
  actions?: ActionSelectorItemAction[];
}

export function ActionSelectorItem(_props: ActionSelectorItemProps) {
  return null;
}

interface ActionSelectorItemWrapperProps {
  action: React.ReactElement<ActionSelectorItemProps>;
}

function ActionSelectorItemWrapper({ action }: ActionSelectorItemWrapperProps) {
  const styles = useStyles();

  const props = action.props;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        {props.icon && (
          <View style={styles.itemIcon}>
            <Image style={{ height: '100%' }} source={{ uri: props.icon }} />
          </View>
        )}
        <Typography type="body">{props.name}</Typography>
      </View>
      <View style={styles.itemActions}>
        {props.actions &&
          props.actions.map(ac => (
            <View key={ac.id} style={styles.itemAction}>
              <Button {...ac} />
            </View>
          ))}
      </View>
    </View>
  );
}

export interface ActionSelectorProps {
  children: React.ReactElement<ActionSelectorItemProps> | React.ReactElement<ActionSelectorItemProps>[];
}

export default function ActionSelector({ children }: ActionSelectorProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {items.map(c => (
        <ActionSelectorItemWrapper key={c.props.name} action={c} />
      ))}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderColor: theme.colors.onSurface,
    borderWidth: 1,
    borderRadius: 2,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 35,
    height: 35,
    marginRight: 14,
  },
  itemName: {},
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAction: {
    marginRight: 14,
  },
}));
