const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:'development',
	devServer: {
		contentBase : path.resolve(__dirname,"./src"),
		historyApiFallback: true,
		inline: false
	},
    entry: path.resolve(__dirname,"src/index.js"),
    output: {
		path: path.resolve(__dirname,"dist"),
		filename: "bundle.js",
		publicPath: "/"
    },
    module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				// loader: "babel-loader",
				// options : {
				// 	presets: ["es2015", "react"]
				// },
				use: [
					{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/react", "@babel/env"]
					}
				}
				  ]
			},
			{ test: /\.(gif|jpg)$/, use: ["file-loader"] },
			{ test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader"
					}
				]
			},
			

		]
	},
    plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
			inject: "body"
		})
	]
  };