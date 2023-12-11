const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.tsx',
	devServer: {
		static: [
			{
				directory: path.join(__dirname, 'dist'),
			},
			{
				directory: path.join(__dirname, 'public')
			},
		],
		historyApiFallback: true,
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
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			styles: path.resolve(__dirname, 'src/styles/'),
			pages: path.resolve(__dirname, 'src/pages/'),
			components: path.resolve(__dirname, 'src/components/'),
			services: path.resolve(__dirname, 'src/services/'),
			assets: path.resolve(__dirname, 'src/assets/'),
			utils: path.resolve(__dirname, 'src/utils/'),
			hooks: path.resolve(__dirname, 'src/hooks/'),
			constants: path.resolve(__dirname, 'src/constants/'),
			contexts: path.resolve(__dirname, 'src/contexts/'),
			routes: path.resolve(__dirname, 'src/routes/'),
		},
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
