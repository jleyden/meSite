const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
	      noParse: /(mapbox-gl)\.js$/,
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                name: 'assets/[name].[ext]'
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7
                                }
                            }
                        }
                    }]
            },
	        {test: /\.json$/, loader: 'json-loader'},
	        {test: /\.js$/, include: path.resolve(__dirname, 'node_modules/webworkify/index.js'), loader: 'worker'},
	        {test: /mapbox-gl.+\.js$/, loader: 'transform-loader/cacheable?brfs'}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.SourceMapDevToolPlugin({
            devtool: "eval"
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        })
    ],
		resolve: {
			extensions: [ '.js', '.jsx'],
			alias: {
				webworkify: 'webworkify-webpack',
				'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
			}
		}
}


