function trainTheTrainers(input) {
    let index = 0;
    let judjesCount = Number(input[index]);
    index++;
    let grade = 0;
    let finishGrade = 0;
    let result = 0;
    let finalResult = 0;
    let command = input[index];
    index++;
    let allGrades = 0;
    let numOfPresentation = 0;

    while (command !== "Finish") {

        let presentation = command;
        numOfPresentation++;

        for (let i = 0; i < judjesCount; i++) {
            grade = Number(input[index]);
            finishGrade += grade;
            command = input[index];
            index++;
            result = finishGrade / judjesCount;

        }
        finalResult += finishGrade;
        command = input[index];
        index++;



        console.log(`${presentation} - ${result.toFixed(2)}.`)
        allGrades += result;
        result = 0;
        finishGrade = 0;

    }
    allGrades = finalResult / (judjesCount * numOfPresentation);
    console.log(`Student's final assessment is ${allGrades.toFixed(2)}.`);

}

trainTheTrainers(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"]);