import * as browser from './browser'

describe('browser unit test', () => {
  describe('isIOS', () => {
    describe('it has iPad in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPad')).toEqual(true)
      })
    })

    describe('it has iPod in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPod')).toEqual(true)
      })
    })

    describe('it has iPhone in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPhone')).toEqual(true)
      })
    })

    describe('otherwise', () => {
      it('should be false', () => {
        expect(browser.isIOS('something something')).toEqual(false)
      })
    })
  })

  describe('isUIWebView', () => {
    describe('is iOS', () => {
      describe('if it is webkit and has messageHandlers', () => {
        it('should be true', () => {
          const webkit = {
            messageHandlers: {}
          }
          expect(browser.isUIWebView('something something iphone', webkit)).toEqual(true)
        })
      })

      describe('if it is standalone and not safari', () => {
        it('should be false', () => {
          expect(browser.isUIWebView('something something ipod', {}, true)).toEqual(false)
        })
      })

      describe('if it is not standalone and safari', () => {
        it('should be false', () => {
          expect(browser.isUIWebView('something something safari ipod', {}, false)).toEqual(false)
        })
      })

      describe('if it is not standalone and not safari', () => {
        it('should be true', () => {
          expect(browser.isUIWebView('something something ipod', {}, false)).toEqual(true)
        })
      })
    })

    describe('is not iOS', () => {
      it('should be false', () => {
        expect(browser.isUIWebView('something something')).toEqual(false)
      })
    })
  })

  describe('is IE', () => {
    it('identifies Internet Explorer 6 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (X11; MSIE 6.0; i686; .NET CLR 1.1.4322; .NET CLR 2.0.50727; FDM')).toEqual(true)
    })
    it('identifies Internet Explorer 7 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.2; WOW64; .NET CLR 2.0.50727)')).toEqual(true)
    })
    it('identifies Internet Explorer 7b as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.40607)')).toEqual(true)
    })
    it('identifies Internet Explorer 8 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727)')).toEqual(true)
    })
    it('identifies Internet Explorer 9 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0')).toEqual(true)
    })
    it('identifies Internet Explorer 10 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (Compatible; MSIE 8.0; Windows NT 5.2; Trident/6.0)')).toEqual(true)
    })
    it('identifies Internet Explorer 10.6 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0')).toEqual(true)
    })
    it('identifies Internet Explorer 11 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko')).toEqual(true)
    })
    it('does not identify Chrome as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')).toEqual(false)
    })
    it('does not identify Safari as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A')).toEqual(false)
    })
    it('does not identify Firefox latest as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1')).toEqual(false)
    })
    it('does not identify Opera as Internet Explorer', () => {
      expect(browser.isIE('Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16')).toEqual(false)
    })
    it('does not identify Opera 11 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; de) Opera 11.01')).toEqual(false)
    })
  })

  describe('isAndroid4Stock', () => {
    it('identifies Android 4 Stock as such', () => {
      const stockUA = 'Mozilla/5.0 (Linux; Android 4.4.2; en-gb; SAMSUNG GT-I9195 Build/KOT49H) AppleWebkit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36'
      expect(browser.isAndroid4Stock(stockUA))
        .toEqual(true)
    })

    it('does not identify Android 5 Stock as Android Stock 4', () => {
      const ua = 'Mozilla/5.0 (Linux; Android 5.1.1.; SAMSUNG SM-N910F Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36'
      expect(browser.isAndroid4Stock(ua))
        .toEqual(false)
    })

    it('does not identify Android 6 Stock as Android Stock 4', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G925F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.13 Mobile Safari/537.36'))
        .toEqual(false)
    })

    it('does not identify Android 4 Chrome as Android 4 Stock', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Linux; Android 4.4.2; en-gb; SAMSUNG GT-I9195 Build/KOT49H) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.13 Mobile Safari/537.36'))
        .toEqual(false)
    })

    it('does not identify Android 5 Chrome as Android 4 Stock', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Linux; Android 5.1.1; SM-N910F Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/51.0.2704.81 Mobile Safari/537.36'))
        .toEqual(false)
    })

    it('does not identify Android 6 Chrome as Android 4 Stock', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Linux; Android 6.0.1; SM-G925F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36'))
        .toEqual(false)
    })

    it('does not identify Firefox as Android 4 Stock', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1'))
        .toEqual(false)
    })
    it('does not identify Safari as Android 4 Stock', () => {
      expect(browser.isAndroid4Stock('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A'))
        .toEqual(false)
    })
  })
})
