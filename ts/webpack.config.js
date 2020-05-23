// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack');

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    devtool: 'inline-source-map',
    
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./requestAPI.ts",
    output: {
        path: __dirname + '/../js/',
        filename: 'requestAPI.js'
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            }
        ]
    },

    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [".ts"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

