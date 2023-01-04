interface BackPack<T> {
  add: (obj: T) => void
  get: () => T
}

// 声明一个常量 backpack，并且不用担心他是哪里来的
declare const backpack: BackPack<string>
// object 是个字符串
const object = backpack.get()
// 应该传递字符串
backpack.add(123)
backpack.add('123')

interface Point {
  x: number
  y: number
}
function logPoint(p: Point) {
  console.log(`point: (${p.x}, ${p.y})`)
}
const p = { x: 1, y: 2 }
const threePoint = { x: 1, y: 3, z: 4 }
const color = { hex: '#111111' }
logPoint(p)
// 结构匹配只需要匹配对象字段的子集。
logPoint(threePoint)
logPoint(color)

// 类和对象确定结构的方式没有区别
class VirtualPoint {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
const vPoint = new VirtualPoint(1, 7)
logPoint(vPoint)

// 如果遇到报错则不再编译
// yarn tsc --noEmitOnError index.ts

// 默认情况下，TypeScript 会转化为 ES3 代码，这是一个非常旧的 ECMAScript 版本。
// 我们可以使用 target 选项将代码往较新的 ECMAScript 版本转换。
// yarn tsc --target es2015 index.ts

// 请注意，别名 只是 别名 - 你不能使用类型别名创建同一类型的不同“版本”。
// 当你使用别名时，它与您编写的别名类型完全一样。
//  换句话说，这段代码 看起来 可能是非法的，但是对于 TypeScript 来说是正确的，因为这两种类型都是同一类型的别名
declare function getInput(): string
declare function sanitize(str: string): string
type UserInputSanitizedString = string
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str)
}
// 创建一个经过清理的输入框
let userInput = sanitizeInput(getInput())
// 仍然可以使用字符串重新赋值
userInput = 'new Input'
