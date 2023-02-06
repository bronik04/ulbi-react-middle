import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
 return {
     mode,
     entry: paths.entry,
     output: {
         filename: "[name].[contenthash].js",
         path: paths.build,
         clean: true
     },
     module: {
         rules: buildLoaders(options),
     },
     plugins: buildPlugins(options),
     resolve: buildResolvers(options),
     devtool: isDev ? 'inline-source-map' : undefined,
     devServer: isDev ? buildDevServer(options) : undefined,
 }
}