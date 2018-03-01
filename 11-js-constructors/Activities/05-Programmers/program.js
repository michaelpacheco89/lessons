var inquirer = require("inquirer");

function Programmer(name, title, age, favLang){
    this.name = name;
    this.title = title;
    this.age = age;
    this.favLang = favLang;

    this.print = function(){
      console.log(this.name);
      console.log(this.title);
      console.log(this.age);
      console.log(this.favLang);
    }
}
var pete = new Programmer("Pete", "Junior Developer", 20, "CSS");
console.log(pete);
