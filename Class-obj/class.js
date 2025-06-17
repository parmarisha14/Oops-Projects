class Student{
    constructor(){
        this.name='';
        this.age='';
        this.gender='';
        this.rollno='';
    }
    setData(name,age,gender,rollno){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.rollno=rollno;
    }
    getData(){
        console.log(`The Student Name:${this.name}`);
        console.log(`The Student Age:${this.age}`);
        console.log(`The Student Gender:${this.gender}`);
        console.log(`The Student Roll No:${this.rollno}\n`);

    }
}
let stud1=new Student();
stud1.setData('Rahul',20,'Male','S1');
stud1.getData();
let stud2=new Student();
stud2.setData('Rohan',21,'Male','S2');
stud2.getData();