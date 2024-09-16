let fuel = 0;
function carbu(fuel) {
  let kilometre = fuel * 10;
  if (kilometre < 100) {
    kilometre = 10 * 10;
  }

  console.log(kilometre);
}
