(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function () {
  var stopBulb = document.getElementById('stopLight');
  stopBulb.classList.toggle('stop');
})
stopButton.addEventListener('mouseenter',function(){
  console.log('Entered ' + stopButton.textContent + ' button.')
})
stopButton.addEventListener('mouseleave',function(){
  console.log('Left ' + stopButton.textContent + ' button.')
})
var slowButton = document.getElementById('slowButton');
slowButton.addEventListener('click', function () {
  var slowBulb = document.getElementById('slowLight');
  slowBulb.classList.toggle('slow');
})
slowButton.addEventListener('mouseenter',function(){
  console.log('Entered ' + slowButton.textContent + ' button.')
})
slowButton.addEventListener('mouseleave',function(){
  console.log('Left ' + slowButton.textContent + ' button.')
})
var goButton = document.getElementById('goButton');
goButton.addEventListener('click', function () {
  var goBulb = document.getElementById('goLight');
  goBulb.classList.toggle('go');
})
goButton.addEventListener('mouseenter',function(){
  console.log('Entered ' + goButton.textContent + ' button.')
})
goButton.addEventListener('mouseleave',function(){
  console.log('Left ' + goButton.textContent + ' button.')
})
})();





