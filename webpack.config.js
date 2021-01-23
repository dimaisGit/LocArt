const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const reactConfiguration = {
    mode: "development",
    entry: "./src/index.tsx",
    target: "web",
    devtool: "source-map",
    resolve: {
        alias: {
            "src": path.resolve(__dirname, "src")
        },
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
    devServer: {
        port: 3000
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
                test: /\.(png|jpg)$/,
                use: ["file-loader"],
            },
        ],
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{ from: "package.json", to: "package.json" }],
        // }),
    ],
};

module.exports = [reactConfiguration];
