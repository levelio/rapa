/* eslint-disable */

function sealed(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
// @ts-ignore
class Test1 {}
