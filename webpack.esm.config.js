const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'production', // Use argv.mode to determine mode
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist/esm'),
      filename: 'index.js',
      library: {
        type: 'module', // For ESModule
      },
      environment: {
        module: true,
      },
    },
    experiments: {
      outputModule: true,
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom'
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  };
};
