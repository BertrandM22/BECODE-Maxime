function ransomNote(note,magasine) {

    noteArray=note.split(" ")
    magasineArray= magasine.split(" ")
    
    for (let i = 0; i< noteArray.length; i++) {
        const mot= noteArray[i]
        if (!magasineArray.includes(mot)){
            return false
        }
        else{
            const ind= magasineArray.indexOf(mot)
            magasineArray.splice(ind,1)
         }
      
    
}return true}


