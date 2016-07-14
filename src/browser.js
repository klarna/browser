export const isIOS = (userAgent = navigator.userAgent) =>
  (/ipad|iphone|ipod/gi).test(userAgent.toLowerCase())

export const isUIWebView = (userAgent = navigator.userAgent, webkit, standalone) => {
  if (!isIOS(userAgent)) {
    return false
  }

  if (webkit && webkit.messageHandlers) {
    return true
  }

  if (!(/safari/i).test(userAgent.toLowerCase()) && !standalone) {
    return true
  }

  return false
}

export const isIE8 = (userAgent = navigator.userAgent) =>
  /^((?!opera|trident\/[5-7]).)*(msie 8|trident\/4)+((?!opera|trident\/[5-7]).)*$/.test(userAgent.toLowerCase())

export const isIE = (userAgent = navigator.userAgent) =>
  /^((?!opera).)*(msie|trident)+((?!opera).)*$/.test(userAgent.toLowerCase())

export const isAndroid4Stock = (userAgent = navigator.userAgent) => {
  const ua = userAgent.toLowerCase()
  return ua.indexOf('mozilla/5.0') > -1 &&
    ua.indexOf('android') > -1 &&
    ua.indexOf('applewebkit') > -1 &&
    /version\/\d+\.\d+/.test(ua) && // http://stackoverflow.com/questions/24926221/distinguish-android-chrome-from-stock-browser-stock-browsers-user-agent-contai
    isIE(userAgent) === false // without this check, WinPhone is detected as Android Stock
}
