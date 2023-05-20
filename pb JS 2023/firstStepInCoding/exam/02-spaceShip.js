    function spaceShip (input) {
        let width = Number (input [0]);
        let length=  Number (input [1]);
        let height = Number (input [2]);
        let heightToAstrounaut = Number (input [3]);
        let rocketVolume= width * length * height;
        let roomVolume = (heightToAstrounaut  + 0.40) * 2 * 2 
        let spaceForAustronauts = rocketVolume / roomVolume;
        if (spaceForAustronauts >=3 && spaceForAustronauts <= 10) {
            console.log (`The spacecraft holds ${Math.floor(spaceForAustronauts)} astronauts.`);
        } else if (spaceForAustronauts < 3) {
            console.log (`The spacecraft is too small.`);
        } else  { 
            console.log(`The spacecraft is too big.`);
        }
    }
    spaceShip (["3",
    "3", 
    "4",
    "1.68"])
    

