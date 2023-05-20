function triangleOfNumbers(num) {
    let printNums = "";
    for (rows = 1; rows <= num; rows++) {
        for (cols = 1; cols <= rows; cols++) {
            printNums +=`${rows} `;
        }
        console.log(printNums);
        printNums= ``;
    }
    
}
triangleOfNumbers(3)
