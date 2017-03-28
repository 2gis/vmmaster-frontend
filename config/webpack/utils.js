var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');


function getPlugins(env) {
    var plugins = [];

    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
        })
    );

    if (env.build) {
        plugins.push(
            new ManifestPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                }
            })
        );
    }

    return plugins;
}


module.exports.getPlugins = getPlugins;