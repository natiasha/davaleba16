//1
function number(f, a) {
    let result = [];
    let i; 
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
      if (x % 2===1)           
       return true;
     else return false;
  }
  let numbers = [5, 1, 2, 7, 10];
  let y = number(f,numbers);
  console.log(y);
  
  //2
  function getCurrencySymbolFromCode(h,t) {
      let code=[];
      let i;
      for (i = 0; i != t.length; i++)
      code[i] = h(t[i]);
    return code;
  }
  let h = function(k) {
         if (k='EUR')           
       return  '€';
       else if (k='USD')
     return '$';
    else if (k='GEL')
     return '₾'
     else return undefined;
 }
  let  codes=["GEL", "EUR", "USD", "FR", "YEN", "YUAN"];
  let r = getCurrencySymbolFromCode(h,codes);
  console.log(r);
  
  
  //4
  function evennumber(g, m) {
  let output = [];
  let i; 
  for (i = 0; i != m.length; i++)
  output[i] = g(m[i]);
   return output;
  }
  const g = function(n) {  
     console.log(output.filter((n) => n% 2 === 0));         
     return n;
 }
 let output = [4, 7, 9, 12, 14, 16, 20, 29, 24, 100];
 let d = evennumber(g,output);
 console.log(d);
  