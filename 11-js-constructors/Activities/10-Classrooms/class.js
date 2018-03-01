var student = require("./student.js");

var class = function(professor, room){
  this.students = [];
  this.professor = professor;
  this.room = room;

  this.addStudent = function(x,y,z){
    this.students.push(new student(x,y,z));
  };
  this.studentCount = function(){
    return this.students.length;
  };
};

module.exports = class;
