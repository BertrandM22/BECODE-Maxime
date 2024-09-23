/*Créez une fonction qui convertit Celsius en Fahrenheit et vice versa.

Remarques
Arrondir à l'entier le plus proche.
Si l'entrée est incorrecte, renvoie « Erreur ».
Regardez sur Google comment convertir F en C et vice-versa*/

function degre(Cel) {
    
  if (Cel === `${Cel.slice(0, -2)}°C`) {
    Cel = Cel.slice(0, -2);
    let fahrenh = (Cel * 9) / 5 + 32;
    
    return console.log(fahrenh + "°F");
  }

  if (Cel === `${Cel.slice(0, -2)}°F`) {
    Cel = Cel.slice(0, -2);
    let totalC = ((Cel - 32) * 5) / 9;
    
    return console.log(totalC + "°C");
  } 
  else {
    console.log("ERROR");
  }
}

/*convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"*/
