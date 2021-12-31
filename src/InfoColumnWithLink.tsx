import React from 'react';
import { Image, View } from 'react-native';

import Link from './Link';
import Typography from './Typography';
import { createStyles } from './theme';

export interface InfoColumnProps {
  icon?: string;
  description?: string;
  videoUrl?: string;
  linkText?: string;
  linkUrl?: string;
}

export default function InfoColumnWithLink({ icon, description, videoUrl, linkText, linkUrl }: InfoColumnProps) {
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

      {linkText && linkUrl && <Link url={linkUrl} text={linkText} />}

      {videoUrl && (
        <View style={styles.videoContainer}>
          {/* TODO: replace with video, not image */}
          <Image style={{ height: '100%' }} source={{ uri: videoUrl }} />
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
    marginTop: 18,
    height: 168,
    width: 300,
  },
}));
