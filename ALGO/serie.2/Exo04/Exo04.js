let tab = [];

function multiTab(numb, fois) {
  let tot = numb;
  tab.push(numb);
  for (let i = 0; i < fois - 1; i++) {
    numb += tot;
    tab.push(numb);
    console.log(tab);
  }
}
