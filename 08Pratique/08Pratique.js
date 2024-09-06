const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
temperature
)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.


//Premier exercices sur les prompt et l'alert.


// const nom = prompt("Quel est ton nom ?")
// const age = prompt(" Quel age tu as ?")
// const adress = prompt(" Ou habite tu ?")

// alert( `je suis ${nom} j"ai ${age} j'habite ${adress} ` )

// Deuxieme exercices Prix TVA

// const HTVA = parseInt (prompt(" quel est le prix de l'article HTVA ?"))

// const modif = HTVA *21 /100 
// const TVA = HTVA + modif
// alert( `le prix sans tva est ${HTVA} il faut rajouter ${modif} pour avoir le prix avec tva qui est ${TVA}`)

// Troisieme exercices calcule du rayon a la surface d'un cercle

// rayon= parseFloat(prompt('donne moi le rayon de ton cercle'))
// surface= Math.ceil(rayon )  * 2

// alert(`voici ton rayon ${rayon} et voici ta surface ${surface}`)

// Quatrieme exercices La Calculatrice !

// const firstNum= parseInt (prompt("Donne moi ton premier nombre"))

// const symBol1= prompt(" choisi entre *,+,-,/")

// const seconNum= parseInt( prompt("Donne moi ton second nombre"))

// if (symBol1 == "+" ) { parseInt(final = firstNum + seconNum ) 
    
// } 

// else if (symBol1 == "-" ) { parseInt(final = firstNum  - seconNum) 
    
// } 

// else if (symBol1 == "*" ) { parseInt(final= firstNum * seconNum) 
    
// } 

// else if (symBol1 == "/" ) { parseInt(final =firstNum / seconNum ) 
    
// } 
// else{ alert(" l'operateur n'est pas valide")}



// alert(`${firstNum} ${symBol1} ${seconNum} est = ${final}`)



