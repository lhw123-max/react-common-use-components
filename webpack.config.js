const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
            'src/App.js',
            'src/index.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 确保只排除非 react_lhw_components 的第三方模块
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 处理图片文件
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // 图片输出的路径
                        },
                    },
                ],
            },
        ]
    }
};
