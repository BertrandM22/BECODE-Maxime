let vide= ""
function mot(word){
  wordinaire=  word.split(" ")
  console.log(wordinaire)
for (let i = 0; i < wordinaire.length; i++) {
    
   const newword= wordinaire[i].split("").reverse().join("")
   console.log(newword)
   vide+=" "+ newword         

  
}


return console.log(vide)

}
