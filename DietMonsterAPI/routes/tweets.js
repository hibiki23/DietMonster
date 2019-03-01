"use strict";

var express = require('express');
var router = express.Router();

const Twitter = require('twitter')

  // public リポジトリなので、秘密にしてください
  // https://developer.twitter.com 
  // にログインして入力してください
  const consumer_key = 'vWWoUilct6F4KlnHhmiRdgVvu'
  const consumer_secret = 'JJLZw2NSWjumFIZPcA0vOezewLKO4fElMbBfC354bbzz8qaC9E'
  const access_token_key = '1095330104304066560-2W3DQiDgmJ2YHyPfd2nwNAr0UC7XJg'
  const access_token_secret = 'QgnEMARd7VoCxwbkWYTec1OHlzztdaaD54GnRhpKJPP4f'

  const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  })


function TweeetPost(msg){
  // Twitterにメッセージをツイートする
  // https://github.com/desmondmorris/node-twitter
  client.post('statuses/update', {status: msg}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
    console.log(error);
  });
};


/* サンプルAPI③ 
 * http://localhost:3000/tweets/api/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
router.get('/api/:score', function (req, res, next) {
  var msg = "Hello World New API, Score: "+ String(req.params.score) +" !";
  TweeetPost(msg);
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send("Monster Image");
});

module.exports = router;
