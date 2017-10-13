const merge = require('webpack-merge');
const common = require('./webpack.comon.js');

 module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader?sourceMap=true" // creates style nodes from JS strings
			}, {
				loader: "css-loader?sourceMap=true" // translates CSS into CommonJS
			}, {
				loader: "sass-loader?sourceMap=true" // compiles Sass to CSS
			}]
		}]
	}
 });