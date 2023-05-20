function maxNumber (input) {
   let i = 0; 
   let command = input [i]
   i++
   let maxNum = Number (input [0]);
   while (command !== "Stop") {
    let curNumber = Number (command);
    if (curNumber > maxNum) {
        maxNum = curNumber
    }
    command = input [i];
    i++

   }
    console.log (maxNum)

}
 maxNumber (["-1", "-2", "Stop"])