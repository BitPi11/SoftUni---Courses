
function lunchTime (input)  {
let movieName = input [0];
let episodeDuration = Number (input [1]);
let breakDuration = Number (input [2]);
let timeForLunch = (1/8) * breakDuration;
let leisureTime = (1/4) * breakDuration; 
let totalTakenTime = timeForLunch + leisureTime;
let totalTime = breakDuration - totalTakenTime;
if (totalTime >= episodeDuration) {
    let finalTime = Math.ceil (totalTime - episodeDuration);
    console.log (`You have enough time to watch ${movieName} and left with ${finalTime} minutes free time.`)
} else { 
    let neededTime = Math.ceil (episodeDuration- totalTime);
    console.log (`You don't have enough time to watch ${movieName}, you need ${neededTime} more minutes.`)
}
}

lunchTime (["Teen Wolf","48","60"]);