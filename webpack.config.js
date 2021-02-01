const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin")

const reactConfiguration = {
    mode: "development",
    entry: "./src/index.tsx",
    target: "web",
    devtool: "source-map",
    resolve: {
        alias: {
            "src": path.resolve(__dirname, "src")
        },
        extensions: [".tsx", ".ts", ".js", ".css", ".svg"],
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        },
        open: true
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: "ts-loader" }],
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|ttf|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "src/assets", to: "src/assets" }],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};

module.exports = [reactConfiguration];
