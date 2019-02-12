"use strict";

const Twitter = require('twitter')

// public リポジトリなので、秘密にしてください
// https://developer.twitter.com 
// にログインして入力してください
const consumer_key = '^^^^^^'
const consumer_secret = '-----'
const access_token_key = '-----'
const access_token_secret = '----'

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
})


//Twitterにメッセージをツイートする
// https://github.com/desmondmorris/node-twitter
client.post('statuses/update', {status: 'Hello World !!!'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});

