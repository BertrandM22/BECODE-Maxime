function totalPrice(List) {
    let total = 0;
  
    for (let i = 0; i < List.length; i++) {
        
            
        
      let item = List[i];
      let price = parseFloat(item.price);
     total += price;
     
  
    console.log("Prix total :",total);
   
  }
  
}

//  Ne fonctionne que pour un groupe de liste et pas pour une seul
// a revoir :"(
