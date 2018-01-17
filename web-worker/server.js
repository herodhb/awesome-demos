const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对server.js的路径
const staticPath = './'

app.use(static(
	path.join( __dirname,  staticPath)
))

app.listen(8080)
console.log('Server is starting at port 8080')