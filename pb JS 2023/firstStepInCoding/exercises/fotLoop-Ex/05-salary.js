// function salary (input) {
//     let openTabs = Number (input [0]);
//     let money = Number (input [1]);

//     for (i = 2; i <= openTabs  + 2; i++) {
//         let browser =  input [i];

// if (browser ==="Facebook") {
//         money -= 150;
//     } else if (browser === "Instagram"){
//         money -= 100;
//     } else if (browser === "Reddit"){
//         money -= 50;
//     }
//     // let freeMoney = money - fine;
//     if (money <= 0) {
//         console.log (`You have lost your salary.`);
//         return; 
//     } 

// }
// console.log (`${money}`)
// }

function salary(input) {
    let openTabs = Number(input[0]);
    let money = Number(input[1]);
    let fine = 0;
    
    for (i = 2; i <= openTabs + 2; i++) {
        let browser = input[i];
        if (browser === "Facebook") {
            fine = fine + 150;
        } else if (browser === "Instagram") {
            fine = fine + 100;
        } else if (browser === "Reddit") {
            fine = fine + 50;
        }
        let freeMoney = money - fine;
        if (money - fine <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }
    }
    let freeMoney = money - fine;
    console.log(`${freeMoney}`)
}


salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])