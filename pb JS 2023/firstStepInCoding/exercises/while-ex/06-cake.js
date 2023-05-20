function cake(input) {
    let index = 0;
    let w = Number(input[index])
    index++
    let h = Number(input[index])
    index++
    let command = input[index];
    index++

    let cakeSize = w * h;
    let cakePiece = 0;
    let allEatenPieces = 0;
    while (command !== "STOP") {
        cakePiece = Number(command)
        command = input[index];
        index++
        allEatenPieces += cakePiece

        if (cakeSize < allEatenPieces) {
            break;
        }
    }
    if (cakeSize < allEatenPieces) {
        let pieceNeedet = allEatenPieces - cakeSize;
        console.log(`No more cake left! You need ${pieceNeedet} pieces more.`)
    } else {
        let piecesLeft = cakeSize - allEatenPieces
        console.log(`${piecesLeft} pieces are left.`)
    }

}

cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])