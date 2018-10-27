let express = require('express');
let mongodb = require('mongodb');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
let code = require('../lib/base63.js')

// 专门处理post请求的
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//获取数据
app.get('/shop',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var username = req.query.username;
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('shopdetail').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
//          console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//商品列表数据页
app.get('/details',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('details').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
//          console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
});

//列表页进入详情页
app.get('/Detail',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var id = req.query.id;
    id=Number(id);
//  console.log(id)//1
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('details').find({id:id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
//          console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
});

//详情页获取数据
app.get('/shopDetail',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var id = req.query.id;
    id=Number(id);
    console.log(id)//1
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('shopdetail').find({id:id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
//          console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
});
//注册用户名
app.post('/reg',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var username = req.body.username;
    	var password =code(req.body.password);
        let arr=[{username,password}];
        var dbo = db.db('wbiao');
        dbo.collection('user').find({username}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加用户名和密码
            if(request.length==0){
                dbo.collection('user').insert(arr,function (err, requests){
                    if(err){
                        console.log(err)
                    }
                    res.send('yes')
                })
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//登录

app.post('/log',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var username = req.body.username;
    var password = code(req.body.password)
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('user').find({username,password}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
});

//请求搜索数据
app.get('/search',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //检测数据库有没有相同的用户名
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('wbiao');
        dbo.collection('details').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
});
app.listen(9995);