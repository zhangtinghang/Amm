export default function getBrowserInfo() {
  var Sys = {}
  var ua = navigator.userAgent.toLowerCase()
  var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/
  var m = ua.match(re)
  Sys.browser = m[1].replace(/version/, "'safari")
  Sys.ver = m[2]
  return Sys
}
