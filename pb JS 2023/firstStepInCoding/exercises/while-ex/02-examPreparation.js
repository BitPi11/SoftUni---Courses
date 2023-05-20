function examPreparation(input) {
    index = 0;
    let negativeTasksGrade= Number (input[index]);
    index ++;
    let command = input [index];
    index ++
    let sum = 0;
    let taskCount = 0
    let unsatisfactoryGrade = 0;
    let NeedBreak = false;

    while (command !== "Enough") {
        taskName =  command
        grade = Number(input[index])
        index++
        taskCount +=1;
        sum += grade
        if (grade <= 4){
            unsatisfactoryGrade +=1;
        }
        if (unsatisfactoryGrade >= negativeTasksGrade) {
            NeedBreak = true;
            break;
        }
        command = input [index];
        index++;
    }
    if (!NeedBreak) {
 console.log(`Average score: ${(sum / taskCount).toFixed(2)}` );
 console.log(`Number of problems: ${taskCount}`);
 console.log(`Last problem: ${taskName}`);
    } else {
 console.log( `You need a break, ${unsatisfactoryGrade} poor grades.`);
    }
}


examPreparation (["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])