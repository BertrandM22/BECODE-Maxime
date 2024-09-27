function numbers(num) {
  for (let i = 1; i <= num; i++) {
    let nums = i;

    if (nums % 5 === 0 && nums % 3 === 0) {
      nums = "FrizzBuzz";
      console.log(nums);
    } else if (nums % 3 === 0) {
      console.log("Frizz");
    } else if (nums % 5 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
}
