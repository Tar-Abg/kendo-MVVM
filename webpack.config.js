let path = require('path');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "./bundle.js",
        publicPath: "dist/"
    },



    module: {
        preLoaders: [

            { test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/, loader: "file-loader" },


        ]
    }
};
