const webpack = require('webpack')

const browserToUse = process.env.BROWSER
  ? process.env.BROWSER
  : 'PhantomJS'

module.exports = {
  libraries: ['index'],

  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(browserToUse)
      })
    ]
  },

  karma: {
    sauceLabs: {
      public: 'public',
      testName: 'browser'
    },

    captureTimeout: 1000 * 40,
    browserNoActivityTimeout: 1000 * 30,

    customLaunchers: {
      Chrome: {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      'Mac Safari 9.0': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '9.0'
      },
      'Mac Firefox 46.0': {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'OS X 10.11',
        version: '46.0'
      },
      'IE 9': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9.0'
      },
      'IE 10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8',
        version: '10.0'
      },
      'IE 11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11.0'
      },
      'Edge': {
        base: 'SauceLabs',
        browserName: 'microsoftedge',
        platform: 'Windows 10',
        version: '13'
      },
      'Android 4.2': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.2'
      },
      'Android 4.3': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.3'
      },
      'Android 4.4': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.4'
      },
      'Android 5.0': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.0'
      },
      'Android 5.1': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.1'
      },
      'iOS 8.0': {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '8.0'
      },
      'iOS 8.1': {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '8.1'
      },
      'iOS 9.2': {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '9.2'
      }
    },

    browsers: [browserToUse]
  }
}
