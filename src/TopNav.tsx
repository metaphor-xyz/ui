import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Typography from './Typography';
import { createStyles } from './theme';

export interface TopNavItem {
  id: string;
  label: string;
}

interface TopNavItemProps {
  item: TopNavItem;
  onClick: (_id: string) => void;
}

function TopNavItemView({ item, onClick }: TopNavItemProps) {
  const styles = useStyles();
  const onPress = useCallback(() => onClick(item.id), [item, onClick]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.item}>
      <Typography type="small-button">{item.label}</Typography>
    </TouchableOpacity>
  );
}

export interface TopNavProps {
  items: TopNavItem[];
  onClick?: (_id: string) => void;
  infoComponent?: React.ReactChild;
}

export default function TopNav({ items, onClick, infoComponent }: TopNavProps) {
  const styles = useStyles();

  const clickItem = useCallback(
    (id: string) => {
      if (onClick) {
        onClick(id);
      }
    },
    [onClick]
  );

  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}></View>
      <View style={styles.itemContainer}>
        {items.map(i => (
          <TopNavItemView key={i.id} item={i} onClick={clickItem} />
        ))}
      </View>
      <View style={styles.infoContainer}>{infoComponent}</View>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    height: 61,
    borderBottomColor: theme.colors.onSurface,
    borderBottomWidth: 1,
    paddingRight: 11,
    paddingLeft: 11,
    flexDirection: 'row',
  },
  brandContainer: {
    width: 100,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    padding: 4,
    alignItems: 'center',
  },
  item: {
    marginRight: 16,
  },
  infoContainer: {
    justifyContent: 'center',
  },
}));
