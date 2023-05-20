function yardGreening (input) {
    let yard = Number (input [0]);
    let price = Number (yard * 7.61);
    let discount = Number (0.18 * price );
    let finalPrice = Number (price - discount);
    console.log (`The final price is: ${finalPrice} lv.`);
    console.log (`The discount is: ${discount} lv.`);
}

yardGreening ([550]);