import * as browser from './browser'

const tests = [
  ['isIOS', ['iOS 8.0', 'iOS 8.1', 'iOS 9.2']],
  ['isIE8', ['IE 8']],
  ['isIE', ['IE 8', 'IE 9', 'IE 10', 'IE 11']],
  ['isAndroid4Stock', ['Android 4.2', 'Android 4.3', 'Android 4.4']]
]

// isUIWebView ?

const currentBrowser = process.env.BROWSER

describe('browser', () => {
  tests.map(([method, matchingBrowsers]) => {
    const match = matchingBrowsers.indexOf(currentBrowser) > -1

    describe(method, () => {
      it(`should be ${match} on ${currentBrowser}`, () => {
        expect(browser[method]()).toEqual(match)
      })
    })
  })
})
