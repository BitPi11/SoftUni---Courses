function newPassword (input) {
    let i = 0;
    let name = input [i];
    i++
    let password = input [i];
    i++
    let data = input [i]
    i++
    while (data !== password ) {
        data = input [i]
        i++ 
    }
    console.log (`Welcome ${name}!`);
}
newPassword (["Nakov",

"1234",

"Pass",

"1324",

"1234"])