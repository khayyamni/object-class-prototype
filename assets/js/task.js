"use strict"



let stu1 = {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    age: 20,
    adress: "Ecemi"
}

let stu2 = {
    id: 2,
    name: "Aydemir",
    surname: "Rsulov",
    age: 19,
    adress: "Turkiye"
}

let stu3 = {
    id: 3,
    name: "Idmanci",
    surname: "Axundov",
    age: 20,
    adress: "Xetai"
}
let stu4 = {
    id: 4,
    name: "Samir",
    surname: "Qehremanov",
    age: 24,
    adress: "Californiya"
}


let group = {
    name: "P139",
    capacity: 6,
    students: [],
    addStudent: function (student) {
        if (student == undefined) {
            alert("Parametr is empty");
            return;
        }
        if (this.students.length == this.capacity) {
            alert("Group already filled");
            return;
        }

        this.students.push(student);
    },
    getAllStudents: function () {
        return this.students;
    },


    getStudentById: function (id) {
        let existStudent = this.students.find(m => m.id == id);
        if (existStudent == undefined) {
            alert("Student notfound");
            return;
        }
        return existStudent
    },

    updateStudent: function (student) {
        let existStudent = this.students.find(m => m.id == student.id);

        if (existStudent == undefined) {
            alert("Student notfound");
            return;
        }


        existStudent.name = student.name == undefined ? existStudent.name : student.name;
        existStudent.surname = student.surname == undefined ? existStudent.surname : student.surname;
        existStudent.age = student.age == undefined ? existStudent.age : student.age;
        existStudent.adress = student.adress == undefined ? existStudent.adress : student.adress;

    },

    deleteStudent: function (id) {
        let deleteStudent = this.students.findIndex(m => m.id == id);
    
        if (deleteStudent !== -1){
            this.students.splice(deleteStudent, 1);
        }
        else{
            console.log(`Student not found`);
        }
    },

    searcStudent: function(str){
        let result = this.students.filter(m => m.name.toLowerCase().includes(str) || m.surname.toLowerCase().includes(str));
        for (const item of result) {
            console.log(item.name + " " + item.surname);
        }
    }
 
}


group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);



group.deleteStudent(2);
console.log(group.getAllStudents());

group.searcStudent("n")
