function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let totalExamTime = examHour * 60 + examMins;
    let totalArrivalTime = arrivalHour * 60 + arrivalMins
    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMins = totalDiffTime % 60;

    if (diffHour > 0 && diffMins < 10) {
        diffMins = `0${diffMins}`;
    }

    if (totalExamTime === totalArrivalTime) {
        console.log("On time");
    }

    if (totalExamTime > totalArrivalTime) {
        if (totalDiffTime <= 30) {
            console.log(`On time`);
            console.log(`${totalDiffTime} minutes before the start`)
        } else if (totalDiffTime < 60) {
            console.log(`Early`)
            console.log(`${totalDiffTime} minutes before the start`)
        } else {
            console.log(`Early`)
            console.log(`${diffHour}:${diffMins} hours before the start`)
        }
    } else if (totalExamTime < totalArrivalTime) {
        console.log(`Late`)
        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            console.log(`${diffHour}:${diffMins} hours after the start`)
        }
    }
   
}


onTimeForExam(["16", "00", "15", "00"])