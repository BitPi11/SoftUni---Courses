function echoType(command) {
    console.log(typeof command)
    if (typeof (command) === "number" || typeof (command) === "string") {
        console.log(command)
    } else {
        console.log("Parameter is not suitable for printing")
    }


}

echoType('Hello, JavaScript!')
console.log("____________________")
echoType(null)
console.log("____________________")
echoType(18)