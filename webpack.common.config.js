module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          'ts-loader',
        ],
			},
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
};
