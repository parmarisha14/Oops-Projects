class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    setEmp(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getEmp() {
        console.log(`Employee Name:${this.name}`);
        console.log(`Employee Age:${this.age}`);
        console.log(`Employee Salary:${this.salary}\n`);
    }
}

class Salary extends Employee {
    constructor(name, age, salary, hra, ma, pf) {
        super(name, age, salary);
        this.hra = hra;
        this.ma = ma;
        this.pf = pf;
        this.grossSalary = this.hra + this.ma - this.pf;
        this.netSalary = this.grossSalary + this.salary;
    }

    getSal() {
        super.getEmp();
        console.log(`Employee grossSalary is ${this.grossSalary}`);
         console.log(`netSalary is ${this.netSalary}`);
             
    }
}


let sal = new Salary("Sejal",22,40000,12000,15000,2000);
sal.getSal();