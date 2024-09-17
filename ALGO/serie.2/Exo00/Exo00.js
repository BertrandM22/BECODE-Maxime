let word = "";

function trueOrNot(word) {
  let pass = 0;

  for (let element of word) if (element === true) pass++;
  return pass;
}
