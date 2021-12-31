import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

import Typography from './Typography';
import { createStyles } from './theme';

export interface InfoAccordionProps {
  title?: string;
  description?: string;
}

export default function InfoAccordion({ title, description }: InfoAccordionProps) {
  const styles = useStyles();

  return (
    <View style={styles.outerContainer}>
      <List.Accordion
        style={styles.container}
        titleStyle={styles.titleContainer}
        title={
          <Typography style={styles.title} type="small-button">
            {title}
          </Typography>
        }
      >
        <Typography style={styles.description} type="info">
          {description}
        </Typography>
      </List.Accordion>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  outerContainer: {
    marginBottom: 8,
  },

  container: {
    width: '100%',
    padding: 0,
    margin: 0,
    color: theme.colors.placeholder,
  },

  titleContainer: {
    marginLeft: -8,
  },

  title: {
    color: theme.colors.placeholder,
  },

  description: {
    paddingTop: 4,
    color: theme.colors.placeholder,
  },
}));
