//Task 1
document.write(`<br>`)
document.write(`<h1>Task 1: </h1>`)

let userVal = prompt('Task 1: Enter Positive Number With decimals')
document.write(`<h3>Number: ${userVal}</h3>`)
document.write(`<h3>Round Off Value: ${Math.round(userVal)}</h3>`)
document.write(`<h3>Floor Value: ${Math.floor(userVal)}</h3>`)
document.write(`<h3>Ceil Value: ${Math.ceil(userVal)}</h3>`)


//Task 2
document.write(`<br>`)
document.write(`<h1>Task 2: </h1>`)

let userVal_2 = prompt('Task 2: Enter Negative Number With decimals')
document.write(`<h3>Number: ${userVal_2}</h3>`)
document.write(`<h3>Round Off Value: ${Math.round(userVal_2)}</h3>`)
document.write(`<h3>Floor Value: ${Math.floor(userVal_2)}</h3>`)
document.write(`<h3>Ceil Value: ${Math.ceil(userVal_2)}</h3>`)


//Task 3
document.write(`<br>`)
document.write(`<h1>Task 3: Display The Absolute Value Of Number </h1>`)

let num = -4
let absolute = Math.abs(num)
document.write(`<h3>The Absolute Value Of ${num} Is ${absolute}</h3>`)


//Task 4
document.write(`<br>`)
document.write(`<h1>Task 4: Random Dice Value</h1>`)

let random = Math.round(Math.random()*50)
document.write(`<h3>Random Dice Value: ${random}</h3>`)


//Task 5
document.write(`<br>`)
document.write(`<h1>Task 5: Coin Toss</h1>`)

let toss = Math.round(Math.random())
if(toss == 0){
  document.write(`<h3>Random Coin Value: Heads</h3>`)
}else if(toss == 1){
    document.write(`<h3>Random Coin Value: Tails</h3>`)
}


//Task 6
document.write(`<br>`)
document.write(`<h1>Task 6: Generate Random Number Between 1 And 100</h1>`)

let generateNum = Math.round(Math.random()*100)
document.write(`<h3>Random Number Between 1 And 100: ${generateNum}</h3>`)


//Task 7
document.write(`<br>`)
document.write(`<h1>Task 7: User Weight</h1>`)

let userWeigth = prompt('Enter Your Weight In Kilograms')
document.write(`<h3>The Weight Of User Is ${userWeigth}kg</h3>`);


//Task 8
document.write(`<br>`)
document.write(`<h1>Task 8: Secret Number Between 1 and 10</h1>`)

let secretVal = prompt('Task 8: Secret Number Between 1 and 10','Enter Secret Number Between 1 and 10')
let secretNum = 8

if(secretVal == secretNum){
   document.write(`<h3>🎊Congratulations🎊 Correct Number: ${secretNum}</h3>`)
}
else{
    document.write(`<h3>Try Again 🙁</h3>`)
}
