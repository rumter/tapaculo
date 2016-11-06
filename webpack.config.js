module.exports = {

	entry: './js/main.js',

	resolve: {
		modulesDirectories: [
			'./js',
			'node_modules'
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
	},

	externals: {
		"immutable": "Immutable"
	}

};