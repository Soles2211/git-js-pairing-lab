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

//Write a function isNegative that takes in a number parameter and returns true is the number is a negative value and false is the number is a positive value.

const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

//console.log(isNegative(Math.PI));

// Write a function triangleArea that takes in the height and base of a triangle and returns the area of the triangle.

const triangleArea = (height, base) => {
   let area = (height * base) * 0.5
   return area;
};
// console.log(triangleArea(5, 7))

// Write a function betweenTwentyAndFourty that takes in a number parameter and checks whether a given integer is within 20 to 40. It returns true if it is and false if not.

const betweenTwentyAndForty = (num) => {
    if (num >= 20 && num <= 40) {
        return true;
    } else { 
        return false;
    }
}

// console.log(betweenTwentyAndForty(25));

// Write a function largest that takes in three number parameters and returns the largest of the values.

const largest = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3){
        console.log(num2)
    } else if (num3 > num1 && num3 > num2){
        console.log(num3)
    }
}

//largest(30, 22, 17)

//Write a function absoluteNineteen to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const absoluteNineteen = (num) => {
    let abs = Math.abs(num - 19);
    if (num > 19) {
        return abs * 3;
    } else {
        return abs;
    }
}

//console.log(absoluteNineteen(39));

//Write a function switchLetters that creates a new string from a given string changing the position of first and last characters.

const switchLetters = (str) => {
  if (str.length <= 1) return str;
  return str[str.length - 1] + str.slice(1, -1) + str[0];
};

// console.log(switchLetters("anne"))         //return "enna"
// console.log(switchLetters("hello world"))  //return "dello worlh"
// console.log(switchLetters("a"))            //return "a"
// console.log(switchLetters(""))

// Write a function changeString to replace every character in a given string with the character following it in the alphabet/

const changeString = (str) => {
    let chr = str.split("");
    for (let i = 0; i < str.length; i++) {
        let x = chr[i].charCodeAt() - "a".charCodeAt();
        x = (x + 1) % 26;
        chr[i] = String.fromCharCode(x + "a".charCodeAt());
    }
    return chr.join("");
}

console.log(changeString("add"));