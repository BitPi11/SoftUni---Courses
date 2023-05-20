function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
  
    let combinationCounter = 0;
    let isHaveCombination = false 
    let firstNum = 0;
    let secondNum = 0;
   
    for ( n1 = start; n1 <= end; n1++) {
        for ( n2 = start; n2 <= end; n2++) {
            let result = n1 + n2;
            combinationCounter++
        
            if (result == magicNum) {
                firstNum = n1
                secondNum = n2
                isHaveCombination = true
                break;
               } 
            }
            if (isHaveCombination) {
                break; }
            }
            if (isHaveCombination) { 
                console.log (`Combination N:${combinationCounter} (${firstNum} + ${secondNum} = ${magicNum})`)
               } else {console.log (`${combinationCounter} combinations - neither equals ${magicNum}`)}
        
            }
        
        
        
    

sumOfTwoNumbers (["1",

"10",

"5"])