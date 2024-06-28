class Car{
    constructor(){
        console.log("Hello");
    }
    brand(name){
        this.brand=name;
        console.log("Brand: ",this.brand);
    }

}
class Audi extends Car{
    constructor(){
        super();
    }
}
let car1=new Audi();
car1.brand("Audi");
class Fruits{
    constructor(){
        console.log("i am fruits");
    }
    eat(){
        console.log("you can eat me");
    }
    sleep(){
        console.log(" not sleeping");
       }
}
class Progress{
    sleep(){
     console.log("sleeping");
    }
}
let Progressobj=new Progress();
 Progressobj.__proto__=Fruits.prototype;
 Progressobj.eat();
 Progressobj.sleep();
