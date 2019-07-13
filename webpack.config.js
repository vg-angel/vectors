const path = require("path")

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
        library: "LL",
        libraryTarget: "var"
    },
    devServer: {
        port: 3000,
        host: "localhost",
        compress: true,
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    mode: "development",
    module: {
        rules: [
            { 
                test: /\.ts$/,
                loader: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    } 
}