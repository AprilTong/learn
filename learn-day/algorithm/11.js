// promise的实现
// 定义三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function myPromise(callBack) {
    var _this = this;
    _this.currentState = PENDING;
    _this.value = void 0;
    // 用于保存then的回调，只有当promise状态为pending的时才会缓存，并且每个实例至多缓存一个
    _this.onResolvedCallbacks = []; // Promise resolve时的回调函数集
    _this.onRejectedCallbacks = []; // Promise reject的回调函数集
    _this.resolve = function (value) {
        if (value instanceof myPromise) {
            // 如果value是个promise，递归执行
            return value.then(_this.resolve, _this.reject);
        }
        setTimeout(() => {
            // 异步执行，保证顺序执行
            if (_this.currentState === PENDING) {
                _this.currentState = REJECTED;
                _this.value = value;
                _this.onResolvedCallbacks.forEach((cb) => cb());
            }
        });
    };
    _this.resolve = function (value) {
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = REJECTED;
                _this.value = value;
                _this.onRejectedCallbacks.forEach((cb) => cb());
            }
        });
    };
    // 异常处理
    try {
        callBack(_this.resolve, _this.reject);
    } catch (e) {
        _this.reject(e);
    }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
    var _this = this;
    // then 必须返回一个新的promise
    var promise2;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : (error) => {
                  throw error;
              };

    if (_this.currentState === FULFILLED) {
        return (promise2 = new myPromise(function (resolve, reject) {
            try {
                var x = onFulfilled(_this.value);
                // 如果onFulfilled的返回值是一个promise对象，直接取其结果作为promise2的结果
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (error) {
                reject(error);
            }
        }));
    }

    if (_this.currentState === REJECTED) {
        return (promise2 = new myPromise(function (resolve, reject) {
            try {
                var x = onRejected(_this.value);
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (error) {
                reject(error);
            }
        }));
    }

    //  如果当前的Promise还处于PENDING状态，我们并不能确定调用onFulfilled还是onRejected，需要把两种情况的处理逻辑做成callBack放入到promise1的回调数组中
    if (_this.currentState === PENDING) {
        return (promise2 = new myPromise(function (resolve, reject) {
            _this.onResolvedCallbacks,
                push(function () {
                    try {
                        var x = onFulfilled(_this.value);
                        resolutionProcedure(promise2, x, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                });
        }));
    }
};
