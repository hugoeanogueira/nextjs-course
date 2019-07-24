const webpack = require('webpack');
require('dotenv').config();

console.log(`
--------------------------
ARE ENV VARIABLES DEFINED?
BLOGGER_URL: ${process.env.BLOGGER_URL}
API_KEY: ${Boolean(process.env.API_KEY)}
`);

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['BLOGGER_URL', 'API_KEY'])
    );
    return config;
  }
};
