var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename : 'index.html',
	inject: 'body' 
});

module.exports = {
	entry : [
	'./app/server.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "server_bundle.js"
	},
	module: {
		loaders: [
		{test:/\.js$/, exclude: /node_modules/, loader:"babel-loader"}
		]
	},
	plugins:[HTMLWebpackPluginConfig]

}