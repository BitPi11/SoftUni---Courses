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


// На първия ред: цена на една видео карта – цяло число в интервала [1 … 2000]
// •	На втория ред: цена на един преходник – цяло число в интервала [1 … 50]
// •	На третия ред: цена на консумирания ток от карта за ден – реално число в интервала [0.01 ... 10.00]
// •	На четвъртия ред: печалба от една карта за един ден – реално число в интервала [1.00 ... 100.00]
// Общо похарчените пари по машината
// •   Времето за възвръщане на инвестицията в дни (закръглени до по-голямото цяло число)
