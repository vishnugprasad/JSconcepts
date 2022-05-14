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

// let a = "hello";
// console.log(a);

// {
//     let a  = "hola"
//     console.log(a);
// }

// console.log(a);

// // const b = 2;
// // b = 3*4;
// // console.log(b);

// const array = [1,2,3,4];
// console.log(array);
// array.push(5);
// console.log(array);
// array.pop();
// console.log(array);

//.........................template literals.......................................

// var a = "Vishnu";
// var b = "G Prasad";
// var c = a + " " + b;
// console.log(c);

// var d  = `hello ${b}`;
// console.log(d);

// let e =`${a}`;
// console.log(e);

// let f = `hola ${c}`
// console.log(f);

//........................SPREAD OPERATOR.....................................

// let a = [1,2,3,4,5];
// console.log(a);
// let b = [...a, 6,7,8];
// console.log(b);
// let c = [...b,9,10,11,12]
// console.log(c);

// function print(a,b,c){
//   console.log(a,b,c);
// }

// let z =[1,2,3];
// print(...z)

// let x= [1,2,3,4]
// console.log(x);

// function print(x,...y) {
//     console.log(y);
// }
// let y = ["a","b","c"]
// let x = [1,2,3,4,5];
// print(x,y);

// function print1(...x){
//     console.log(x);
// }

// let h = [1,2,3,4,5];
// print1(h)

// h = [3,4,5,6]

// print1(h)

// let a  = [1,2,3,4,5];
// let b = [...a,6,7,8,9];
// console.log(b);

//.........................ARRAY DESTRUCTURING ..............................

// let a = [100,200];
// let b = a[0];
// let c = a[1];
// console.log(b,c);

// let a = [100,200];
// let [b,c] = a
// console.log(b,c);

// let gameofthrones = ["khalese", "robert", "cersi"] ;
// let [dragon, stark, lanister] = gameofthrones;
// console.log(dragon, stark, lanister);

// let avengers = ["cap", "tony", "thor"];
// let [first,second,third] = avengers;
// console.log(first,second,third);

// let e  = [ 9,8,7]
// let a  = [1,2,3,...e];
// let [b,c,d,f,g,h] = a;
// console.log(f,g,h);

// let a = [100,200,300,400];
// let [b,...c]= a;
// console.log(b,c);

//..........................destructuring assignment - OBJECTS..................................

// let wizard = {magic : true, power : 10}

// let magical = wizard.magic;
// let power = wizard.power;
// console.log(magical,power);

// let  india = {matches: 100, win: 85}
// let {played, sucess} = india;
// console.log(played, sucess);

// let india  = { match : 100, sucess : 85};
// let {match , sucess}  = india
// console.log(match, sucess);

// let india  = { match :100, won: 85};
// let {played, win} = india;
// console.log(played,win);

//.............................ARROW FUNCTIONS.........................

// function playoff(){
//     console.log("3..2..1...playoff");
// }

// playoff();

// setTimeout(function(){
//     console.log("3..2...1...playoff");
// }, 3000)

// setTimeout( ()=> {
//     console.log("hey vishnu");
// }, 5000)

// const call = ()=> {
//     console.log("this is the last call");
// }

// call();

// this.a  = 25;
//  const big =  function(){
//      this.a = 15
//      console.log(this.a);
//  }

//  big();

// let printArrow  = ()=> {
//      console.log(this.a);
// }

// printArrow();

// let a = 100;

// console.log(`the answer is ${a}`);

//..........................MAP FUNCTIONS.............................

// let array = [10,20,30,40];

// function addOne(element){

//     return element+1;

// }

// console.log(array.map(addOne));

// let array1 = [1,2,3,4];
// console.log(array1);
//  const multiply = (element)=> {

//     return element*10

//  }

// console.log(array1.map(multiply));

// let array3 = [3,6,9,12,15,18]
// console.log(array3);

// function divide(element){
//     return element/3
// }

// console.log(array3.map(divide));

// let array1 = [11,12,13,14,15]
// let array = [1,2,3,4,5,6,7,8,9,10, ...array1];

// console.log(array.map((element)=> {
//    return element*2
// }));

// console.log(array.map(element => (element+1)*2));

//.....................FILTERS..........................

// let array = [10,1,3,14,18,20,22,31,54,65,];

// let array = [10,1,3,4,5,6,7,8];

// console.log(array);

// // let isGreater = (element)=>{
// //     return element > 15;
// // }

// // console.log(array.filter(isGreater));

//  let newArray = [];

// newArray.push((array.filter((element)=>{
//     return element > 3;
// })))

// console.log(newArray);

// console.log(
//     newArray.map((element)=> {
//         return element*3;
//     }));

//...................IMPORTING AND EXPORTING................................
//...................EXPORTING EXPRESSION BY DEFAULT........................

// import {students, teacher} from "./students";
// import {add, multiply} from "./calculator"
// import division from "./calculator"
// console.log(students);
// console.log(teacher);

// console.log(add(3,5));
// console.log(multiply(3,5));
// console.log(division(4,2));

//....................CLASSES.........................

// let merry = new Entity("Merry", 5.4);
// merry.greet();

// import Entity from "./entity";

// class Hobbit extends Entity {
//     constructor(name,height){
//         super(name,height)
//     }

//     greet(){
//         console.log(`hello this is ${this.name} from the shire`);
//     }
// }

// let Frodo = new Hobbit("Froddo", 4.5)
// Frodo.greet();

// var name = "vishnu"
// // const len = name.length

// console.log(name.substing(1,2));'

// var strStr = function (haystack, needle) {
//     // Base condition
//     if (haystack == null || needle == null) {
//         return -1;
//     }
//     // Special case
//     if (haystack === needle) {
//         return 0;
//     }
//     // length of the needle
//     const needleLength = needle.length;
//     // Loop through the haystack and slide the window
//     for (let i = 0; i < haystack.length - needleLength + 1; i++) {
//         // Check if the substring equals to the needle
//         console.log(haystack.substring(i ,i + needleLength ));
//         if (haystack.substring(i, i + needleLength) === needle) {

//             return i;
//         }
//     }
//     return -1;
// };

// const op = strStr("vishnu", "nu")
// console.log(op);

// var name = "vishnu";
// console.log(name.substring(1,4));

// var strStr = function (haystack, needle)
// {
//     if(haystack == null || needle == null){
//         return -1
//     }

//     if(haystack === needle){
//         return 0;
//     }

//     const length = needle.length;
//     for(let i = 0; i < haystack.length - length +1; i++){
//         if(haystack.substring(i, i+length) === needle){
//             return i;
//         }
//         return -1
//     }
// }

// const x = strStr("vishnu", "is")
// console.log(x);

// var maxSubArray = function (nums) {
//   var prev = 0;
//   var max = -Infinity;
//   for (var i = 0; i < nums.length; i++) {
//     prev = Math.max(prev + nums[i], nums[i]);
//     max = Math.max(max, prev);
//   }
//   return max;
// };

// var s  = " hello my name is vishnu "
// console.log(s.length);
// console.log(s.trim());;
// console.log(s.length);

// console.log(s.split(" "));

// var nums = [1,3,8,11,4,2,5,6]
// var so = nums.sort((a,b)=>a-b);
// console.log(nums.length);
// console.log(nums.sort((a,b)=>b-a));

// let i =9;
// console.log(i+=1);
// console.log(i++);

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  let closest = nums[0] + nums[1] + nums[n - 1];

  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum <= target) {
        j++;
      } else {
        k--;
      }
      if (Math.abs(closest - target) > Math.abs(sum - target)) {
        closest = sum;
      }
    }
  }
  return closest;
};
