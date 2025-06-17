class Super{
    constructor(){
        this.sum1;
        this.sum2;

    }
     add(){
        console.log("ADD of 2 numbers: "+(this.sum1+this.sum2));
        
    }

}
class Sub extends Super{
    constructor(){
        super();
        this.sum3;
    }
    add(){
        super.add();
        console.log("ADD of 3 numbers: "+(this.sum1+this.sum2+this.sum3));
    }

}
let obj = new Sub();
obj.sum1=10;
obj.sum2=20;
obj.sum3=30;
obj.add();