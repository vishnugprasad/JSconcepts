// function main() {

//  var sum = 1;
//  function a () {

//   let sum = 0;
//   function b(){
//       console.log(sum)
//     }
//   b();
// }

// a();
//   console.log(sum)
// }

// main();

// var a ;
// if (a === undefined){
//   console.log(" undefined")
// }

// var person = new Object();

// person.name = "Sherlock"
// // person["lastname"] =  " Holmes"

// person.address = new Object();

// person.address.street = "21st baker street";
// person.city = "London";

// person.job =  new Object();
// person.job.description = "Private Detective";
// person.job.type = "freelance";

// console.log(person)

// var person = { name:"hi",
//               lastname : " cde" ,
//               name: "123",
//               rollno: {addno :"345",
//                        bookno: "223"}
//              }

// console.log(person)

// --------OBJECTS AND OBJECT LITERALS--------

// var sherlock = {firstName: "Sherlock",
//                lastname: "Holmes"}

// function greet(person) {
//   console.log("Hi " + person.firstName )
//   console.log(person.address)
// }

// greet({firstName:"Mia", lastName : "Tennison"})

// sherlock.address = {
//   street: "21st baker street",
//   city: "london",
//   country: "UK"
//   }

// greet(sherlock);

// var greet = "hola!"
// var greet = " hello";

// var english = { greetings:
//                {basic: "hello"}
//               }
// var spanish = {}

// console.log(english)
// // console.log(spanish);

// ------------------JASON OBJECTLITERAL----------------

// var objectLiteral = {
//   firstNamel: "Mary" ,
//   programmer : true
// }

// console.log(JSON.stringify(objectLiteral))

// var jasonValue = JSON.parse('{ "firstNamel": "Mary", "programmer" : true}')
// console.log(jasonValue)

// ................................functions............................

// var a = {greetings : "hello"}
// console.log(a)

// greet();

// function greet() {
//   // console.log("hi")
// }

// console.log(anonymousGreet);

// var anonymousGreet =  ()=> {
//   console.log("anonymous function")
// }

// // console.log

// function log(a) {
//   a();
// }

// log(3)

// log("hello")

// log({hello: "ola"});

// log(function(){
//   console.log("hola")
// })

// ...........call by value......................

// var a = 3;
// var b;

// b = a;

// console.log(a)
// console.log(b)

// a = 2

// console.log(a)
// console.log(b)

// ..................call by reference................

// var c = {greetings: "hello"}
//  var d;

// d = c;

// console.log(d)

// c.greetings = "hola"

// console.log(d)

// function changeGreetings(obj) {

//   obj.greetings = "mutated"

// }

// changeGreetings(d);
// console.log(c)

// function a() {
//   console.log(this)
// }

// a();

// ...............function object this.........................

// var b = function(){
//   console.log(this)
// }

// b();

// var c = {
//   name: "object c",
//   log: function(){
//     console.log(this)
//     this.name = "updated name"

//     function setname(newname){
//       this.name = newname;
//     }
//     setname("changed again in C")
//     console.log(this);
//   }

// }

// c.log()

// var c = {
//   name: "object c",
//   log: function(){

//     var self = this
//     console.log(self)
//     self.name = "updated name"

//     function setname(newname){
//       self.name = newname;
//     }
//     setname("changed again in C ! wow")
//     console.log(self);
//   }

// }

// c.log()

//..........................ARRAYS............................................

// var arr = [1,
//            false,
//           {name: "vishnu "},
//           function(name){
//             var greeting =" hello"
//             console.log(greeting + name )
//           },
//            "hello"]

// arr[3](arr[2].name)

// console.log(arr)

//...................argument and Spread..............................

// function greet( firstname, lastname, language, ...others){

//   if(arguments.length === 0){
//     console.log("no element")
//     console.log("------------")
//   }

//   firstname = firstname ||"enter first name"
//   lastname = lastname||"enter name"
//   language = language||"english"
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log(others)
//   console.log("arg 0: " + arguments[0])

// }

// greet();
// greet("vishnu");
// greet("vishnu","g prasad", "en", "21st baker street", "london", 23);

//.................function overloading............................

// function greet(firstname, lastname, language) {
//   language = language||"english"

//   if(language ==="english"){
//     console.log("hello " + firstname +" " + lastname)
//   } else
//   console.log("hola " + firstname +" " + lastname)
// }

// function greetEnglish(firstname, lastname){
//   greet(firstname, lastname, "english")
// }

// function greetSpanish(firstname, lastname) {
//   greet(firstname,lastname, "spanish")

// }

