const {
  override,
  addWebpackPlugin,
} = require("customize-cra");
const { GenerateSW } = require('workbox-webpack-plugin');
const path = require('path')
 
module.exports = override(
  addWebpackPlugin(
    new GenerateSW({
      swDest: 'sw.js',
      skipWaiting: true, // 不用等其他serviceWorker生效
      clientsClaim: true, // 旧的不生效
      mode: 'production',
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          urlPattern: '/'
        }
      ],
    })
  )
);
