// let mot= "UcUNFYGaFYFYGtNUH"
// let mot= "bEEFGBuFBRrHgUHlNFYaYr"
let mot = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment";
let newMot = "";

console.log(newMot);

function Minuscule(mot) {
  for (let i = 0; i < mot.length; i++) {
    const index = mot[i];
    if (index === index.toLowerCase()) {
      newMot += index;
    }
  }
  console.log(newMot);
}
