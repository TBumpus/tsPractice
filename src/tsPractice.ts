interface Mountain{
    name:string;
    height:number;
}

let mountains:Array<Mountain> = [
    {name:"Kilimanjaro", height: 19341},
    {name:"Everest", height: 29029},
    {name:"Denali", height: 20310},
]

function findNameOfTallestMountain(mountainArray:Array<Mountain>) : string{
    
    let maxHeight:number = 0;
    let maxName:string = "";

    for(let i = 0; i < mountainArray.length; i++){
        if(mountainArray[i].height > maxHeight){
            maxHeight = mountainArray[i].height;
            maxName = mountainArray[i].name;
        }
    }
    
    return maxName;
}

console.log(findNameOfTallestMountain(mountains));


//---------------------------------------------

interface Product{
    name:string;
    price:number;
}

let products:Array<Product> = [
    {name:"saw", price: 119},
    {name:"door", price: 149},
    {name:"switch", price: 26},
]

function calcAverageProductPrice(productArray:Array<Product>) : number{
    let productAvg:number = 0;

    for(let i = 0; i < productArray.length; i++){
    productAvg = productAvg + productArray[i].price   
    }

    productAvg = productAvg / productArray.length;
    
    return productAvg;
}

console.log(calcAverageProductPrice(products));

//--------------------------------------------------------------------

interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory:Array<InventoryItem> = [
    {product:{name:"motor", price:10.00}, quantity:10},
    {product:{name:"sensor", price:12.50}, quantity:4},
    {product:{name:"LED", price:1.00}, quantity:20}
]

function calcInventoryValue(inventoryItemArray:Array<InventoryItem>) : number{

    let total:number = 0;

    for(let i = 0; i < inventoryItemArray.length; i++){

        total = total + (inventoryItemArray[i].product.price * inventoryItemArray[i].quantity)
    }
    return total;
}

console.log(calcInventoryValue(inventory));