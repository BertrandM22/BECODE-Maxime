function revers(word) {
  let boum = "";
  let newword = word.join("");
  console.log(newword.length);

  for (let i = newword.length - 1; i > -1; i--) {
    const element = newword.length[i];
    console.log(newword[i]);
    
    boum += newword[i];
  }
  console.log(boum.split(" "));
}
