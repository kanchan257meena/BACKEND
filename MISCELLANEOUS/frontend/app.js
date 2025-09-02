let arr=[1,2,3];
arr.sayHello=()=>{
    console.log("hello");
    
}

/*
//FACTORY FUNCTION
function personmaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`hi i am ${name}`);
            
        }
    }
    return person;
}

//let p1=personmaker("adam",25);
//p1.talk != p2.talk
*/


/*
//NEW OPERATOR {constructors}

function Person(name,age){
  this.name=name;
  this.age=age;
}
  Person.prototype.talk = function(){
  console.log(`Hi , my name is ${this.name}`);
  }

let p1=new Person("adam",25);
let p2=new Person("adam",25);
*/



/*CONSTRUCTOR WITH CLASSES*/
class Person{
    constructor(name,age){
         this.name=name;
      this.age=age; 
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);
        
    }
}