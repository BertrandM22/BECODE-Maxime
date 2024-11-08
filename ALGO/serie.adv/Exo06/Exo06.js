function number(numArr, sum) {
  const pair = [];
  const hashtable = [];

  numArr.forEach((num, i) => {
    let counterPart = sum - num;
    if (hashtable.indexOf(counterPart) !== -1) {
      pair.push([num, counterPart]);
    }
    hashtable.push(num);
  });

  return pair;
}
console.log(number([1, 6, 4, 5, 3, 3], 7));
