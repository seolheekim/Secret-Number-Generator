'use strict';
module.exports = function(num) {
  var secretNumber = Math.floor(Math.random() * 10000);

  return function (){

    return secretNumber;
  }

};