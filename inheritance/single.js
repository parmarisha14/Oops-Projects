class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printMsg(){
        console.log(`The Animal name is:${this.name} & the age is ${this.age}`);

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
let dog=new Dog("Dog",10);
dog.printMsg();
dog.bark();