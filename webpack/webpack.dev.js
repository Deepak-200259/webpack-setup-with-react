const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.name': JSON.stringify('webpack-setup-with-react-for-dev'),
		}),
	],
};
