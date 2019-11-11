const koa = require('koa')
const app = new koa()

const koaStatic = require('koa-static')
const bodypaser = require('koa-bodyparser')
const path = require('path')
const staticPath = koaStatic(path.join(process.cwd(), 'public'))
const router = require('./router')

app.use(staticPath)
app.use(bodypaser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.PORT || 3000, () => {
    console.log('http://localhost:3000')
    console.log('服务启动成功')
})