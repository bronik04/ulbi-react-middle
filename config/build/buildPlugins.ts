import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins(): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}