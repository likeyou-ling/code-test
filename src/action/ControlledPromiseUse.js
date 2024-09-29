import ControlledPromise from "../action/ControlledPromise.js";

// 通过构造函数初始化promise对象
const controlledPromise = new ControlledPromise();

// 外部调用resolve改变Promise状态为fulfilled
controlledPromise.resolve("reslove调用成功");

// 外部调用resolve改变Promise状态为rejected
// controlledPromise.reject("reject调用成功");

// 获取promise对象
let promiseObj = controlledPromise.getPromise();
promiseObj
  .then((result) => console.log(result))
  .catch((reason) => console.log(reason));
