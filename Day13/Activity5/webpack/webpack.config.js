const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of the application
  output: {
    filename: 'main.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'development' // Development mode for easier debugging
};
