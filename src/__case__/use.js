
function doSomething() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(1);
    }, 300)
  });
}

function doSomethingElse(value) {
  console.log('true', value);
}

doSomething().then(function () {
  return doSomethingElse(arguments[0]);
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
