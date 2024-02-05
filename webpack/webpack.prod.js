const webpack = require('webpack');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.name': JSON.stringify('webpack-setup-with-react-for-prod'),
		}),
	],
};
