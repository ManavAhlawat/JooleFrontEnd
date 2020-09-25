var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // use: [
                //     {
                //         loader: 'eslint-loader',
                //         options: {
                //             emitWarning: true
                //         }
                //     }
                // ],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'react-redux': require.resolve('react-redux'),
            'react': path.resolve('node_modules/react')
        }
    },
    plugins: [new HtmlWebpackPlugin({
        // template: './src/index.html'
        template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
    }), 
    // new webpack.ContextReplacementPlugin(
    //     /(.+)?react(\\|\/)core(.+)?/, root('./src'), {}
    //   ),
    ],
    devServer: {
        historyApiFallback: true,
        //port: 3000
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    }
}