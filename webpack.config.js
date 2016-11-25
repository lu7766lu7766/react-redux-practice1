// var webpack = require('webpack');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = require("config");
var path = config.get("path");
var jsDir = path.devDir + path.resource + path.jsDir;

// 清空資料夾重新生成，這樣會造成script.config配置每次都要重新翻新，如果只要清掉有異動的版本可能要在思考一下怎麼寫，或規劃一下
var rm = require("rimraf");
rm(jsDir + "/*", function () { });

// 讀配置，因為要同步才用至兩個套件搭配，否則可以用xml2js
// 或直接將被至寫在config/default.json中，會簡單些
var fs = require('fs'),
    XmlReader = require('xml-reader'),
    xmlQuery = require('xml-query');
var version_xml = fs.readFileSync(path.devDir + path.configurations + path.version, 'utf8');
var ast = XmlReader.parseSync(version_xml)
var a_version = xmlQuery(ast).find("VersionConfig").find("version").children().get(0).value.split("A");
var version = a_version[0];
var addition = a_version[1] || "0";

// css 目前都由額外引入，沒有包含在webpack中，image亦同，有需要包含近來再撰寫

module.exports = {
  entry: { // 一個檔案一隻入口點
    productTest: __dirname + '/src/product.js',
    // bomtest:'./src/bom.js'
  },
  output: {
    path: __dirname + "/" + jsDir,
    filename: '[name].v1.w.' + version + '.' + addition + '.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      // { test: /\.json$/, loader: 'json' },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      // { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx', '.json']
  },
  plugins: [
    // new ExtractTextPlugin('app.bundle.css'),
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};