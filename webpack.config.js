import nodeExternals from 'webpack-node-externals';
import path from 'path';
module.exports = function (options) {
  return {
    ...options,
    mode: 'development',
    entry: [options.entry],
    externals: [
      nodeExternals({
        modulesDir: path.resolve(__dirname, './node_modules'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
      alias: {
        utilities: path.resolve('./src/utilities/'),
      },
    },
    // output: {
    //   path: path.join(__dirname, 'dist'),
    //   filename: 'main.js',
    // },
  };
};
