module.exports = {

	entry: './js/main.js',

	resolve: {
		modulesDirectories: [
			'./js'
		]
	},

	output: {
		filename: 'assets/bundle.js'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel'
		}]
	}

};