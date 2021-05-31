const { lutimes } = require("fs");

function palindrome(a,el){
      const arrString = Array.from(a);
      let count = 0, lastIndex=0;
      while(arrString.indexOf(el,lastIndex) >= 0){
          count++;
          lastIndex = arrString.indexOf(el,lastIndex);
      }
      return count;
}

var a = (a,el)=>{
    const arrString = Array.from(a);
    let count = 0, lastIndex=0;
    while(arrString.indexOf(el,lastIndex) >= 0){
        count++;
        lastIndex = arrString.indexOf(el,lastIndex);
    }
    return count;  
}









