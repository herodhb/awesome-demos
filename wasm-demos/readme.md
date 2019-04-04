# 什么是webassembly
WebAssembly 是一种可以使用非 JavaScript 编程语言(c, c++等)编写代码并且能在浏览器上运行的技术方案。

下面这段示例代码可以直接在支持webassembly的浏览器上运行：

```
WebAssembly.compile(new Uint8Array(`
  00 61 73 6d  01 00 00 00  01 0c 02 60  02 7f 7f 01
  7f 60 01 7f  01 7f 03 03  02 00 01 07  10 02 03 61
  64 64 00 00  06 73 71 75  61 72 65 00  01 0a 13 02
  08 00 20 00  20 01 6a 0f  0b 08 00 20  00 20 00 6c
  0f 0b`.trim().split(/[\s\r\n]+/g).map(str => parseInt(str, 16))
)).then(module => {
  const instance = new WebAssembly.Instance(module)
  const { add, square } = instance.exports

  console.log('2 + 4 =', add(2, 4))
  console.log('3^2 =', square(3))
  console.log('(2 + 5)^2 =', square(add(2 + 5)))

})
```

# 安装Emscripten(编译工具)过程踩坑记录
1. 在mac下前置依赖需要先安装git, xcode, python
2. 安装最新Emscripten sdk需要python2.7.10版本以上
3. python版本在2.7.12以上时，使用urllib下载依赖会先做一次ssl证书验证，demo中可以全局取消ssl验证

# 三个简单代码示例
1. c语言实现打印'hello world'，通过emcc指令编译成html，并通过浏览器访问
2. 手写html及js来运行wasm文件
3. 使用未优化的fibonacci数列对比wasm及js之间的性能差距

# 总结
WebAssembly 并不是要替代 javascript ，而是用来增强 javascript 和 Web 平台的能力的。它更适合用于写模块，承接各种复杂的计算，如图像处理、3D运算、语音识别、视音频编码解码这种工作，主体程序还是要用 javascript 来写的。