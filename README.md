# Promise
Implementation of promise A+ [spec](https://promisesaplus.com/).

## Compatibility
IE10+ webview 4.0+

## Install
```bash
# Not publish yet.
$ yarn add @stack/promise
```

## Big problem
Can you answer what is the differents between four promisees.
```js
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

[Origin post](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html?utm_source=javascriptweekly&utm_medium=email)

## Resources
- 【精读】[JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/#chapter2-how-to-write-promise)
- [理解 Promise 的工作原理](https://blog.coding.net/blog/how-do-promises-work)
- 【精读】https://www.promisejs.org/implementing/
- 【阅读】 http://coderlt.coding.me/2016/12/03/promise-in-depth-an-introduction-1/
- https://github.com/then/promise/blob/master/src/core.js
- https://github.com/kriskowal/q/blob/v1/design/README.md
- https://github.com/petkaantonov/bluebird
- http://stackoverflow.com/questions/23772801/basic-javascript-promise-implementation-attempt/23785244#23785244
