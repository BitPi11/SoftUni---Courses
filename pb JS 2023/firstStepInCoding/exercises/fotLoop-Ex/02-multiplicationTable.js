function multiplicationTable (input) {
    let multiplier = Number (input [0]);
    for (let num = 1; num <=10; num ++){
        let result = num * multiplier;
        console.log(`${num} * ${multiplier} = ${result} `);
    }
}
multiplicationTable (["5"]);