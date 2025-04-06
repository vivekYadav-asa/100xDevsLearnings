//learning about map ,filter ,arrow function
//q-1 given an array , give me back a 
// new array in which every value is mutli by 2
//solution 1
const input=[1,4,3,2,5];
// const newArray=[];
// for(let i=0; i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray)
//solution 2 using maps
const ans=input.map(function(i){
    return i*2;
});
console.log(ans);



