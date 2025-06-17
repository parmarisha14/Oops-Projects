class Student{
    constructor(rno,name,course){
        this.rno=rno;
        this.name=name;
        this.course=course;

    }
   
    display(){
        console.log("Roll No : "+this.rno);
         console.log("Name : "+this.name);
          console.log("Course: "+this.course,"\n");
    }

}
let stud1=new Student(1,"Anju","BCA");
stud1.display();
let stud2=new Student(2,"Suraj","B.Com");
stud2.display();

