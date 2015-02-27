var path = require("path");

module.exports = {
	context: __dirname,
	entry: {
		main:       "./client/main.jsx",
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
			{ test: /\.jsx$/,    loader: "jsx-loader?stripTypes" },
		]
	},
	resolve: {
		alias: {
			
		}
	},
	plugins: []
};