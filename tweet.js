"use strict";

const Twitter = require('twitter')

  // public リポジトリなので、秘密にしてください
  // https://developer.twitter.com 
  // にログインして入力してください
  const consumer_key = 'zRMf7dZ7mBU88TgE2ZPF3H4X6'
  const consumer_secret = 'NOTVABvFAIbENSWa3MTS5C6j0iwpwjczOHHupsQ79EDDN1ZXl1'
  const access_token_key = '1095330104304066560-AncIJ4SlbfzpSC9xtelN5oQiTfGJQ5'
  const access_token_secret = 'GNP6aRqocZKn8hLbdbUsY6voeexUEXUsCiJTEUC2ceNgC'

  const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  })


exports.TweeetPost=function(msg){
  //Twitterにメッセージをツイートする
  // https://github.com/desmondmorris/node-twitter
  client.post('statuses/update', {status: msg}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
  alert(msg);
};