// greetEnglish("david", "warner")
// greetSpanish("anna","delvi")

// function newPerson() {
//  return  {
//     name: "Aravind"
//   }
// }

// console.log(newPerson());

// var
//     //firsstname of the person

//     firstname,

//     // lastname of the person
//     lastname

// var person  = {

//   firstname: "anna",
//   lastname: "delvi"
// }

// console.log(person)

// function greet(name) {
//   console.log("hello " + name)
// }

// var greetFunc =  function(name) {
//   console.log("hello " + name)
// }

// greet("vishnu")
// greetFunc("vishnu gp")

// var greeting =  function(name) {
//   console.log("hello " + name)
// }
// // ("vishnu");

// console.log(greeting)

//............immediate invocation function..................

// function person(name){
//   console.log("hola " + name)
// }("michel");

// 3;

// "i am a string"

// {
//   name: "delvi",
//     lastname: "jfa"

// }

//............................closure..........................

// function greet(say) {

//   var name = "vishnu"
//   return function(name){
//     console.log(say + " " + name)
//   }
// }

// greet("hello ") ("Vishnu")

// var wish = greet("hola")
// wish("Delvi")

// function buildFunction() {

//   var arr = [];

//   for(i = 0; i<3; i++){
//     arr.push(
//     function(){
//       console.log(i);
//     })
//   }

//   return arr
// }

// var fs = buildFunction();
// fs[0]();
// fs[1]();
// fs[2]();

// function buildFunction(){
//   var arr =[];
//   for(i = 0; i < 3; i++) {
//     arr.push(function(){
//       console.log(i)
//     })
//   }
//   return arr;
// }

// var fs =  buildFunction();
// fs[0]();
// fs[1]();
// fs[2]();

// /........................function factories................................../

// function makeGreetings(language){

//   return function(firstname,lastname){
//     if(language === "en"){
//       console.log("hello "+ firstname + " " + lastname)
//     }

//     if(language === "es") {
//       console.log("hola "+firstname + " " + lastname)
//     }
//   }

// }

// var greetEnglish = makeGreetings("en")("vishnu", "g prasad")
// var greetSpanish = makeGreetings("es")("Anna ","Delvi" )

// /.............closures and call backs..................................

// function hiLater(){

//   var greetings = "hi"

//   console.log("started")

//   setTimeout(function(){
//     console.log(greetings)
//   },3000)
// }

// hiLater();

// function tellMeWhendone(callback){

//   var x = 1000;
//   var y = 2000;

//   callback()
// }

// tellMeWhendone(function(){
//   console.log("the task done")
//   // console.log()
// })

//   tellMeWhendone(function(){
//   console.log("all is done")
// })

//.........bind().....apply().....call().....

// var person = {
//   firstname : "Anna",
//   lastname: "Delvi",
//   getFullName : function(){
//     var fullname = this.firstname + " " + this.lastname
//     return fullname;
//   }

// }

// var name  = person.getFullName();
// console.log(name)

// var logName = function(lang1, lang2){
//   console.log("logged:" + this.getFullName())
// }.bind(person)

// var logPersonName = logName.bind(person)
// logPersonName();

// logName()

// var logPerson = logName.bind(person)
// logPerson();

// var person = {
//   firstname : "Anna",
//   lastname: "Delvi",
//   getFullName : function(){
//     var fullname = this.firstname + " " + this.lastname
//     return fullname;
//   }

// }

// var person2 = {
//   firstname : "Vishnu",
//   lastname: " G Prasad"
//   }

// var logName = function(lang1, lang2){
//   console.log("logged:" + this.getFullName())
//   console.log("argument: " + lang1 + " " + lang2)
//   console.log("...........................")
// }

// var logPersonName = logName.bind(person)
// logPersonName("en", "es")

// // logName.call(person,"ep", "ew")
// logName.apply(person, ["en", "es"]);

// //.............function borrowing..........

//  (function(lang1, lang2){
//   console.log("logged:" + this.getFullName())
//   console.log("argument: " + lang1 + " " + lang2)
//   console.log("...........................")
// }).apply(person, ["es","en"])

// console.log(person.getFullName.apply(person2))

//................function currying...........

// function multiply(a,b){
//   return a*b
// }

// var multiplyBy = multiply.bind(this,2)

// console.log(multiplyBy(3))

//.........functional programing................

// var arr1 = [1,2,3,];
// console.log(arr1);
// var arr2 = [];

// for (i = 0; i < arr1.length; i++){
//   arr2.push(arr1[i]*3)
// }

// console.log(arr2)

