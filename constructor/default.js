class Person{
    constructor(){
        
        this.name="ABC";
        this.department="Marketing";
        this.salary=20000;
    }
    display(){
        console.log("Name: "+this.name);
        console.log("Department: "+this.department);
        console.log("Salary: "+this.salary,"\n");
    }
}
let per1=new Person();
per1.display();
