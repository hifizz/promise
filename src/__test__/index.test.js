const NativePromise = Promise;

describe("Promise", () => {
  test("Promise should be a consturst", () => {});
  test("all", (done) => {
    var p1 = Promise.resolve(3);
    var p2 = 1337;
    var p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, "foo");
    });
    Promise.all([p1, p2, p3]).then(values => {
      expect(values).toEqual([3, 1337, "foo"])
      done();
    }).catch((err) => {
      expect(err).toBeTruthy();
      done();
    });
  });
  test("prototype.then", done => {
    const promiseFunc = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 600);
    });
    promiseFunc.then(() => {
      done();
    });
  });
  test("prototype.catch", done => {
    const promiseFunc = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, 300);
    });
    promiseFunc.then(() => {}, () => {done()}).catch(() => {});
  });
  test("prototype.finally", () => {});
  test("race", () => {});
  test("reject", () => {});
  test("resolve", () => {});
});
