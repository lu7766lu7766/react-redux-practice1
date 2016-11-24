var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = require("config");
var dir = config.get("dir");
var jsDir = dir.devDir + dir.jsDir;
var version = config.get("version");
var ver = version.default;
var addition = version.addition;
//var CSSDir = dir.devDir + dir.cssDir;

//console.log(__dirname + "/" + jsDir);

module.exports = {
   entry: {
	   producttest: __dirname + '/src/product.js',
     //bomtest:'./src/bom.js'
	 },
   output: {
      path : __dirname + "/" + jsDir,
      filename: '[name].v1.w.' + ver + '.' + addition + '.js'       
   },
   devtool: "source-map",
   module: {
     loaders: [
       { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
       //{ test: /\.json$/, loader: 'json' },
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
       { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
     ]
   },
   resolve: {
     extensions: ['', '.js', 'jsx', '.json'] 
   },
   plugins: [
     //new ExtractTextPlugin('app.bundle.css'),
	  //  new uglifyJsPlugin({
    //    compress: {
    //      warnings: false
    //    }
    //  })
   ]
};