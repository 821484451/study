var Express = require('express');
var app = new Express();
var bp = require('body-parser');

app.use(Express.static(__dirname + '/'));
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
// 允许跨域请求
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});
app.get('/test', (req, res)=>{
    res.send(req.query)
});
app.post('/test', (req, res)=>{
    res.send(req.body);
});

app.listen(3001);