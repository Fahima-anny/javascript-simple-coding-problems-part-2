let num1 = 56 ;
let num2 = 97 ;
// if(num1 > num2){
//     console.log("num1 is big")
// }
// else{
//     console.log("num2 is big")
// }

function getMax(num1, num2){
if(num1 > num2){
    return num1 ;
}
else{
    return num2 ;
}
}
let biggerNum = getMax(num1, num2)
let biggerNum2 = getMax(99,33)
let biggerNum3 = getMax(44,55)
let biggestNum = getMax(biggerNum2, biggerNum3)
// console.log(biggestNum)
// console.log(biggerNum)





function bigInThree(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return n1
    }
    else if(n2 > n1 && n2 > n3){
        return n2
    }
    else{
        return n3
    }
}
let biggerOfThree = bigInThree( 390 , 221 , 411 )
// console.log(biggerOfThree) 



let unlimitedBig = Math.max( 12 , 17 , 22 , 11 , 32 , 9 , 26 )
// console.log(unlimitedBig)




let heights = [ 66, 65, 54, 62, 56, 50 ]
// console.log(Math.max(...heights))


function minHeight(heights){
let min = heights[0]
for(const x of heights){
    if( x < min){
        min = x
    }
}
return min ;
}
let minHeightPerson = minHeight(heights)
// console.log(minHeightPerson)



function totalBill(shirtQuantity, pantQuantity, shoeQuantity){
    let shirtPrice = 500 ; 
    let pantPrice = 300 ;
    let shoePrice = 900 ;
    let totalShirtBill = shirtPrice * shirtQuantity ;
    let totalPantBill = pantPrice * pantQuantity ;
    let totalShoeBill = shoePrice * shoeQuantity ;
    let totalBill = totalPantBill + totalShirtBill + totalShoeBill ;
    return totalBill ;
}
let myBill = totalBill(3, 2, 1)
// console.log(myBill)


let phones = [
    {name:'samsung', price:25000, camera:'12mp'},
    {name:'oppo', price:27000, camera:'15mp'},
    {name:'xaomi', price:31000, camera:'20mp'},
    {name:'walton', price:9000, camera:'10mp'},
    {name:'HTC', price:25000, camera:'14mp'},
    {name:'Iphone', price:200000, camera:'18mp'}
]
function cheapest(phones){
    let cheapestPhone = phones[0].price
    // console.log(cheapestPhone)
    for(const x of phones){
        if( x.price < cheapestPhone ){
            cheapestPhone = x.price
        }
    }
    return cheapestPhone
}
let cheapestPhone = cheapest(phones)
// console.log(cheapestPhone)


let products = [
    {product:'shampoo', price:300, quantity:2},
    {product:'soap', price:100, quantity:6},
    {product:'wheel powder', price:500, quantity:1}
]

function myShoppingBill(products){
    let sum = 0 ;
    for(let product of products){
        sum =sum + (product.price * product.quantity) ;
        // console.log(product.price , product.quantity)
        // console.log(sum)
    }
    return sum ;
}
let bill = myShoppingBill(products)
// console.log(bill)


function discount(num){
     
    if(num <= 100){
let total = num * 100 ;
return total
    }
    else if(num <= 200){
        let total = num * 90 ;
        return total ;
    }
    else{
        let total = 70 * num ;
        return total ;
    }
}
let discountPrice = discount(301)
// console.log(discountPrice)


function multiDiscount (amount) {
let first100price = 100 ;
let second100price = 90 ;
let remainingPrice = 70 ;
if(amount <= 100){
    let bill = amount * first100price ;
    return bill ;
}
else if(amount <= 200){
    let first100Bill = first100price * 100 ;
    let remainingBill = second100price * (amount-100) ;
    let bill = first100Bill + remainingBill ;
    // console.log(first100Bill,remainingBill,bill)
    return bill ;
}
else{
    let first100Bill = 100 * first100price ;
    let second100Bill = 100 * second100price ;
    let remainingBill = (amount-200) * remainingPrice ;
    let bill = first100Bill + second100Bill + remainingBill ;
    return bill ;
}
}
let multiDiscountBill = multiDiscount(140)
// console.log(multiDiscountBill)


