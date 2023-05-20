
function worldSwimmingRecord(input) {
    let RecordInSec = Number(input[0]);
    let distancePerMeters = Number(input[1]);
    let timePerSec = Number(input[2]);
    let distanceForSwimm = distancePerMeters * timePerSec;
    let slowDownTime = Math.floor (distancePerMeters / 15) *12.5 ;
    let allTimeForSwimm = distanceForSwimm + slowDownTime;

    if (allTimeForSwimm < RecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${allTimeForSwimm.toFixed(2)} seconds.`);
    } else {
        let needetTime = allTimeForSwimm - RecordInSec;
        console.log(`No, he failed! He was ${needetTime.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);