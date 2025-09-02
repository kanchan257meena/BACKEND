class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log("parent");
        
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);
        
    }
}

class Student extends Person{
    constructor(name,age,marks){
         super(name,age);
      this.marks=marks;
      console.log("student");
      
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);     
    } 
}


class Teacher extends Person{
      constructor(name,age,marks){
         super(name,age);
      this.marks=marks;
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);
        
    }
}


class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded"
    }
    eat(){
        console.log("i am eating");
        
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name)
    }

}

