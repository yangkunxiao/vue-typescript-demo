const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')

module.exports = {
	entry: './src/main.ts',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			// 它会应用到普通的 `.js` 文件
			// 以及 `.vue` 文件中的 `<script>` 块
			{
				test: /\.js$/,
				loader: 'babel-loader',
            },
            {
				test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude:/node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
			// 它会应用到普通的 `.css` 文件
			// 以及 `.vue` 文件中的 `<style>` 块
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js','.ts', '.vue',  '.jsx'],
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
