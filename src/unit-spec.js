import * as browser from './browser'

describe('browser', () => {
  describe('isIOS', () => {
    describe('it has iPad in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPad')).to.be(true)
      })
    })

    describe('it has iPod in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPod')).to.be(true)
      })
    })

    describe('it has iPhone in it', () => {
      it('should be true', () => {
        expect(browser.isIOS('something something iPhone')).to.be(true)
      })
    })

    describe('otherwise', () => {
      it('should be false', () => {
        expect(browser.isIOS('something something')).to.be(false)
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
          expect(browser.isUIWebView('something something iphone', webkit)).to.be(true)
        })
      })

      describe('if it is standalone and not safari', () => {
        it('should be false', () => {
          expect(browser.isUIWebView('something something ipod', {}, true)).to.be(false)
        })
      })

      describe('if it is not standalone and safari', () => {
        it('should be false', () => {
          expect(browser.isUIWebView('something something safari ipod', {}, false)).to.be(false)
        })
      })

      describe('if it is not standalone and not safari', () => {
        it('should be true', () => {
          expect(browser.isUIWebView('something something ipod', {}, false)).to.be(true)
        })
      })
    })

    describe('is not iOS', () => {
      it('should be false', () => {
        expect(browser.isUIWebView('something something')).to.be(false)
      })
    })
  })

  describe('is IE', () => {
    it('identifies Internet Explorer 6 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (X11; MSIE 6.0; i686; .NET CLR 1.1.4322; .NET CLR 2.0.50727; FDM')).to.be(true)
    })
    it('identifies Internet Explorer 7 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.2; WOW64; .NET CLR 2.0.50727)')).to.be(true)
    })
    it('identifies Internet Explorer 7b as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.40607)')).to.be(true)
    })
    it('identifies Internet Explorer 8 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727)')).to.be(true)
    })
    it('identifies Internet Explorer 9 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0')).to.be(true)
    })
    it('identifies Internet Explorer 10 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (Compatible; MSIE 8.0; Windows NT 5.2; Trident/6.0)')).to.be(true)
    })
    it('identifies Internet Explorer 10.6 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0')).to.be(true)
    })
    it('identifies Internet Explorer 11 as IE', () => {
      expect(browser.isIE('Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko')).to.be(true)
    })
    it('does not identify Chrome as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')).to.be(false)
    })
    it('does not identify Safari as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A')).to.be(false)
    })
    it('does not identify Firefox latest as Internet Explorer', () => {
      expect(browser.isIE('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1')).to.be(false)
    })
    it('does not identify Opera as Internet Explorer', () => {
      expect(browser.isIE('Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16')).to.be(false)
    })
    it('does not identify Opera 11 as IE', () => {
      expect(browser.isIE('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; de) Opera 11.01')).to.be(false)
    })
  })

  describe('is IE8', () => {
    it('identifies IE 8 reported as MS IE7.0 but Trident/4.0 as IE8', () => {
      expect(browser.isIE8('Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/4.0; FBSMTWB; .NET CLR 2.0.34861; .NET CLR 3.0.3746.3218; .NET CLR 3.5.33652; msn OptimizedIE8;ENUS)')).to.be(true)
    })
    it('identifies IE 8 as IE8', () => {
      expect(browser.isIE8('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.2; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)')).to.be(true)
    })
    it('does not identify IE 7 as IE8', () => {
      expect(browser.isIE8('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/6.0; .NET4.0E; .NET4.0C)')).to.be(false)
    })
    it('does not identify IE 9 as IE8', () => {
      expect(browser.isIE8('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/11.0.696.57)')).to.be(false)
    })
    it('does not identify IE 10 as IE8', () => {
      expect(browser.isIE8('Mozilla/4.0 (Compatible; MSIE 8.0; Windows NT 5.2; Trident/6.0)')).to.be(false)
    })
    it('does not identify Opera 11 as IE8', () => {
      expect(browser.isIE8('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; de) Opera 11.01')).to.be(false)
    })
  })

  describe('isAndroidStock', () => {
    it('identifies AndroidStock as such', () => {
      const stockUA = 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
      expect(browser.isAndroidStock(stockUA)).to.be(true)
    })
    it('does not identify Firefox as AndroidStock', () => {
      expect(browser.isAndroidStock('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1')).to.be(false)
    })
    it('does not identify Safari as AndroidStock', () => {
      expect(browser.isAndroidStock('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A')).to.be(false)
    })
  })
})
