'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const packageJson = require('./package.json');
const dependencies =
	'dependencies' in packageJson ? Object.keys(packageJson.dependencies) : [];

const babelPresets = ['env'];
if (dependencies.includes('react')) {
	babelPresets.push('react');
}

module.exports = {
	entry: {
		vendor: dependencies,
		app: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts/[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					fix: true,
					failOnError: true
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: babelPresets,
						plugins: [
							'transform-object-rest-spread',
							'transform-class-properties',
							['transform-runtime',
							{
								helpers: false,
								polyfill: false,
								regenerator: true,
								moduleName: 'babel-runtime'
							}]
						]
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
							removeComments: false,
							collapseWhitespace: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'styles/fonts',
					publicPath: './fonts'
				}
			}
		]
	},
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					priority: 10,
					enforce: true
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.HashedModuleIdsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
			chunkFilename: 'styles/[name].css'
		})
	]
};
