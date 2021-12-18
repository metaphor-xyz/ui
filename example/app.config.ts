import { ExpoConfig, ConfigContext } from '@expo/config';

// eslint-disable-next-line
export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'ui examples',
    slug: 'examples',
    description: 'Metaphor UI examples',
    entryPoint: './src/App.tsx',
  };
};
