var webpack = require('webpack');


function getPlugins(env) {
    var plugins = [];

    plugins.push(
        new webpack.optimize.CommonsChunkPlugin("common.js")
    );

    if (env.build) {
        plugins.push(
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