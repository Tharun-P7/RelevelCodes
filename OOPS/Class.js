class Person{
    constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    }
    eat(){
        console.log("Person is eating");
    }
    sing(){
        console.log("Person is singing");
    }
    }

let p1 = new Person("Tharun",21,"Male");
let p2 = new Person("Vinay",22,"Female");  
console.log(p1);
console.log(p2);