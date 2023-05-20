function minningRig(input) {
    let priceForOneCard = Number(input[0])
    let priceForConnector = Number(input[1]);
    let priceForElectricity = Number(input[2]);
    let profitForDay = Number(input[3]);
    let otherComponents = 1000;



    let allSpendMoney = (priceForOneCard * 13) + (priceForConnector * 13) + otherComponents;
    let profitFromCart = profitForDay - priceForElectricity;
    let ProfitForAllCarts = profitFromCart * 13;
    let result = (allSpendMoney / ProfitForAllCarts)
    console.log(allSpendMoney)
    console.log(Math.ceil(result))
}
minningRig([
    "700",
    "15",
    "0.20",
    "2"
])

