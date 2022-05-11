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


// returns hello name! with name 
function hello(name) {
  if(!name || name.length === 0){
    return "Hello, World!"
  }
  else{
    let nameArr = name.split('')
    nameArr[0] = nameArr[0].toUpperCase()
    for(let i = 1; i < name.length; i++){
      nameArr[i] = nameArr[i].toLowerCase()
      console.log(nameArr[i])
    }
    let newName = nameArr.join('')
    return `Hello, ${newName}!`;
  }

}


// better solution:

const hello = s =>`Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;




  function dutyFree(normPrice, discount, hol){
    let discounted = normPrice * (discount / 100)
    let div = hol / discounted
    
  //   if(hol % discounted){
  //     div += 1
  //   }
    div = Math.floor(div)
    return div
  }


  function abbrevName(name){

    let split = name.split(' ')
    
    return `${split[0][0]}.${split[1][0]}`.toUpperCase()

}


function noSpace(x){
  return x.replace(/\s/g, "")
}


function fakeBin(x){
  let strArr = x.split('')
  
  for(let i = 0; i < strArr.length; i++){
    strArr[i] = Number(strArr[i]) >= 5 ? '1' : '0'
  }
  
  return strArr.join('')
}


function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? 'small' : 'wide'
}

function well(x){
  let sorted = x.filter(elem => elem === 'good')
  if(sorted.length === 0){
    return 'Fail!'
  }
  else if(sorted.length > 2){
    return 'I smell a series!'
  }
  else{
    return 'Publish!'
  }
}


function howMuchILoveYou(nbPetals) {
  let sayings = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  
  return sayings[(nbPetals - 1) % 6]
}


function switchItUp(number){
switch (number){
    case 0:
    return "Zero"
    break;
    case 1:
    return "One";
    break;
    case 2: 
    return "Two";
    break;
    case 3:
    return "Three"
    break;
    case 4:
    return "Four";
    break;
    case 5:
    return "Five";
    case 6:
    return "Six";
    case 7:
    return "Seven";
    break;
    case 8:
    return "Eight"
    break;
    case 9:
    return "Nine";
    break;
    
}
}