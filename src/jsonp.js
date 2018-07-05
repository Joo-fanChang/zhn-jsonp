"use strict"
const jsonp = (a, b, c) => {
  if (c == null) {
    jsonp2(a, b);
  } else {
    jsonp3(a, b, c);
  }
}

const createFunc = (cbName, cb) => {
  window[cbName] = function(data) {
    cb(data);
  }
}

const base = (url) => {
  let script = document.createElement('script');
  script.setAttribute('src', url);
  document.body.appendChild(script);
}

const jsonp2 = (url, cb) => {
  url += url.indexOf('?') > -1 ? '&' : '?' + 'cb=cb';
  createFunc('cb', cb);
  base(url);
}

const jsonp3 = (url, opt, cb) => {
  var cbKey = opt['cb'] || 'cb'; // 前后台约定取回调名称的　key
  var cbName = 'jsonp_' + Date.now();
  for(let key of Object.keys(opt)) {
    if (key != 'cb') {
      url += url.indexOf('?') > -1 ? '&' : '?';
      url += `${key}=${opt[key]}`;
    }
  }
  url += url.indexOf('?') > -1 ? '&' : '?';
  url += `${cbKey}=${cbName}`;
  createFunc(cbName, cb);
  base(url);
}

