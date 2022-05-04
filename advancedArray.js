const array =[1, 5, 10, 15, 25];
const fruits = ["apple", "orange", "cherry"];
let double = [];
let fruitsForEach = [];

//forEach
const arrayForEach = array.forEach(num => double.push(num * 2) )
console.log('forEach: ', double)

const arrayFruits = fruits.forEach((item, arr) => {
    let text = '';
    text += arr + ': ' + item;
    fruitsForEach.push(item) 
});
console.log('forEach: ', fruitsForEach); 

//map
const mapArray = array.map(num => num * 4)
console.log('map: ', mapArray);

const mapFruits = fruits.map(item => item);
console.log('map: ', mapFruits);

//filter
const filterArray = array.filter(num => (num > 5))
console.log('filter: ', filterArray);

const filterArrayFruits = fruits.filter( notFruit => {
    if(notFruit !== 'orange') {
        return notFruit;
    }
});
console.log('filter: ', filterArrayFruits);

//reduce
const reduceArray = array.reduce((total, num) => {
        return total + Math.round(num);
    },
0);
console.log(reduceArray);