const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static = require('koa-static');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());





// 设置静态路径
const staticPath = './';
app.use(static(path.join(__dirname, staticPath)));

router.all('/test', (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('X-Powered-By', '3.2.1');
    next(); 
});
router.post('/test', (ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});
router.get('/test', (ctx) => {
    ctx.body = ctx.request.query;
});

app.listen(3000);
