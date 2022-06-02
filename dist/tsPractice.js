"use strict";
// interface Mountain{
//     name:string;
//     height:number;
// }
let products = [
    { name: "saw", price: 119 },
    { name: "door", price: 149 },
    { name: "switch", price: 26 },
];
function calcAverageProductPrice(productArray) {
    let productAvg = 0;
    for (let i = 0; i < productArray.length; i++) {
        productAvg = productAvg + productArray[i].price;
    }
    productAvg = productAvg / productArray.length;
    return productAvg;
}
console.log(calcAverageProductPrice(products));
let product1 = { name: "motor", price: 10.00 };
let product2 = { name: "sensor", price: 12.50 };
let product3 = { name: "LED", price: 1.00 };
let inventory = [
    { product: product1, quantity: 10 },
    { product: product2, quantity: 4 },
    { product: product3, quantity: 20 }
];
function calcInventoryValue(inventoryItemArray) {
    let total = 0;
    for (let i = 0; i < inventoryItemArray.length; i++) {
        total = total + (inventoryItemArray[i].product.price * inventoryItemArray[i].quantity);
    }
    return total;
}
console.log(calcInventoryValue(inventory));
