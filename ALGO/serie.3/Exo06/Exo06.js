let tab4= []
let tab3 = [];
function letter(tab1, tab2) {
  let newTab1 = tab1.split("");

  let newTab2 = tab2.split("");

  for (let i = 0; i < newTab1.length; i++) {
    if (newTab1[i] !== newTab2[i]) {
      tab3.push(newTab1[i]);
    }
    
    let tab4=[]
    
  }
  tab4=new Set(tab3)
 return Array.from(tab4)
    
  
  // tab3= tab2.map()
}
