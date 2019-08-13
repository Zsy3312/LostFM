var express = require('express');
var app = express();
var fs = require('fs');
var join = require('path').join;
var MongoClient = require('mongodb').MongoClient;

//设置允许跨域访问该服务.
// 自定义跨域中间件
var allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');

    next();
};
app.use(allowCors);//使用跨域中间件

app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据
    res.send('Hello World');
});

app.get('/getAllSong', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");
        MyDB.collection("song").find({}).toArray(function(err, result) { // 返回集合中所有数据
                var myJSON = JSON.stringify(result);
                res.end(myJSON);
                db.close();
        });
    });
});


app.get('/getVol', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");

        MyDB.collection("vol").find({ NO : req.query.vol}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
            MyDB.collection("vol").find({ type : result[0].type}).toArray(function(err, similar) {
                if (err) throw err;
                //console.log(result);

                var similarList=[];
                console.log(similar.length);
                while(similarList.length!==3){
                    //console.log("111");
                    let tempRandom = Math.ceil(Math.random()*similar.length);
                    if(similar[tempRandom-1].NO === result[0].NO){
                        continue;
                    }
                    else if(similarList.length>0){
                        var mark = 0;
                        for(var j =0;j<similarList.length;j++ ){
                            if(similarList[j].NO === similar[tempRandom-1].NO){
                                mark=1;
                            }
                        }
                        if(mark===1){
                            continue;
                        }
                    }
                    let temp = {NO: similar[tempRandom-1].NO, Title:similar[tempRandom-1].title, img:similar[tempRandom-1].img};
                    similarList.push(temp);
                    console.log(temp.NO);
                }
                result[0].similar = similarList;
                var myJSON = JSON.stringify(result[0]);
                res.end(myJSON);
                db.close();
            });
        });
    });
});

app.get('/getVolList', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");
        MyDB.collection("vol").find( ).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);

            var myJSON = JSON.stringify(result);
            res.end(myJSON);
            db.close();
        });
    });
});

app.get('/addVol2', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");

        MyDB.collection("vol").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
            var ans =[];
            for(var j=1;j<11;j++){
                for(var i=0;i<7;i++){
                    let temp = {};
                    temp.img = result[i].img;
                    temp.description = result[i].description;
                    temp.musicList = result[i].musicList;
                    temp.type = result[i].type;
                    temp.NO = (i+(j*7)+1).toString();
                    temp.title = result[i].type + j.toString();
                    ans.push(temp)
                }
            }
            console.log(ans.length);


            MongoClient.connect("mongodb://localhost", function (err, db) {
                var MyDB = db.db("musicDB");
                MyDB.collection("vol", function (err, movieData) {
                    movieData.insertMany(ans, function (err, item) {
                        res.send('insert into Database' + item);
                        db.close();
                    });
                });
            });
        });
    });
});


app.get('/addVol', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据


    let musicList = getJsonFiles("public/vol7");
    var data1 =  {
        NO : "7",
        title : "声声别离",
        type : "爵士",
        img : "http://129.211.5.206:8081/vol7/title.jpg",
        description : "无数的欲望在内心蠢动，无论是相对无言还是微风和煦，都在悬而未决中稀疏难辨。所有的情绪都停留在这样一个无解的音符里，嵌入到骨子的深处，冷却为缄默的不动声色。Cover From UA×菊地成孔《Cure Jazz》",
        musicList : musicList
    };

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");
        MyDB.collection("vol", function (err, movieData) {
            movieData.insertOne(data1, function (err, item) {
                res.send('insert into Database' + item);
                db.close();
            });
        });
    });
});

app.get('/addSingle', function (req, res) {
    console.log('request.url:',req.url);  //打印请求的地址
    console.log(req.query); //打印参数数据


    let musicList = getJsonFiles("public/single/rock");

    MongoClient.connect("mongodb://localhost", function (err, db) {
        var MyDB = db.db("musicDB");
        MyDB.collection("song", function (err, movieData) {
            movieData.insertMany(musicList, function (err, item) {
                res.send('insert into Database' + item);
                db.close();
            });
        });
    });
});


var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
});

function getJsonFiles(jsonPath){
    let jsonFiles = [];

    let files = fs.readdirSync(jsonPath);
    files.forEach(function (item, index) {
        //let fPath = join(jsonPath,item);
        let mark = 0;
        for(var i=0; i<item.length;i++){
            if(item[i] === '-') {
                mark = i;
            }
        }
        let article = item.slice(0, mark-1);
        let song = item.slice(mark+2, item.length-4);

        jsonFiles.push({ song : song , article : article, type:"摇滚", path : "http://localhost:8081/single/rock/" + item });
    });

    console.log(jsonFiles);
    return jsonFiles;
}