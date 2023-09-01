// const arr = [1,2,3,4,5,6,7,8,9,11,12]
// const func = () => {
//    const newArr = []
//    for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 == 0 && Number((Math.pow(arr[i],2)).toString().slice(- 1)) !== 4){
//          newArr.push(Math.pow(arr[i], 2))
//       }
//    }
//    return newArr
// }
// console.log(func());


// const getSumElementsFirstNumberOneOrTwo = (arr) => {
//    let sum = 0
//    for(let i = 0; i < arr.length; i++){
//       if(String(arr[i])[0] == 1 || String(arr[i])[0] == 2){
//          sum += arr[i]
//       }
//    }
//    return `${sum}: this is ${typeof sum}`

// }
// console.log(getSumElementsFirstNumberOneOrTwo([10,20,30,21,50]));

// const string = '{"key": "value", "array": [1, 2, 3], "arr":[{},100], "methods":"{getData(){return data},}",}'; 
// const obj = JSON.parse(string); 
// console.log(obj);
// console.log(obj.key);
// console.log(obj.array);
// console.log(obj.methods);

const str = "{a:1, b:2, c:3, arr:[1,2,3]}"; 
const obj = (new Function('return ' + str))(); 
const json = JSON.stringify(obj); 

console.log(json); 
