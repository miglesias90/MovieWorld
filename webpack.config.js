const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: {
		app: './src/app/app.ts',
		vendor: ['core-js', 'jquery', 'bootstrap', 'less']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: './public/bundle.[chunkhash].js'
	},
	resolve: { extensions: ['.ts', '.js', 'html'] },
	devtool: 'source-map',
	module: {
		rules: [
			{test: /\.css$/, use: ExtractTextWebpackPlugin.extract({use: ['css-loader']})},
			{test: /\.less$/, use: ExtractTextWebpackPlugin.extract({use: ['css-loader', 'less-loader']})},
			{test: /\.(jpg|png|svg|ttf|woff|woff2|eot)$/, use: 'url-loader?limit=25000'},
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new HtmlWebpackPlugin({template:'src/index.html'}),
		new ExtractTextWebpackPlugin('app/app.[chunkhash].css'),
		new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
		new BundleAnalyzerPlugin({
			reportFilename: '../public/bundle-report.html',
			analyzerMode: 'static',
			defaultSizes: 'gzip',
			openAnalyzer: false})
	],
	devServer: { contentBase: 'public/' }
}