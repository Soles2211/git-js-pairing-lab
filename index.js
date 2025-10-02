//Code your solutions in this file
// Write a function fiveToOneHundred that console logs all numbers from 5 to 100.

const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++){
        console.log(i);
    }
}

//fiveToOneHundred();

//Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3.

const multiplesOfThree  = (n) => {
    for(let i = 1; i <= n;i++ ){
        if(i % 3 === 0){
            console.log(i);
        } 
    }
}

// multiplesOfThree(100);

// Write a function multiplesOfThreeOrFive that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.

const multiplesOfThreeOrFive = (n) => {
    for(let i = 1; i <= n;i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        } 
    }
}

//multiplesOfThreeOrFive(100);

// Write a function untilNum that takes in an integer parameter and console logs all numbers from 1 to that number.

const untilNum = (num) => {
    for (let i = 1; i <= num; i++){
     console.log(i)
    }
};

//untilNum(15);

//Write a function multiply that takes in two number parameters and returns their product.

const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

//console.log(multiply(2, 4));
// Write a function add that takes in two number parameters and returns their sum. But if the two values are the same, return triple their sum!
const add = (num1, num2) => {
    let result = num1 * num2
    if (num1 === num2){
        let result2 = (num1 + num2) * 3
        return result2
    } else {
        return result
    }
}

// console.log(add(2, 2));