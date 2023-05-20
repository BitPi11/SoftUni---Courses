function timePlus15Mins (input) {
let hours = Number (input [0]);
let minutes = Number (input [1]);
let hoursToMinutes = hours * 60;
let totalTime = hoursToMinutes + minutes + 15;
let totalHours = Math.floor(totalTime / 60);
let totalMins = totalTime % 60; 
if (totalHours > 23) {
    totalHours = 0
}
if (totalMins < 10 ) {
    console.log ( `${totalHours}:0${totalMins}` );
 } else {
    console.log (`${totalHours}:${totalMins}`);
 }
}

timePlus15Mins (["11", "08"]);