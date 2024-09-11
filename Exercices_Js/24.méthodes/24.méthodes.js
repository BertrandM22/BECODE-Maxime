

// Exercices sur les function dans des objets
let user = {
  firstName: "Jean",
  secondName: "Pierre",
  age: 21,

  aYearHasPast: function () {
   
    
      this.age += 1;
      console.log(this.age, this.secondName);

      console.log( this.secondName); 
      
      },
      printAge: function () {
        
        return console.log (`je suis`,this.firstName, this.secondName,`et j'ai`,this.age);
      }
    }
  
