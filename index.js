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