function add(a,b){
    let sum = a + b ;
    return sum ;
}
function divide(a,b){
    let division = a/b ;
    return division ;
}
function subtract(a,b){
    let subtraction = a-b ;
    return subtraction ;
}
function multiply(a,b){
    let multiplication = a*b ;
    return multiplication ;
}
function calculate(a , b , operation){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please provide a valid number'
    }
    else if(operation === 'add'){
       let result = add(a,b) ;
       return result ;
    }
    else if(operation === 'divide'){
        let result = divide(a,b)
        return result ;
    }
    else if(operation === 'subtract'){
        let result = subtract(a,b)
       return result ; 
    }
    else if(operation === 'multiply'){
        let result = multiply(a,b)
        return result ;
    }
    else{
        return 'operation undefined'
    }
}
let myCalculation = calculate(3 ,'multiply')
// console.log(myCalculation)

function name(a,b){
    if(typeof a !== 'string' || typeof b !== 'string'){
        return 'please give a string'
    }
    else{
        return a +' ' + b ;
    }
}
let fullName = name('fahima','akter')
// console.log(fullName)

function obj(obj){
    if(typeof obj === 'object'){
        return obj.price ;
    }
    else {
        return 'Insert an object' ;
    }
}
let object = { product:'molom', price:20 , quantity:2 }
let price = obj(5)
// console.log(price)


function arrChecker(ar){
    if(Array.isArray(ar)=== false){
        console.log('Insert an array')
    }
    else{
        console.log("good to go")
    }
}

let ar = [1,3,5,3]
// arrChecker(ar)



function numberArray(array){
    if(!Array.isArray(array)){
        return 'Invalid Array'
    }
    let numberArray = [ ] ;
    for(const ar of array){
        if(typeof ar === 'number' &&  !isNaN(ar)){
numberArray.push(ar) ;
        }
    }
    return numberArray
}
let wrongArray = [ -1, NaN , 's' , 0 , 18 ]
let onlyNumArray = numberArray(wrongArray)
// console.log(onlyNumArray)




function pass(person){
    if(person.name === undefined || person.website === undefined || person.birthYear === undefined || person.birthYear.toString().length !== 4 ){
        return 'Invalid'
    }
    let websiteName = person.website[0].toUpperCase()+person.website.slice(1)
    let pass = websiteName + '#' + person.name + '@' + person.birthYear ;
    return pass ;
}

let person = { name:'fahima', birthYear:1997, website:'instagram' } ;
let password = pass(person) ;
// console.log(password) ;



function monthlySavings(array,expense){
    if(!Array.isArray(array) || typeof expense !== 'number'){
        return 'Invalid' ;
    }
let sum = 0 ;
for(const ar of array){
    if(ar>=3000){
        let remaining = ar - (ar*0.2) ;
        sum = sum + remaining ;
    }
  else{
    sum = sum + ar ;
  }
}
let saving = sum - expense ;
if(saving<0){
    return 'earn more' ;
}
else{
    return saving ;
}
}
let incomeArray = [ 1000 , 2000 , 3000 ] ;
let expense = 5500 ;
let savings = monthlySavings(incomeArray,expense) ;
// console.log(savings) ;



function moneyCalculator(ticket){
    if(ticket<0){
        return 'Invalid Ticket Sold Number'
    }
let perTicket = 120 ;
let perDayExpense = 500 + ( 8 * 50 ) ;
let income = ( ticket * perTicket ) - perDayExpense ;
return income ;
}
let ticketSold = 10 ;
let income = moneyCalculator(ticketSold) ;
// console.log(income)



function nameChecker(name){
    let contains = [ 'a', 'e', 'i', 'o', 'u', 'w', 'y' ]
    let lastLetter = name.toLowerCase().slice(-1)
    let result = false ;
    for(const x of contains){
        if( lastLetter === x ){
            result = true ;
        }
    }
    return result ? 'good name' : 'bad name'
}
let name2 = 'anisa'
let checkName = nameChecker(name2)
console.log(checkName)






















