"use strict"

//HomeWork

// console.log(reversStr("Cavid"));

// function reversStr(str) {
//     return str.split("").reverse().join("");
// }


//ecma script 6-dan evvel

// let stu2 = new Object();
// stu2.name = "test";

// console.log(stu2.name);


//Function object: ecma script 6-dan sonra, kohne qayda ile object yaratmaq

// function Test(a,b){
//     this.name = a;
//     this.surname = b;
// }

// let test1 = new Test("xxx","yyy");
// let test2 = new Test("xxx","yyy");

// test1.age=50;

// console.log(test1);
// console.log(test2);

// console.log(test1.name);



// let stu = {
//     name: "Samir",
//     surname: "Qehremanov",
//     age: 24
// }





// let stu1 = {
//     id: 1,
//     name: "Huseyn",
//     surname: "Huseynov",
//     age: 20,
//     adress: "Ecemi"
// }

// let stu2 = {
//     id: 2,
//     name: "Aydemir",
//     surname: "Rsulov",
//     age: 19,
//     adress: "Turkiye"
// }

// let stu3 = {
//     id: 3,
//     name: "Idmanci",
//     surname: "Axundov",
//     age: 20,
//     adress: "Xetai"
// }
// let stu4 = {
//     id: 4,
//     name: "Samir",
//     surname: "Qehremanov",
//     age: 24,
//     adress: "Californiya"
// }


// let group = {
//     name: "P139",
//     capacity: 4,
//     students: [],
//     addStudent: function (student) {
//         this.students.push(student);
//     },
//     getAllStudents: function () {
//         return this.students;
//     }
// }


// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);


// let result = group.getAllStudents();

// console.log(result);

// <li class="list-group-item">An item</li>


// for (const item of result) {

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     let str = `${item.name} - ${item.surname} - ${item.age} - ${item.adress}`;
//     li.innerText = str;
//     document.querySelector("ul").append(li);
// }


// document.querySelector("h1").innerText = "Salam";    
// document.querySelector("h2").innerHTML ="<span>Salam</span>";


// let stu1 = {
//     id: 1,
//     name: "Huseyn",
//     surname: "Huseynov",
//     age: 20,
//     adress: "Ecemi"
// }

// let stu2 = {
//     id: 2,
//     name: "Aydemir",
//     surname: "Rsulov",
//     age: 19,
//     adress: "Turkiye"
// }

// let stu3 = {
//     id: 3,
//     name: "Idmanci",
//     surname: "Axundov",
//     age: 20,
//     adress: "Xetai"
// }
// let stu4 = {
//     id: 4,
//     name: "Samir",
//     surname: "Qehremanov",
//     age: 24,
//     adress: "Californiya"
// }


// let group = {
//     name: "P139",
//     capacity: 3,
//     students: [],
//     addStudent: function (student) {
//         if (student == undefined) {
//             alert("Parametr is empty");
//             return;
//         }
//         if(this.students.length == this.capacity){
//             alert("Group already filled");
//             return;
//         }

//         this.students.push(student);
//     },
//     getAllStudents: function () {
//         return this.students;
//     }
// }


// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);


// let result = group.getAllStudents();




// for (const item of result) {

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     let str = `${item.name} - ${item.surname} - ${item.age} - ${item.adress}`;
//     li.innerText = str;
//     document.querySelector("ul").append(li);
// }


// let resultt = confirm ("Are you sure ?");



// let stu1 = {
//     id: 1,
//     name: "Huseyn",
//     surname: "Huseynov",
//     age: 20,
//     adress: "Ecemi"
// }

// let stu2 = {
//     id: 2,
//     name: "Aydemir",
//     surname: "Rsulov",
//     age: 19,
//     adress: "Turkiye"
// }

// let stu3 = {
//     id: 3,
//     name: "Idmanci",
//     surname: "Axundov",
//     age: 20,
//     adress: "Xetai"
// }
// let stu4 = {
//     id: 4,
//     name: "Samir",
//     surname: "Qehremanov",
//     age: 24,
//     adress: "Californiya"
// }


// let group = {
//     name: "P139",
//     capacity: 6,
//     students: [],
//     addStudent: function (student) {
//         if (student == undefined) {
//             alert("Parametr is empty");
//             return;
//         }
//         if (this.students.length == this.capacity) {
//             alert("Group already filled");
//             return;
//         }

//         this.students.push(student);
//     },
//     getAllStudents: function () {
//         return this.students;
//     },


//     getStudentById: function (id) {
//         let existStudent = this.students.find(m => m.id == id);
//         if (existStudent == undefined) {
//             alert("Student notfound");
//             return;
//         }
//         return existStudent
//     },

//     updateStudent: function (student) {
//         let existStudent = this.students.find(m => m.id == student.id);

//         if (existStudent == undefined) {
//             alert("Student notfound");
//             return;
//         }


//         // let existStudent = this.getStudentById(student.id);

//         existStudent.name = student.name == undefined ? existStudent.name : student.name;
//         existStudent.surname = student.surname == undefined ? existStudent.surname : student.surname;
//         existStudent.age = student.age == undefined ? existStudent.age : student.age;
//         existStudent.adress = student.adress == undefined ? existStudent.adress : student.adress;

//     },


 
// }


// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);


// console.log(group.getStudentById(2));

// let result = group.getAllStudents();



// function showBeforeUpdate() {
//     let getStudentsBefore = group.getAllStudents();

//     for (const item of getStudentsBefore) {
//         let li = document.createElement("li");
//         li.className = "list-group-item";

//         let str = `${item.name} - ${item.surname} - ${item.age} - ${item.adress}`;

//         li.innerText = str;

//         document.querySelector(".ul1").append(li);
//     }


// }


// function showAterUpdate() {
//     let getStudentsAfter = group.getAllStudents();

//     for (const item of getStudentsAfter) {
//         let li = document.createElement("li");
//         li.className = "list-group-item";

//         let str = `${item.name} - ${item.surname} - ${item.age} - ${item.adress}`;

//         li.innerText = str;

//         document.querySelector(".ul2").append(li);
//     }


// }

// showBeforeUpdate();

// let updateStu = {
//     id: 4,
//     name: "Test1",
//     surname: "Test2",
//     age: 24,
//     adress: "New York"
// }


// group.updateStudent(updateStu);

// showAterUpdate();

// console.log(getStudentsAfter);




// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//         // this.getFullName = function () {
//         //     return this.name + " " + this.surname;
//         // }

//     }
// }


// let person1 = new Person("Surac", "Ismayilov");

// let person2 = new Person("Xeyyam", "Isgenderov")

// person1.age = 40;

// console.log(person1.name + " - " + person1.surname + " - " + person1.age);
// console.log(person2.name +" - " + person2.surname + " - " + person2.age);


// console.log(person1.getFullName());
// console.log(person2.getFullName());



// Person.prototype.getFullName = function () {
//     return this.name + " " + this.surname;
// }

// Person.prototype.age = 100;

// console.log(person1.getFullName());


// let name = "Surac";

// let surname = "Ismayilov"

// String.prototype.test = "Salamlar";

// console.log(name.test);


// String.prototype.hasDigitForStr = function (str) {
//     return this.includes(str)
// }

// console.log(name.hasDigitForStr("d"));

// console.log(surname.hasDigitForStr("y"));



