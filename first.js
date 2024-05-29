/*console.log("Hello World");
let x=parseInt(" 134 Hello");
console.log(x);
let num1=18;
let num2=40;
if(num1>num2)
    console.log(`${num1}`);
else
   console.log(`${num2}`);
let result = num1>num2? num1:num2;
console.log(result);
result='monday';
switch(result){
    case 'monday':
        console.log("hello");
        break;
    case 'tuesday':
        console.log("hello");  
        break;  
}
let i=0;
while(i<5){
    console.log('Arjun');
    i=i+1;
}
do{
    console.log('Arjun');
    i=i+1;  
}while(i<5);
for(i=0;i<5;i++){
    console.log('Aira');
}
let name = "Deepika";
for(i of name){
    console.log(i);
}
const student={
    first :"Deepika",
    last :"Kolli",
    id :"322103311025",
}
for(let i in student){
    console.log("id: ",i,"value:",student[i]);
}
const enroll={
    id:321,
    phone:530016,
    student:"Devika",
}
for (key in enroll){
    console.log("key: "+key+'\n'+"value: "+enroll[key]);
}
let str="Deepika";
console.log(str[1]);
console.log(str.toLowerCase());
console.log(str.replace("k","1"));
console.log(str.slice(3));
let a = prompt("Enter the number");
console.log("@"+a);
let heroes=["captain","iron","batman","aqua"];
console.log(heroes);
for(i in heroes){
    console.log(heroes[i]);
}
heroes.push("deepika");
console.log(heroes);
heroes.pop();
console.log(heroes);
console.log(heroes.splice(1,2,"Thanos"));
console.log(heroes);*/
/*function myfun(msg){
    console.log(msg);
}
myfun("hi");
function add(num1,num2,num3){
    num3=num1+num2+num3;
    console.log(num3);
}
add(1,2,3);
let result=function(num1,num2,num3){
    return num1+num2+num3;
}
//let sum=result(1,2,4);
console.log(result(12,1,0));
let sum=(num1,num2)=>{
   return num1+num2;
}
console.log(sum(1,2));
let a=[1,2,3,4,5];
console.log(a.length);
a.forEach(val=>{
 console.log(val);
});
let student={
     id:123,
     first:"Emil",
     greet:function(){
        console.log("hello");
     }
}
student.greet();
console.log(student["id"]);*/
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click",()=>{
    console.log("Box is clicked");
    button.innerText;
    button.disabled=true;
});
let div = document.querySelector("div");
console.log(div.textContent);
/*div.innerHTML="<p><b>APNACOLLEGE</b></p>"*/