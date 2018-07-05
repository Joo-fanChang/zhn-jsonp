const jsonp = (url, opt = {}) => {
  return new Promise((resolve, reject) => {
    // 获取回调key和name
    let cbKey = opt['cb'] ? opt['cb'] : 'cb';
    let cbName = 'jsonp_' + Date.now();

    // 处理url
    for(let key of Object.keys(opt)) {
      if (key != 'cb') {
        url += (url.includes('?') ? '&' : '?') + `${key}=${opt[key]}`;
      }
    }

    url += `${cbKey}=${cbName}`;

    try {
      var script = document.createElement('script');
      script.setAttribute('src', url);

      window[cbName] = data => resolve(data);
    } catch(e) {
      reject(e);
    }
  });
};

export default jsonp;
