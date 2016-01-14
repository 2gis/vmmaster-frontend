var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');

var dirname = path.resolve(__dirname, '../..');
var reactPath = 'node_modules/react/dist/react.min.js';

module.exports = function makeWebpackConfig(env) {
    var config = {
        context: path.join(dirname, './'), // исходная директория
        entry: {
            dashboard: path.join(dirname, './static/components/DashboardPage'),
            session: path.join(dirname, './static/components/SessionPage'),
            step: path.join(dirname, './static/components/StepPage'),
            substep: path.join(dirname, './static/components/SubStepPage')
        }, // файл для сборки, если несколько - указываем hash (entry name => filename)
        output: {
            path: path.join(dirname, 'static/assets'), // выходная директория
            pathinfo: !env.build,
            filename: "[name].js"
        },
        resolve: {
            extensions: ['', '.js']
        },
        module: {
            loaders: [
                {test: /\.js$/, loader: 'jsx-loader', exclude: /node_modules/},
                {test: /node_modules\/bootstrap\/js\//, loader: 'imports?jQuery=jquery'}
            ],
            noParse: [
                path.resolve(dirname, reactPath)
            ]
        },
        devServer: !env.build && {
            contentBase: path.resolve(dirname, 'static/assets'),
            hot: true,
            inline: true
        },
        watch: !env.build,
        plugins: utils.getPlugins(env)
    };

    return config;
};