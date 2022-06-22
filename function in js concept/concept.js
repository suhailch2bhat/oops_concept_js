// primitive data type{pass by value}
// var a=12;
// var b=a;
// console.log(a)
// a=a+2
// console.log(b)
// console.log(a)
// non primitive data type{pass by reference}
// var a=[1,2,5,7]
// var b=a
// a.push(3)
// console.log(b)
// console.log(a)
// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;
// obj.name = "Akki";
// console.log(obj.name);
// console.log(obj2.name);
/////////////////////////////////
// call bind and apply  /////////////////////
/////////////////////////////////////////////
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.

// This example calls the fullName method of person, using it on person1:
// const person = {
//   fullName: function(friend,address) {
//     console.log(this.firstName + " " + this.lastName+' '+friend+' '+address)
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// This will return "John Doe":
// person.fullName.call(person1,'my bestfriend' ,' from awantipora');
//  bind 
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// const personn = {
//   fullName: function(city, country) {
//      console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
//   }
// }

// const person3 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// personn.fullName.apply(person3, ["Oslo", "Norway"]);
// //////////////////////////////
// bind
// /////////////////
// With the bind() method, an object can borrow a method from another object.
// const personnn = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = personnn.fullName.bind(member);
// // console.log( personnn.fullName.bind(member));
// console.log(fullName());
// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
// function OuterFunction() {

//     var outerVariable = 1;

//     function InnerFunction() {
//         console.log(outerVariable);
//     }

//     InnerFunction();
// }
// In the above example, InnerFunction() can access outerVariable.
// OuterFunction()