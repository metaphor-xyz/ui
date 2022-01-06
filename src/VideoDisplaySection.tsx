import { AntDesign } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { View, Image, Platform, Linking, TouchableOpacity } from 'react-native';

import Button from './Button';
import Typography from './Typography';
import { createStyles } from './theme';

export interface VideoDisplaySectionProps {
  videoTitle: string;
  videoUri: string;
}

export default function VideoDisplaySection({ videoTitle, videoUri }: VideoDisplaySectionProps) {
  const styles = useStyles();

  const onPressVideoLink = useCallback(async () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    } else {
      if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Typography type="h2" style={styles.name}>
          {videoTitle}
        </Typography>

        <View style={{ width: 158 }}>
          <Button
            title="Watch Demo"
            color="secondary"
            onPress={onPressVideoLink}
            postTextComponent={
              <AntDesign
                style={{
                  borderRadius: 100,
                  height: '14px',
                  width: '8px',
                  marginLeft: 16,
                }}
                name="caretright"
                size={14}
              />
            }
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.videoContainer]} onPress={onPressVideoLink} activeOpacity={0.8}>
        {/* TODO: replace with video, not image */}
        <Image style={{ height: '100%' }} source={{ uri: videoUri }} />
      </TouchableOpacity>
    </View>
  );
}

const useStyles = createStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 78,
    paddingBottom: 78,
    paddingRight: 72,
    paddingLeft: 72,
    border: `2px solid ${theme.colors.primary}`,
  },
  logo: {
    height: 30,
    width: 30,
  },
  name: {
    maxWidth: 390,
    marginBottom: 40,
  },
  videoContainer: {
    height: 320,
    width: 575,
  },
}));
