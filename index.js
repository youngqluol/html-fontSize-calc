export function calc(designWidth) {
  var html = document.documentElement;
  function recalc() {
    var dpi = html.clientWidth > designWidth ? designWidth : html.clientWidth;
    // 假设屏幕宽360，则计算公式： designWidth/360 = 100/fontSize
    var fontSize = parseFloat((dpi / designWidth) * 100);
    html.style.fontSize = fontSize + 'px';
    // 解决浏览器及低端安卓版本的webview缩放
    var changedFontSize = parseFloat(
      window.getComputedStyle(html)['font-size']
    );
    if (Math.abs(fontSize - changedFontSize) > 0.1) {
      html.style.fontSize = (fontSize * fontSize) / changedFontSize + 'px';
    }
  }
  recalc();
  window.addEventListener('resize', recalc);
}
