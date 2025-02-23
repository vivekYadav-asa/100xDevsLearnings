// // //syntax of javascript
// // // variables-->var , let , const
// // //assignment
// // var favoriteColor="yello";
// // const height=175;
// // let isLikedPizza=true;
// // console.log(favoriteColor);
// // console.log(height);
// // console.log(isLikedPizza);
// //dataType
// //number,string,boolen,array
// // array
// // let number=[1,2,3];
// // console.log(number);
// // for(let i=0;i<number.length;i++){
// //     number[i];
// // }
// // console.log(number[1]);
// //function
// //function decalertion
// function greet(name){
//     return "Namste ," + name;
// }
// //function call
// let message=greet("vivek");
// // console.log(message);
// function sum(a,b){
//     return a+b;
// }
// // console.log(sum(1,2));
// let totalSum=sum("hello","hitesh");
// // console.log(totalSum);
// function canVote(age){
//     if(age>18){
//         return "you can vote & you are adult";
//     }
//     else{
//         return "you cannot vote & you are minor";
//     }
// }
// // console.log(canVote(2));
// function great(user){
//     console.log("Mr."+user.name+" your age is "+user.age +"you are"+user.gender);
    
// }
// let user={
//     gender:"male",
//     name:"harkirat",
//     age:21
// }
// great(user);

// let s1 = "javascript";
// let s2 = s1.split('').sort().join('');
// console.log(s2);
// let text = "How are you doing today?";
// const myArray = text.split(" ")
// console.log(myArray);

// function calculateTotalSpentByCategory(transactions) {
//   const categoryTotalMap = {};// creation of  empty object
//   transactions.forEach((transaction) => {
//     // looping throught the transaction to get its properties
//     const { category, price } = transaction;
//     if (category in categoryTotalMap) {
//       // updating the value
//       categoryTotalMap[category] += price;
//     } else {
//       categoryTotalMap[category] = price;
//     }
//   });
//   const result = [];
//   // an array to store the result
//   for (const category in categoryTotalMap) {
//     result.push({ category, totalSpent: categoryTotalMap[category] });
//   }
//   // returning the result
//   return result;
// }
// // calculateTotalSpentByCategory()









