

const path = require('path');

module.exports= {
    mode: 'production',
    entry: [
        './src/script.js', './src/functions.js'
    ],
    output: {
        filename: 'script.min.js',
        path: path.resolve(__dirname, 'dist') // nadji mi "dist" folder uu projektu
    }
};