// var arr1 = [1,2,3,4,5]
// var arr2 = []
// console.log(arr1);
// for( let i=0; i< arr1.length; i++){
//     arr2.push(arr1[i]*2)
// }

// const reverse1 = arr => [...arr].reverse().join('')
// console.log(reverse1("vishnu"));

//............................FUNCTIONAL PROGRAMING........................

// function mapForEach(arr,fn) {
//     var newArr =[];
//     for(let i =0; i< arr.length; i++){
//         newArr.push(fn(arr[i]))

//     }
//     return newArr;
// }

// var arr1 = [1,2,3,4]
// var arr2 = mapForEach(arr1, function(item){
//     return item*2
// })

// console.log(arr2);

// var arr3 = [3,6,9,]
// var arr4 = mapForEach(arr3,function(item){
//     return item/3
// })
// console.log(arr4);

// var checkPastlimit = function(limiter,item){
//     return item > limiter;
// }

// var arr5 = mapForEach(arr1, checkPastlimit.bind(this,1) )
// console.log(arr5);

// function mapForEach(arr,fn) {
//     var newArr =[];
//     for(let i =0; i< arr.length; i++){
//         newArr.push(fn(arr[i]))

//     }
//     return newArr;
// }

// var checkPastlimitSimplified = function(limiter){
//     return function(limiter, item){
//         return item > limiter;
//     }.bind(this,limiter);
// };

// var arr6 = mapForEach(arr1,checkPastlimitSimplified(1))

//.........................OBJECT ORIENTED JS AND PROTOTYPING.........................
//.........................UNDERSTANDING THE PROTOTYPE................................

// var person = {
//   firstname: "default",
//   lastname: "default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// var Roy = {
//     firstname: "Roy",
//     lastname: "miller"
// }

// Roy.__proto__ = person;
// console.log(Roy.getFullName());

// var a = {};
// var b = [];
// var c = function(){};

//..........................FUNCTION CONSTRUCTOR "NEW".......................

// function Person(firstname,lastname){
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname =  lastname;
//     console.log("this function is invoked");

// }

// var roy = new Person("roy", "miller");
// console.log(roy);

// var june = new Person("june","havens");
// console.log(june);

//..........constructore and "prototype"...........................................

// function Person(firstname,lastname){
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname =  lastname;
//     console.log("this function is invoked");

// }

// Person.prototype.getFullName = function() {

//     return this.firstname + " " + this.lastname

// }

// var roy = new Person("roy", "miller");
// console.log(roy);

// var june = new Person("june","havens");
// console.log(june);
// console.log( june.getFullName())

//...................NEW AND FUNCTIONS.....................................

// var a = new Number(3);
// var b = new Number(4);

// console.log(Number);
// console.log(a);
// console.log(Number);

//....................BUILD IN FUNCTION CONSTRUCTORS.........................

// String.prototype.isLengthGreater= function(limit){
//     return this.length>limit
// }

// console.log("Roy".isLengthGreater(2));

// var  arr = ["jack", "jill", "jon"];

// for( var prop in arr) {
//     console.log(prop + ":" + arr[prop]);
// }

//....................... PURE PROTOTYPAL INHERITANCE...........................................

// var person = {
//     firstname: "default",
//     lastname: "default",
//     greet : function(){
//         return "Hi " + this.firstname + " " + this.lastname;
//     }
// }

// var  pOne = Object.create(person);
// pOne.firstname = "Roy";
// pOne.lastname = "Miller"
// console.log(pOne.greet());

//.........................ODDS AND ENDS( INITILIZATION).........................

// var people = [
//   {
//     firstname: "Roy",
//     lastname: "miller",
//     address: ["21st baker street", "london"],
//   },
//   {
//     firstname: "Junes",
//     lastname: "Havens",
//     address: ["11 main street", "Newyork"],
//     greet: function () {
//       console.log("hello");
//     },
//   },
// ];

// console.log(people);


//............................typeof, instanceof...............................................


// var a = 3;
// console.log(typeof a);

// var a = "hello";
// console.log(typeof a);

// var c = {};
// console.log(typeof c);

// var d = [];
// console.log(typeof d);
// console.log(d.toString());
// console.log(typeof d);

// // var a = df;
// // console.log(typeof a);



//............................STRICT MODE.....................................................



// var person;

// persom = { };
// console.log(persom);



//....................ES6.................................



let a = "hello";
console.log(a);
 

{
    let a  = "hola"
    console.log(a);
}


console.log(a);



// const b = 2;
// b = 3*4;
// console.log(b);


const array = [1,2,3,4];
console.log(array);
array.push(5);
console.log(array);
array.pop();
console.log(array);