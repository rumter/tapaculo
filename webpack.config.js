var webpack = require("webpack")

module.exports = {
	entry: './js/main.js',
	resolve: {
		modulesDirectories: [
			'./js'
		]
	},
	output: {
		publicPath: 'assets/',
		filename: 'assets/bundle.js'
	}
};