
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

// Merge default Metro config
const baseConfig = getDefaultConfig(__dirname);

// Add any custom config here if needed
const customConfig = {
  // example: resolver: { sourceExts: ['jsx', 'js', 'ts', 'tsx'] }
};

// Merge base and custom configs
const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap with NativeWind support and export
module.exports = withNativeWind(mergedConfig, {
  input: './global.css', // path to your NativeWind input file
});
