const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/client/index.tsx',
    mode: 'production',

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    // Which means we must add them (React and ReactDom) to the index.html and load from CDN
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/html-template/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            '@frontend': path.resolve(__dirname, 'src/'),
        },
    },
    devServer: {
        historyApiFallback: true,
        port: 3001,
        contentBase: path.resolve('dist'),
        compress: false,
        hot: true,
    },
}
