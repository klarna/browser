import * as browser from './browser'

browser.isPhantomJS = () =>
  /PhantomJS/.test(navigator.userAgent)

const tests = [
  ['isIOS', ['iOS 8.0', 'iOS 8.1', 'iOS 9.2']],
  ['isIE', ['IE 10', 'IE 11']],
  ['isAndroid4Stock', ['Android 4.2', 'Android 4.3', 'Android 4.4']],
  ['isUIWebView', []],
  ['isPhantomJS', ['PhantomJS']]
]

const currentBrowser = process.env.BROWSER

describe('browser integration test', () => {
  tests.map(([method, matchingBrowsers]) => {
    const match = matchingBrowsers.indexOf(currentBrowser) > -1

    describe(method, () => {
      it(`should be ${match} on ${currentBrowser}`, () => {
        const result = browser[method]()
        if (result !== match) {
          console.log('Here is the UA:', navigator.userAgent)
        }

        expect(result).toEqual(match)
      })
    })
  })
})
