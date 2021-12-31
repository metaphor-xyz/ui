import React from 'react';
import { Image, View } from 'react-native';

import InfoAccordion, { InfoAccordionProps } from './InfoAccordion';
import Link from './Link';
import Typography from './Typography';
import { createStyles } from './theme';

export interface InfoColumnProps {
  icon?: string;
  description?: string;
  videoUri?: string;
  linkText?: string;
  linkUri?: string;
  accordianTips?: InfoAccordionProps[];
}

export default function InfoColumn({ icon, description, videoUri, linkText, linkUri, accordianTips }: InfoColumnProps) {
  const styles = useStyles();

  return (
    <View>
      {icon && (
        <View style={[styles.iconContainer, { backgroundColor: 'none' }]}>
          <Image style={{ height: '36px' }} source={{ uri: icon }} />
        </View>
      )}

      <Typography type="info" style={styles.descriptionText}>
        {description}
      </Typography>

      {linkText && linkUri && (
        <View style={styles.linkContainer}>
          <Link url={linkUri} text={linkText} />
        </View>
      )}

      {accordianTips && accordianTips.length > 0 && (
        <>
          {accordianTips.map(accordianTip => (
            <InfoAccordion title={accordianTip.title} description={accordianTip.description} />
          ))}
        </>
      )}

      {videoUri && (
        <View style={styles.videoContainer}>
          {/* TODO: replace with video, not image */}
          <Image style={{ height: '100%' }} source={{ uri: videoUri }} />
        </View>
      )}
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  linkContainer: {
    marginBottom: 8,
  },
  iconContainer: {
    marginBottom: 18,
    height: 48,
    width: 48,
  },
  descriptionText: {
    marginBottom: 8,
    color: theme.colors.placeholder,
  },
  videoContainer: {
    marginTop: 8,
    marginBottom: 18,
    height: 168,
    width: 300,
  },
}));
