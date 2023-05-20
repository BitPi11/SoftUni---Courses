function sumNumbers (input) {
    let i =  0;
    let num = Number (input [i]);
    i++;
    
    let sum = 0;
    while (sum < num) {
      let newNums = Number (input [i])
          sum += newNums;
        i++ 
    
    }
    console.log (`${sum}`);
}

sumNumbers (["100", "10", "20", "30", "40"]);