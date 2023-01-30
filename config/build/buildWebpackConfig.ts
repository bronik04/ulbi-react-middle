import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
 return {
     mode,
     entry: paths.entry,
     output: {
         filename: "[name].[contenthash].js",
         path: paths.build,
         clean: true
     },
     plugins: buildPlugins(options),
     resolve: buildResolvers(),
     module: {
         rules: buildLoaders(),
     },
 }
}