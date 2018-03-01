var inquirer = require("inquirer");




function DigitalPal(name, hungry, sleepy, bored, age){
    this.name = name;
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function(){
      if(this.hungry === true){
        console.log("that was yummy!!")
        this.hungry = false;
        this.sleepy = true;
      }
      else{
        console.log("no thanks im full!!");
      }
    };

    this.sleepy = function(){
      if(this.sleepy === true){
          console.log("ZzzzZzzzz!!");
          this.sleepy = false;
          this.bored = true;
          this.increaseAge();
      }
      else{
        console.log('no way im not tired!!!');
      }
    }

    this.play = function(){
      if(this.bored === true){
        console.log("yay!! lets play");
        this.bored = false;
        this.hungry = true;

      }
      else{
        console.log("not right now, later!")
      }
    }

    this.increaseAge = function(){
      this.age++;
      console.log("Happy Birthday to me! I am" + this.age + "old!!")
    }

};

var dog = new DigitalPal("Bob", false, false, true, 0);
dog.outside=false;
dog.bark = function(){
  console.log("woof woof!");
};

dog.goOutside = function(){
  if (dog.outside === false) {
      console.log("yay i love the outdoors!!")
      dog.outside = true;
      dog.bark();
  }
  else{
    console.log("We're already outside though...")
  }

};

dog.goInside = function (){
  if(dog.outside === true){
    console.log("Do we have to??? fine!!")
    dog.outside = false;

  }
  else{
    console.log("I'm already inside")
  }

};


var cat = new DigitalPal("Rick")
cat.HouseCondition = 100;
cat.meow = function(){
  console.log("meow meow")
}
cat.destroyFurniture = function(){
  if(cat.HouseCondition > 0){
  cat.HouseCondition-=10;
  console.log("MUAHAHAHAA TAKE THAT FURNITURE!!")
  cat.bored = false;
  cat.sleepy = true;
  }
}

cat.buyNewFurniture = function(){
  cat.HouseCondition += 50;
  console.log("Are you sure about that??")
};

console.log(dog);
