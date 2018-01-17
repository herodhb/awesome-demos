# Web Worker

## [定义](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，他们可以使用XMLHttpRequest执行 I/O  (尽管responseXML和通道属性总是为空)。一旦创建， 一个worker 可以将消息发送到创建它的JavaScript代码, 通过将消息发布到该代码指定的事件处理程序 (反之亦然)。本文提供了有关使用Web Worker的详细介绍。

## 操作步骤
1. 安装依赖后在 /web-worker 目录下 node server.js
2. 安装ngrok(一个反向代理软件，可以将本地web服务映射到外网)
3. ngrok 8080，访问外网

## 思考
demo中除了使用postMessage api做了主线程与子线程之间的信息交流外，主要还是想了解web worker与异步任务的不同之处。我使用了一个未做优化的fibonacci函数来做阻塞，结论是web worker阻塞不会影响主线程，所以可以放心的将复杂计算任务放到web worker里面。