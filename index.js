// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

//Heroku へデプロイした際は、ポートは process.env.PORT が適用される
app.set('port',(process.env.PORT||5000))
app.use(express.static('public'));

// tweet.jsの読み込み
var tweet = require('./tweet.js')

// ルート（http://localhost/tweet）にアクセスしてきたときに「Hello」を返す
app.get('/tweet', (req, res) => res.send(
  tweet.TweeetPost("Hello Diet World !!")
  ));

app.post('/api/post',(req, res) => {
  // var json_data= JSON.parse(req);
  // var score = json_data.Score;
  tweet.TweeetPost("Hello Diet World Point: "+String(5));
  res.json(req)
});

// サーバを立てる
app.listen(app.get('port'),function(){
  console.log("Node app is running at localhost:" + app.get('port'));
})

