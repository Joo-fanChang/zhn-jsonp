# jsonp方法
因为　`axios` 不支持 `jsonp`，所以封装一个自己用

```
npm i changzhn-jsonp -S
```

> 和后台约定从url中取回调函数名的key，传到第二个参数中。`{cb: 'callback}`，其他请求参数也加到这个对象中，函数返回一个promise

```js
import jsonp from 'changzhn-jsonp'

jsonp(url, {}).then(res => {
  console.log(res);
}).catch(e => {
  console.error(e);
});

```
