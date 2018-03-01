function Character(name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.PrintStats = function(){
      console.log(this)
    };

this.IsAlive(){
      if (this.hitpoints <= 0) {
          console.log("Dead")
      }
      else {
        console.log("Alive")
      }
    };

this.Attack(){
  
}

}

var knight = new Character("Eddie", "Knight", "Male", 33, 9001, 9002);
var witch = new Character("Elton", "Witch", "Unknown", 80, 2, 3);
knight.PrintStats();
witch.PrintStats();
