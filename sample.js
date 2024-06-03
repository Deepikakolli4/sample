//synchronus
function add(a,b,sum){
    console.log("Hello");
    sum(a,b);
}
add(2,3,(a,b)=>{
    let result=a+b;
    console.log(a+b);
})
//asynchronous
function greet(){
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},5000);
console.log("three");
console.log("four");
}
greet();
console.log(typeof(greet));
//nested if-else
age = 40;
if(age>0 && age<=60){
 if(age>18){
    console.log("middle age");
 }else{
    console.log("child");
 }
}else{
    console.log("more age");
}
//nested loops;
for(let i=1;i<5;i++){
    for(let j=1;j<5;j++){
        console.log(i*j);
    }
}
// call back hell is the nested call backs;
function getData(dataid,nextData){
    setTimeout(()=>{
        console.log(dataid);
        if(nextData){
            getData(2);
            getData(3);
        }
    },1000);
}
getData(1,()=>{
  getData(2,()=>{
    getData(3,()=>{
        getData(4);
    });
  });
})
//promises
let promise =new Promise((resolve,reject)=>{
    console.log("I am promise");
    resolve(console.log("success"));
})
console.log(promise);
function getData(dataid,nextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataid);
            if(nextData){
                console.log(nextData);
            }
            resolve(console.log("success"));
        },1000);
    })
}
let promise1=getData(123,98);
function greet(){
    return new Promise((resolve,reject)=>{
        reject("netwok error");
    })
}
let p1=greet();
p1.then((res)=>{
    console.log("fulfilled");
})
p1.catch((err)=>{
    console.log("rejected");
})
//promise chaining it is .then nesting
let promises =new Promise((resolve,reject)=>{
    console.log("I am promise");
    resolve(console.log("success"));
})
let promise2 =new Promise((resolve,reject)=>{
    console.log("I am promise");
    reject(console.log("error"));
})
console.log(promises);
console.log(promise2);
promise1.then((res)=>{
    console.log("fulfilled");
})
promise1.catch((err)=>{
    console.log("error");
})
promise2.then((res)=>{
    console.log("fulfilled");
})
promise2.catch((err)=>{
    console.log("error");
})
function Async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000)
    })
}
function Async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
        },4000)
    })
}
console.log("fetching data1...");
Async1().then((res)=>{
    console.log("Fulfilled");
    console.log("fetching data2...");
    Async2().then((res)=>{
        console.log("Fulfilled");
    })
})
Async1().catch((err)=>{
    console.log("error");
Async2().catch((err)=>{
    console.log("error");
})
})
//async-await
function api1(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data 1");
        resolve("sucess");
      },4000);
    })
}
function api2(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data 2");
        resolve("sucess");
      },4000);
    })
}
async function getWeatherData(){
    await api1();
    await api2();
}
(async function getWeatherData(){//Immediately called without external calling;
    await api1();
    await api2();
})();
getWeatherData();
