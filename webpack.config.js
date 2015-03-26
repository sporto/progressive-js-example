var path = require("path");

module.exports = {
	context: __dirname,
	entry: {
		main:       "./client/main.ex6",
	},
	output: {
		path: path.join(__dirname, 'public', 'js'),
		filename: "[name].js",
		publicPath: "/js/"
	},
	module: {
		loaders: [
			{ test: /\.less$/,   loader: "style-loader!css-loader!less-loader"},
			{ test: /\.css/,     loader: "style-loader!css-loader" },
			{ test: /\.less$/,   loader: "less" },
			{ test: /\.js$/,     loader: "babel-loader" },
			{ test: /\.es6$/,    loader: "babel-loader" },
			{ test: /\.jsx$/,    loader: "jsx-loader?stripTypes" },
			{ test: /\.ex6$/,    loader: "jsx-loader?stripTypes!babel-loader" },
		]
	},
	resolve: {
		alias: {
			
		}
	},
	plugins: []
};