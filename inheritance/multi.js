class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;


    }
    printMsg(){
        console.log(`The name is:${this.name} & the age is ${this.age}`);

    }
}
class Dog extends Animal{
    constructor(name,age){
        super(name,age)
    }
    bark(){
        
        console.log("Barking...");
    }
}
class BabyDog extends Dog{
      constructor(name,age){
        super(name,age)
    }
    eat(){
        
        console.log("Eating....");
    }
}
let dog=new BabyDog("Dog",10);
dog.printMsg();
dog.bark();
dog.eat();
