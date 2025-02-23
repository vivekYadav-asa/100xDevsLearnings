function setTimeoutPromisifed(duration){
   return new Promise(function(reslove){
    setTimeout(reslove,duration);
   });
}
// function callback(){
//     console.log("1 second has passed");
    
// }
// setTimeoutPromisifed(1000).then(function(){
//     console.log("hi");
// setTimeoutPromisifed(3000).then(function(){
//     console.log("there");
//     setTimeoutPromisifed(5000).then(function(){
//             console.log("harkirat");
//     })
// })
// })

// setTimeoutPromisifed(1000).then(callback);s
// callback hell
// setTimeout(function (){
//     console.log("hi");
//     setTimeout (function (){
//         console.log("there");
//         setTimeout(function(){
//             console.log("harkirat");
            
//         },5000);
        
//     },3000);
// },1000);

// promise chaning
// setTimeoutPromisifed(2000).then(function(){
//     console.log("hi");
//     return setTimeoutPromisifed(5000);
    
// }).then(function(){
//     console.log("there");
//     return setTimeoutPromisifed(9000);
// }).then(function(){
//     console.log("harkirat");
    
// });
async function solve(){// returns a promise but doesnt seems it;
    await setTimeoutPromisifed(1000);
    console.log("hi");
    await setTimeoutPromisifed(3000);
    console.log("hello this is");
    await setTimeoutPromisifed(5000);
    console.log("harkirat");
    
}
solve();