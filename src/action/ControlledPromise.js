/* 
    question:
    描述： 你需要实现一个 ControlledPromise 类，允许你在任意时刻手动控制 Promise 的 resolve 和 reject，并可以通过外部方法触发这些状态变化。具体要求如下：
    1. 实现一个 ControlledPromise 类，该类可以实例化并创建一个可控的 Promise。
    2. 该 Promise 应该能够手动调用 resolve 和 reject，并且在外部也可以通过调用对应方法来改变 Promise 的状态。
    3. 需要提供以下方法：
    3.1 resolve(value)：手动将 Promise 状态变为 fulfilled，并将 value 作为 resolve 的值。
    3.2 reject(reason)：手动将 Promise 状态变为 rejected，并将 reason 作为 reject 的原因。
    3.3 getPromise()：返回这个可控的 Promise 对象，方便外部获取并进行 then 或 catch 操作。
*/

export default class ControlledPromise {
    // 1、通过构造函数实例化Promise对象，并赋值给promise变量用于getPromise方法返回promise对象
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            // 3、将可以改变Promise对象状态的resolve跟reject方法赋值给当前对象的resolve跟reject变量
            this.resolve = resolve;
            this.reject = reject;
        })
    }
    // 2、暴露可供外部调用reslove跟reject方法改变Promise状态
    resolve(value) {
        this.resolve(value);
    }
    reject (reason) {
        this.reject(reason);
    }
    // 4、返回这个可控的 Promise 对象
    getPromise() {
        return this.promise;
    }
}