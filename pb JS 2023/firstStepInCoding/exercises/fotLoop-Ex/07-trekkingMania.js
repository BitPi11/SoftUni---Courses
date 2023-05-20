function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let musala = 0;
    let monban = 0;
    let cilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let numberOfPeople = 0
    let allPeople = 0;


    for (let i = 1; i < input.length; i++) {
        numberOfPeople = input[i]

        if (numberOfPeople <= 5) {
            musala += Number(numberOfPeople)
        } else if (numberOfPeople <= 12) {
            monban += Number(numberOfPeople);
        } else if (numberOfPeople <= 25) {
            cilimandjaro +=Number(numberOfPeople);
        } else if (numberOfPeople <= 40) {
            k2 += Number(numberOfPeople)
        } else if (numberOfPeople >= 41) {
            everest += Number(numberOfPeople)
        }
        allPeople += Number(numberOfPeople);
    }

    let percentForMusala = (musala / allPeople) * 100;
    let percentForMonban = (monban / allPeople) * 100;
    let percentForCilimandjaro = (cilimandjaro / allPeople) * 100;
    let precentForK2 = (k2 / allPeople) * 100;
    let percentForEverest = (everest / allPeople) * 100;

    console.log(`${percentForMusala.toFixed(2)}%`);
    console.log(`${percentForMonban.toFixed(2)}%`);
    console.log(`${percentForCilimandjaro.toFixed(2)}%`);
    console.log(`${precentForK2.toFixed(2)}%`);
    console.log(`${percentForEverest.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26", 
"17", 
"37", 
"40", 
"78"])