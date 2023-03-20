describe('empty spec', () => {
     it('javascript algorith', ()=>{
})
})

let arr = [2, 3, 4, 5, 5, 6, 7, 8];

// Calculate the sum and multiply by 2
let sum = arr.reduce((total, num) => total + num, 0) * 2;
console.log(sum)

// Find the two largest values in the array
let sortedArr = arr.sort((a, b) => b - a);
let highestTwoProduct = sortedArr[0] * sortedArr[1];
console.log(highestTwoProduct)

// Compare the results and return true or false
const returnBoolean = (a, b) => {
    if (a > b) {
        return true;
      } else {
        return false;
      }
    }

    let boolean = returnBoolean(sum,highestTwoProduct);
console.log(boolean);
