

function fishTank (input) {
let lengthInSm = Number (input [0]);
let widthInSm = Number (input [1]);
let heightInSm = Number (input [2]);
let percent = Number (input [3]) / 100; 
let totalVolume = (lengthInSm * widthInSm * heightInSm) / 1000;
let takenVolume = percent * totalVolume;
let freeVolume = totalVolume - takenVolume;

console.log(freeVolume);
}

fishTank (["85", "75","47", "17"]);