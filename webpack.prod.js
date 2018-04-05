'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true,
			uglifyOptions: {
				output: {
					comments: false,
					beautify: false
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
});
