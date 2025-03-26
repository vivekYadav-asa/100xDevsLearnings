//as-1create a commmand line interface that lets the user spacify a file path andthe nodejs processs counts the number of word inside it
 const thenable={
    then:function(onFulfilled){
        setTimeout(()=>onFulfilled(42),1000);
    }
 };
  async function main(){
    await thenable
    console.log("hi there");
  }
  main();