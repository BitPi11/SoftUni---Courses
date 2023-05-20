function graduation(input) {
    let i = 0;
    let name = input[i];
    i++
    let grades = 1;
    let averGrade = 0;
    let lowGrade = 0;
    let hasEncludet = false

    while (grades <= 12) {
        let grade = Number(input[i])
        i++
        if (grade < 4.00) {
            lowGrade += 1
            if (lowGrade >= 2) {
                hasEncludet = true;
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
            continue;
        }
       
        averGrade += grade
        grades++
        
    }
   if (hasEncludet !=true ) {console.log(`${name} graduated. Average grade: ${(averGrade / 12).toFixed(2)}`)}

}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])