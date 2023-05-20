function coins (input){
    let money = Number (input [0])
    let counter = 0
    let MoneyInCoins = Math.floor(money* 100)
    
    while (MoneyInCoins > 0) {
        if (MoneyInCoins >= 200 ) {
            MoneyInCoins -=200
        } else if (MoneyInCoins >=100) {
            MoneyInCoins -=100
        } else if (MoneyInCoins >= 50) {
            MoneyInCoins -=50
        } else if (MoneyInCoins >= 20) {
            MoneyInCoins -= 20
        } else if (MoneyInCoins>= 10) {
            MoneyInCoins -= 10
        } else if (MoneyInCoins >= 5) {
            MoneyInCoins -= 5
        } else if (MoneyInCoins >= 2) {
            MoneyInCoins -= 2
        } else if (MoneyInCoins >= 1) {
            MoneyInCoins -= 1
        }

counter ++
    }
    console.log (counter);
}

coins (["0.56"])

