const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts', // Entry point (adjust if necessary)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js', // Adjusted output filename
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // Added TypeScript extensions
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript' // Added TypeScript preset
                        ]
                    }
                }
            },

        ]
    },
    externals: {
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom'
    }
};
