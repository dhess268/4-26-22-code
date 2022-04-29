// finds average of an array
function find_average(array) {
  return array.length ? (array.reduce((a, b) => a + b))/array.length : 0
}



function parseF(s) {
  return parseFloat(s) ? parseFloat(s) : parseFloat(s) === 0 ? parseFloat(s) : null
}




// 4-27-22-code but I dont want to create a new folder



function mango(quantity, price){
  console.log(quantity/3)
  return (quantity * price) - (Math.floor(quantity / 3) * price)
}


function isVow(a){
  let vowels = {
    'a': 97,
    'e': 101,
    'i': 105,
    'o': 111,
    'u': 117
  }
  let newArr = []
  for(let i = 0; i < a.length; i++){
    if(a[i] === vowels['a']){
      newArr.push('a')
    }
    else if(a[i] === vowels['i']){
      newArr.push('i')
    }
    else if(a[i] === vowels['e']){
      newArr.push('e')
    }
    else if(a[i] === vowels['o']){
      newArr.push('o')
    }
    else if(a[i] === vowels['u']){
      newArr.push('u')
    }
    else{
      newArr.push(a[i])
    }
    
      
    }
   return newArr
}