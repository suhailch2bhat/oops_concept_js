// simple class
// class person{
//   constructor(name){
//     this.name=name;
//   }
//   greet(){
//     console.log(this.name);
//   }
// }
// var person1=new person('suhail')
// person1.greet()
// ///////////////////////////////
// simple inheritence
// class person{
//   constructor(name){
//     this.name=name;
//   }
//   greet(){
//     console.log(this.name);
//   }
// }
// class student extends person{
  
// }
// var person1=new student('suhail')
// person1.greet()
// when both class have inheritence (use of super)
// //////////////////////////////////////////////
// class person{
//   constructor(name){
//     this.name=name;
//   }
//   greet(){
//     console.log(`${this.name}`);
//   }
// }
// class student extends person{
  
//   constructor(name){
    
//     super(name);
//   }
  
// }
// const person1 = new student('suhail')
// person1.greet()
// ////////////////////////////////////////////////////////
// when the child class passing parameter both acess parent & child (method overrideing)
class person{
  constructor(name){
    this.name=name;
  }
  greet(){
    console.log(`${this.name}`);
  }
}
class student extends person{
  
  constructor(name,work){
  
//     console.log()
    super(name);
      this.work=work;
  }
 greet(){
    console.log(`${this.name}  ${this.work}`);
  }    
    
  
}
const person1 = new student('suhail','software engineer')
person1.greet()
