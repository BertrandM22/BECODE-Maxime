
let resulaTot=[]
function inverse(word) {
  let newWord = word.split(" ")
for (let i = 0; i < newWord.length; i++) {
    const element = newWord[i];
    
    if (element.length%2 == 0) {// console.log(element);
        resulaTot += element+" " 
    }
    else if(element.length %2 !=0){ //console.log(element.split("").reverse().join(" "))
        resulaTot += element.split("").reverse().join("")+" "
    }
    // console.log (resulaTot)
   
    // console.log(element)
} return console.log(resulaTot)


}










