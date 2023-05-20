function combinations (input) {
    let result= Number (input [0]);
    let combins = 0
    for (num1 = 0; num1 <= result; num1 ++) {
        for (num2=0; num2 <= result; num2++){
            for (num3 = 0; num3 <=result; num3++){
                let addingNumbers = num1+ num2+ num3;
                if (addingNumbers === result) {
                    combins ++
                }
            }
        }
    }
    console.log (combins)
}
combinations ([25]);