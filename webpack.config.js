const path = require('path');
const webpack = require('webpack');

const build_directory = path.resolve(__dirname, './public')
const app_directory = path.resolve(__dirname, './src')
// build section - static
// app section - dynamic 


 module.exports = {
     entry: `${app_directory}/index.jsx`,
     output: {
         path: build_directory,
         filename: 'bundle.js',
         publicPath: '/'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx?$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
	 resolve: {
	 	 extensions: ['.js', '.jsx']
	 },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };