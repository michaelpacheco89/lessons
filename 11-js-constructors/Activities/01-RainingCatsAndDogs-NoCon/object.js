var dogs = {
      raining: true,
      noise: "Woof!",
      makeNoise: function(){
          console.log(dogs.noise)

      }
};


var cats = {
      raining: false,
      noise: "Meow!",
      makeNoise: function(){
        console.log(cats.noise)
      }
};

if(dogs.raining === true){
  dogs.makeNoise
};

if(cats.raining === true){
  cats.makeNoise
};
