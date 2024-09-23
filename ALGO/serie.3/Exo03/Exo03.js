arrayTot=[]
a=[]
function lastLetter(word){
wordinaire= word.split(" ")
for (let i = 0; i < wordinaire.length -1; i++) {
    // console.log(wordinaire)
  
  let theFirst= wordinaire[i+1][0]

  let theLast= wordinaire[i][wordinaire[i].length-1]

// console.log(theFirst)
// console.log(theLast)

if (theLast === theFirst[0] ) {console.log(true)
    
}
else{ 
console.log(false)}
}

}

