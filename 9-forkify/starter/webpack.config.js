const path = require('path');
const webpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : "./src/js/index.js",
	output : {
		path : path.resolve(__dirname, 'dist/js'),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpackPlugin({
			filename : 'index.html',
			template: './src/index.html'
		})
	]
};

