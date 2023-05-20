function building(input) {
    let floor = Number(input[0]);
    let flat = Number(input[1]);

    for (let f = floor; f > 0; f--) {
        let buff = "";
        for (let ap = 0; ap < flat; ap++) {

            if (f === floor) {
                buff += `L${f}${ap} `
            }
            else if (f % 2 === 0) {
                buff += `O${f}${ap} `
            } else {
                buff += `A${f}${ap} `
            }
        }

        console.log(buff)
    }

}

building(["6",

    "4"])