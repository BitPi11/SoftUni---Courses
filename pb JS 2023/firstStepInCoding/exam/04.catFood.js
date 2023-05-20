function catFood (input) {
    let index = 0
    let catCount = Number (input [index])
    index++

    let  command = Number (input [index])
        index++
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let allFood = 0;
    let foodGrams = 0
    let foodPrice = 0;
    
    
    for (let i = 0; i <= command; i++) {
        foodGrams = Number (command)
        allFood += foodGrams
        if (foodGrams >=100 && foodGrams < 200) {
            group1 ++
        } else if (foodGrams >=200 && foodGrams < 300) {
            group2 ++
        } else if (foodGrams >= 300 && foodGrams <400) {
            group3++
        }
        command = Number (input [index])
        index++
    }
    foodPrice = (allFood / 1000) * 12.45;
    console.log ( `Group 1: ${group1} cats.`)
    console.log ( `Group 2: ${group2} cats.`)
    console.log ( `Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);


}
catFood  (["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])


