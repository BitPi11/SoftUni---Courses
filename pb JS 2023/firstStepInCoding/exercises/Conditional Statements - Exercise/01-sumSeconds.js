function sumSeconds (input) {
let timeFirst = Number (input [0]);
let timeSecond = Number (input [1]);
let timeThird = Number (input [2]);
let totalTime = timeFirst + timeSecond + timeThird;
let min = Math.floor (totalTime / 60);
let sec = totalTime % 60;
if (sec < 10 ) {
   console.log ( `${min}:0${sec}` );
} else {
   console.log (`${min}:${sec}`);
}
}

sumSeconds (["35", "45","44"]);