// 外部ファイル
var TweetModule = require('./sample');

// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

//Heroku へデプロイした際は、ポートは process.env.PORT が適用される
app.set('port',(process.env.PORT||5000))
app.use(express.static('public'));

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.get('/api', (req, res) => res.send(
  'Hello'
  ));

// サーバを立てる
app.listen(app.get('port'),function(){
  console.log("Node app is running at localhost:" + app.get('port'));
})

function Tweet(){
  TweetModule.FunTweeet("Hello Diet World !")
}
