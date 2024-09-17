function add(a,b,c){
 let total=0
    if(b==="+"){ total= a+c 
        return console.log(total)
    } 
     if(b==="x"){total=a*c 
        return console.log(total)
    }
    if(b===":"){total=a/c 
        return console.log(total)
    }
    if(b==="-"){total=a-c 
       return console.log(total)
    }

}