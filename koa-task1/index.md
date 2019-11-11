#中间件：函数 
async (ctx,next)=>{

}

ctx是对请求体和响应体的封装
>请求体

ctx.request.path   请求路径 /search                         简写成: ctx.path

ctx.request.url    请求地址   /search?key=地址                      ctx.url

ctx.request.query  获取get请求参数 {limit:10,pagenum:10}            ctx.query

ctx.request.querystring 获取get请求的参数 limit=10&pagenum=10       ctx.querystring

>响应体
ctx.response.body  响应内容 任意数据类型的数据  简写成：ctx.body

# nodemon 自动启动服务器
npm i nodmeon -g

使用：nodemon <执行文件路径>
