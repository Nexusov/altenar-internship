const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.tsx',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3001,
	},
	module: {
		rules: [
			{
				test: /\.bundle\.ts$/,
				use: {
					loader: 'bundle-loader',
					options: {
						name: '[name]',
					},
				},
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(svg|png|gif|jpg)$/,
				exclude: /fonts/,
				loader: 'file-loader',
			},
			{
				test: /\.(ttf|eot|woff|svg|woff2)$/,
				loader: 'file-loader',
			},
			{
				test: /\.ico$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			}
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			inject: 'body',
			favicon: path.join(__dirname, 'public', 'favicon.ico'),
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
