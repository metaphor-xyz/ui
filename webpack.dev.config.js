const prodConfig = require('./webpack.config');
const merge = (...objs) => require('deepmerge').all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });

const combinedConfig = merge({}, prodConfig, {
  watch: true,
});

module.exports = combinedConfig;
