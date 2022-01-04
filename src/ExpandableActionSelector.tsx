import React, { ReactChild } from 'react';
import { View, Image } from 'react-native';
import { List } from 'react-native-paper';

import { ButtonProps } from './Button';
import Button from './Button';
import DiscordButton from './DiscordButton';
import Typography from './Typography';
import { createStyles } from './theme';

export interface ExpandableActionSelectorItemAction extends ButtonProps {
  id: string;
  customButtonType?: string; // "discord";
}

export interface ExpandableActionSelectorItemProps {
  name: string;
  icon?: string;
  hasApplication?: boolean;
  tokenRequirementString?: string;
  descriptionComponent: ReactChild | ReactChild[];
  actions?: ExpandableActionSelectorItemAction[];
}

export function ExpandableActionSelectorItem(_props: ExpandableActionSelectorItemProps) {
  return null;
}

interface ActionSelectorItemWrapperProps {
  action: React.ReactElement<ExpandableActionSelectorItemProps>;
  borderRadiusTop?: boolean;
  borderRadiusBottom?: boolean;
}

function ExpandableActionSelectorItemWrapper({
  action,
  borderRadiusTop,
  borderRadiusBottom,
}: ActionSelectorItemWrapperProps) {
  const styles = useStyles();

  const props = action.props;

  return (
    <View
      style={[
        styles.itemContainer,
        borderRadiusTop && styles.borderRadiusTop,
        borderRadiusBottom && styles.borderRadiusBottom,
      ]}
    >
      <List.Accordion
        style={{
          padding: 8,
          margin: 0,
        }}
        titleStyle={{
          width: 686,
          padding: 0,
          margin: 0,
        }}
        title={
          <View style={styles.titleContainer}>
            <View style={styles.itemInfo}>
              {props.icon && (
                <View style={styles.itemIcon}>
                  <Image style={{ height: '100%' }} source={{ uri: props.icon }} />
                </View>
              )}
              <Typography type="button" style={styles.itemName}>
                {props.name}
              </Typography>

              <Typography type="info" style={styles.applicationStatus}>
                {props.hasApplication ? 'Application required' : 'Anyone can access'}
              </Typography>

              {props.tokenRequirementString && <Typography type="info">{props.tokenRequirementString}</Typography>}
            </View>
            <View style={styles.itemActions}>
              {props.actions &&
                props.actions.map(ac => (
                  <View key={ac.id} style={styles.itemAction}>
                    {ac.customButtonType ? (
                      <View
                        style={{
                          height: 40,
                          width: 78,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <DiscordButton imageSrc={ac.customButtonType} onPress={ac.onPress} />
                      </View>
                    ) : (
                      <Button {...ac} />
                    )}
                  </View>
                ))}
            </View>
          </View>
        }
      >
        <View style={styles.descriptionContainer}>
          <Typography type="info">
            Learn about the community, spread the word and help bring the next to the community. By being part of the
            community you’ll get the latest updates and a chance to become a contributor at a later date. Become a
            Member, you’ll get:
          </Typography>

          <Typography type="info" style={{ paddingTop: 20 }}>
            • Access to Discord
          </Typography>
          <Typography type="info" style={{}}>
            • Be eligible for future airdrops
          </Typography>
        </View>
      </List.Accordion>
    </View>
  );
}

export interface ExpandableActionSelectorProps {
  children:
    | React.ReactElement<ExpandableActionSelectorItemProps>
    | React.ReactElement<ExpandableActionSelectorItemProps>[];
}

export default function ExpandableActionSelector({ children }: ExpandableActionSelectorProps) {
  const styles = useStyles();

  const items = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.container}>
      {items.map((c, i) => (
        <ExpandableActionSelectorItemWrapper
          key={c.props.name}
          action={c}
          borderRadiusTop={i === 0}
          borderRadiusBottom={i === items.length - 1}
        />
      ))}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: { width: '100%' },
  borderRadiusTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopWidth: 1,
  },
  borderRadiusBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  itemContainer: {
    borderColor: theme.colors.onSurface,
    borderWidth: 1,
    borderRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    paddingTop: 24,
    paddingBottom: 44,
    paddingRight: 60,
    paddingLeft: 60,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 35,
    height: 35,
    marginRight: 24,
    border: `1px solid ${theme.colors.onSurface}`,
    borderRadius: 2,
    overflow: 'hidden',
  },
  itemName: {
    width: 104,
    marginRight: 14,
  },
  applicationStatus: {
    marginRight: 50,
    color: theme.colors.disabled,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAction: {},
}));
