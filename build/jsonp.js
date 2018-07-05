(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SongPackage = factory());
}(this, (function () { 'use strict';

  const jsonp = (url, opt = {}) => {
    return new Promise((resolve, reject) => {
      // 获取回调key和name
      let cbKey = opt['cb'] ? opt['cb'] : 'cb';
      let cbName = 'jsonp_' + Date.now();

      // 处理url
      for (let key of Object.keys(opt)) {
        if (key != 'cb') {
          url += (url.includes('?') ? '&' : '?') + `${key}=${opt[key]}`;
        }
      }

      url += (url.includes('?') ? '&' : '?') + `${cbKey}=${cbName}`;

      try {
        var script = document.createElement('script');
        script.setAttribute('src', url);
        document.body.appendChild(script);
        window[cbName] = data => resolve(data);
      } catch (e) {
        reject(e);
      }
    });
  };

  return jsonp;

})));
