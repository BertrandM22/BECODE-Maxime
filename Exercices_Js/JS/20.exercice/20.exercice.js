// const tache= prompt('choisi une tache "new" "list" "delete" ou "quit" ')
list = ["a", "ad"];
let quit = "";

for (i = 0; i < list.length; i++) {
  while (quit === "") {
    tache = prompt('choisi une tache "new" "list" "delete" ou "quit" ');

    if (tache == "new") {
      let add = prompt("ajouter une action a la list");
      list.push(add);

      list.forEach((element, index ) => {
        console.log(index +" "+ element)
      });
    }

    else if (tache == "list") {
        list.forEach((element, index ) => {
            console.log(index +" "+ element)
          })
    } 
    else if (tache == "delete") {
      
        
      let del = prompt("donne l'index a supprimer");
      list.splice(del - 0, 1);

      list.forEach((element, index ) => {
        console.log(index +" "+ element)
      })
        
    } 
    else if (tache == "quit") {
      quit = true;
    }
  }
}
