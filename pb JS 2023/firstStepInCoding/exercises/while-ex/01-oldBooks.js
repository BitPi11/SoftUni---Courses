function oldBooks(input) {
    let index = 0;
    let wantedBook = input[index]
    index++
    let command = 0;
    let isFound = false;
    let checkedBooks = 0;
    while (command !== "No More Books") {
       command = input[index]
        index++
      

        if (command === wantedBook) {
            isFound = true
            break;
        }
        if (command !== "No More Books") {
            checkedBooks += 1 }
    
    }
    if (!isFound) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${checkedBooks} books.`)
    } else {

        console.log(`You checked ${checkedBooks} books and found it.`)

    }
}

oldBooks(["The Spot",

    "Hunger Games",

    "Harry Potter",

    "Torronto",

    "Spotify",

    "No More Books"])