/*
 
 Abstraction

 can be achieved by using prototype

 */

 
//Prototype : It is an object

function Student(){
    this.name= "Tharun";
    this.age=22;
}
Student.prototype.age=21;

console.log(Student.prototype);
let student = new Student();
console.log(student);


/**
 * Encapusulation
 */

class Person{
    constructor(){
        var name;
        var age;
    }
    getname(){
        return this.name;
    }
    setname(name){
        this.name=name;
    }
    getage(){
        return this.age;
    }
    setage(age){
        this.age=age;
    }
}
var personobj = new Person();
console.log(personobj);

personobj.setname ("Tharun");
console.log(personobj);
console.log(personobj.getname());



/**
 * Inheritance
 */

class Animal{
    eat(){
        console.log("Animal is eating");
    }
}
class Cat extends Animal{

}
var cat = new Cat();
cat.eat();



/**
 * Polymorphism
 */

class Animals{
    eat(){
        console.log("Animal is eating");
    }
}
class Cats extends Animals{
    eat(){
        console.log("cat is eating");
    }
}
var animal = new Animals();
animal.eat();
animal = new Cats();
animal.eat();