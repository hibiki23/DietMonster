"use strict";

const Twitter = require('twitter')

const consumer_key = 'IrYOgMichNtgr6cYq2hNiAnMB'
const consumer_secret = 'YQI4HIDm5DQOaCo8M0S4QnDHxpfyT8efqkoHEfxxpmVlb1dEYE'
const access_token_key = '1095330104304066560-gyAWmd4C63RX4qBWJ1Ontl6WQmVy0f'
const access_token_secret = 'L4HIgJhq3SJJyd9NK5WXOx6zo8EIrqtcDsWgg6e3eqS4J'

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
})


//Twitterにメッセージをツイートする
client.post('statuses/update', {status: 'Hello World !!!'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});

