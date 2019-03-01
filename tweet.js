"use strict";

const Twitter = require('twitter')

  // public リポジトリなので、秘密にしてください
  // https://developer.twitter.com 
  // にログインして入力してください
  const consumer_key = 'D3RZyspNXcCV2835x7o09nIBv'
  const consumer_secret = '9jUvWMjVmZdgbjjKDtXVSskRsHvI22pmbCpWsye7LxX3TF2PMZ'
  const access_token_key = '1095330104304066560-Xc0vEfZuuavdfc9s5hO3F7P8ODMUvR'
  const access_token_secret = 'JGfZiKt8abSBk6c6lAdd6aYcffzbtHmK9ID7EgiqyFFWA'

  const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  })


exports.TweeetPost=function(msg){
  // Twitterにメッセージをツイートする
  // https://github.com/desmondmorris/node-twitter
  client.post('status/update', {status: msg}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
  alert(msg);
};


