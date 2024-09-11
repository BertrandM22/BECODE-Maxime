// Ok, écrivons un petit jeu stupide. :) Lisez toutes les instructions avant de commencer à coder.

// La machine doit demander à l'utilisateur de saisir un « nombre maximum ».
// Assurez-vous que le nombre maximum est bien un nombre. Sinon, il faudra demander à nouveau 
// le nombre maximum.
// La machine doit ensuite choisir un nombre aléatoire entre 1 et le nombre maximum.
// Ensuite, la machine demandera à l'utilisateur de deviner le nombre
// Si nous saisissons quelque chose qui n'est pas un numéro, la machine doit signaler
//  que ce n'est pas une réponse valide et demander à nouveau un numéro.
// Si ce n'est pas correct, la machine doit indiquer que ce n'est pas correct et si 
// l'estimation doit être supérieure ou inférieure.
// La boucle se termine seulement lorsque l'utilisateur trouve le numéro et que 
// la machine dit « Félicitations ! » et combien de tentatives l'utilisateur a effectuées 
// avant de deviner correctement.
// Petite astuce :

// La fonction prompt renvoie toujours une chaîne. Même si vous mettez un nombre. 
// Assurez-vous de comparer les nombres aux nombres ;)
// Nous ne pouvons pas utiliser de comparateur avec NaN. Il existe une fonction 
// pour vérifier si c'est NaN : isNaN(). Mais rappelez-vous : NaN est faux, il 
// existe donc de meilleures méthodes
let cNumberU= prompt("Choisi un nombre")
//  let numberU= parseInt(prompt(" ecris un nombre de 1 a 10"))

const numberM = Math.floor(Math.random(cNumberU) *  cNumberU +1)
// console.log (Math.floor(numberM))

// while (numberM !== isNaN || numberU <= numberM ||) {
    

// if (numberM > numberU) { alert(" le nombre est plus haut")
//     break
// }if (numberM < numberU) { alert("le nombre est plus bas")
//     break; 
// } if (numberM === numberU)  { alert(`bravo tu as trouver,c'est bien ${numberM} `)
//      }
// }


console.log( numberM)
do { numberU= prompt(" ecris un nombre de 1 et le nombre que tu as choisi")
    if (numberM > numberU) { alert(" le nombre est plus haut")
        
    } if (numberM < numberU) { alert("le nombre est plus bas")}
        
        
     if (numberM == numberU)  { alert(`bravo tu as trouver,c'est bien ${numberM} `)
        break
         }
         if (isNaN(numberU))  { alert(" Attention les lettre ne fonctionne pas.")}
    
} while (numberM !== numberU);