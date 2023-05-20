function walking (input) {
    index = 0;
    let command = input [index]
    index++
    let stepsCounter = 0
    while (command !== "Going home" && stepsCounter < 10000) {
       let steps = Number (command);
        stepsCounter += steps;
        command = input [index];
        index++
        } 
        if (command === "Going home") {
            let stepsToHome = Number (input [index])
            index ++
            stepsCounter += stepsToHome
        }
        
        if (stepsCounter >= 10000) {
                    console.log("Goal reached! Good job!")
                    console.log(`${stepsCounter - 10000} steps over the goal!`)
                } else {
                    console.log(`${10000 - stepsCounter} more steps to reach goal.`)
                }

}




walking (["1500", "300", "2500", "3000", "Going home", "200"])