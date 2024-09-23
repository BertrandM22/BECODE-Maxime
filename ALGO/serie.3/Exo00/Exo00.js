function pairOrNot(a) {
  a = a + "";

  const tab = [...a].map(Number).reduce((acc, curr) => acc + curr);

 

  if (tab % 2) {
    console.log("Oddish"), console.log(tab);
  } else console.log("Evenish"), console.log(tab);

  ;
}
