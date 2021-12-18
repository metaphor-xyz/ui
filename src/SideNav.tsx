import React from 'react';
import { View } from 'react-native';

import { createStyles } from './theme';

export interface SideNavItemProps {}

export function SideNavItem({}: SideNavItemProps) {
  const styles = useStyles();

  return <View style={styles.itemContainer}></View>;
}

export interface SideNavProps {
  items: React.ReactNode;
  headerComponent?: React.ReactNode | null;
}

export default function SideNav({ items, headerComponent }: SideNavProps) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {headerComponent && <View style={styles.header}>{headerComponent}</View>}
      <View style={styles.content}>{items}</View>
    </View>
  );
}

const useStyles = createStyles(_theme => ({
  container: {},
  header: {},
  content: {},
  itemContainer: {},
}));
