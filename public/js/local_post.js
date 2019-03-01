"use strict";

var DietScore={
  score:100,
  name:"Monster"
};

function SendDietInfo(){
  //var hostUrl = "https://diet-monster.herokuapp.com/api/post";
  var hostUrl = "http://localhost:5000/api/post";
  $.ajax({
    url:hostUrl,
    type:'POST',
    dataType:'json',
    data:JSON.stringify(DietScore),
    contentType:'application/json',
    timeout:10000,
  }).done(function(data){
    console.log("sucess");
    console.log(data);
  }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
    console.log("failed");
  })
}

console.log(JSON.stringify(DietScore));

