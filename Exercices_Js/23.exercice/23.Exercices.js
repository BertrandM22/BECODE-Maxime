// Exercices 1 fonction/sous fonction et dé



const sDice=function dice (face,fois) {
    let total=0
 for (let dice = 0; dice < fois; dice++) {
     
     
 
 let nres=Math.floor(Math.random() * face +1);
 total += nres
 console.log(nres);
 
 
     
 }console.log(total)}
 sDice(6,4)












// let num1=0
// let num2=0
// let total=0

// function addition(num1,num2) {
    
//      let total = num1 + num2
// return total
// }

