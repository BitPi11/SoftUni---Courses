function move (input) {
    let index = 0 
    let w = Number (input [index]);
    index++
    let l = Number (input [index]);
    index++
    let h = Number (input [index]);
    index++ 

    let freeSpace = w * l * h; 
    let takenSpace = 0 
    let command = input [index];
    index ++
let isHaveSpace = false
    while (command !== "Done") {
        let boxes = Number (command)
        command = input [index];
        index++
        takenSpace += boxes
        if (command === "Done") {
            isHaveSpace = true;
            break;
        }
       if (freeSpace < takenSpace) {
        break;
       }
    }
    
if (isHaveSpace) {
    let freeSpaceLeft = freeSpace - takenSpace;
    console.log(`${freeSpaceLeft} Cubic meters left.`);
} else {
    let needetSpace = takenSpace - freeSpace
    console.log(`No more free space! You need ${needetSpace} Cubic meters more.`)
}
}

move (["10",

"10",

"2",
"20", "20", "20", "20", "122"])