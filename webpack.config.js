const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    let webpackConfig = {
        entry: path.join(__dirname, "src", "index.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.js",
            clean: true
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
            ],
        },
        plugins: [],
    };

    if (env.D) {
        webpackConfig.entry = path.join(__dirname, "src", "index.test.tsx");
        webpackConfig.devServer = {
            static: {
                directory: path.join(__dirname, "dist")
            },
            compress: true,
            port: 3000
        };
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: path.resolve(__dirname, "public", "favicon.ico")
        }));
    } else {
        webpackConfig.output.libraryTarget = "commonjs2";
    }

    return webpackConfig;
};
