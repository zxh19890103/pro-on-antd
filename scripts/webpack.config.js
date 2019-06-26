const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require("webpack")
const util = require("./util")

module.exports = {
	context: process.cwd(),
	mode: 'development',
  	devtool: "#cheap-module-eval-source-map",
	entry: {
		app: ["./src/index.tsx"]
	},
	output: {
		path: util.resolve("../dist"),
		filename: "[name].js"
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx' ]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
		  template: './index.html',
		  filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
