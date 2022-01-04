module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
    rules: [
      {
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
        use: 'ts-loader',
			},
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
};
