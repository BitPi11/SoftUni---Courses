function histogram(input) {
    let firstNum = Number(input[0]);
    let Number1Range = 0;
    let Number2Range = 0;
    let Number3Range = 0;
    let Number4Range = 0;
    let Number5Range = 0;

    for (i = 1; i <= firstNum; i++) {
        let nextNumbers = Number(input[i])
        if (nextNumbers < 200) {
            Number1Range += 1;
        } else if (nextNumbers <= 399) {
            Number2Range += 1;
        } else if (nextNumbers <= 599) {
            Number3Range += 1;
        } else if (nextNumbers <= 799) {
            Number4Range += 1;
        } else {
            Number5Range += 1;
        }
    }

    let percent1Range = (Number1Range / firstNum) * 100;
    let percent2Range = (Number2Range / firstNum) * 100;
    let percent3Range = (Number3Range / firstNum) * 100;
    let percent4Range = (Number4Range / firstNum) * 100;
    let percent5Range = (Number5Range / firstNum) * 100;

    console.log(`${percent1Range.toFixed(2)}%`);
    console.log(`${percent2Range.toFixed(2)}%`);
    console.log(`${percent3Range.toFixed(2)}%`);
    console.log(`${percent4Range.toFixed(2)}%`);
    console.log(`${percent5Range.toFixed(2)}%`);

}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);