import ControlledPromise from "../action/ControlledPromise.js";

// 功能测试
describe('ControlledPromise test', () => {
    // 每个test方法的promise方法要保证独立 
    let controlledPromise;

    // 每次执行test方法前都初始化一个promise对象
    beforeEach(() => controlledPromise = new ControlledPromise());

    // 测试resolve方法是否被正确调用以及返回正确的值
    test('should resolve with the value', async () => { 
        // 预期值
        const expectResolveValue = "resolve value";
        // 改变状态
        controlledPromise.resolve(expectResolveValue);
        const promise = controlledPromise.getPromise();
        await expect(promise).resolves.toBe(expectResolveValue);
    })

    // 测试reject方法是否被正确调用以及返回正确的值
    test('should reject with the reason', async () => { 
        // 预期值
        const expectRejectReason = "reject reason";
        // 改变状态
        controlledPromise.reject(expectRejectReason);
        const promise = controlledPromise.getPromise();
        await expect(promise).rejects.toBe(expectRejectReason);
    })


    // 测试this.resolveFn方法是否被执行
    test('should resolveFn with be call', async () => {
        // 预期值
        const expectResolveValue = "resolve value";
        // 改变状态 
        controlledPromise.resolveFn(expectResolveValue);
        const promise = controlledPromise.getPromise();
        await expect(promise).resolves.toBe(expectResolveValue);
    })

     // 测试this.rejectFn方法是否被执行
     test('should rejectFn with be call', async () => {
        // 预期值
        const expectResolveValue = "reject reason";
        // 改变状态 
        controlledPromise.rejectFn(expectResolveValue);
        const promise = controlledPromise.getPromise();
        await expect(promise).rejects.toBe(expectResolveValue);
    })
})