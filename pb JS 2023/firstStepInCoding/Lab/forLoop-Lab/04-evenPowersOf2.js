function evenPowersOf2 (input) {
    let n = Number (input [0]);
    let num = 1;
    for (i = 0; i <=n; i +=2) {
        console.log (num);
        num =  num *  Math.pow (2, 2) ;
    }
}
evenPowersOf2 (["6"]);