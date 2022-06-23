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

function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}


function litres(time) {
  return Math.floor(time * .5)
}


function updateLight(current) {

switch(current){
    case "green":
      return "yellow"
      break
    case "yellow":
      return "red"
      break
    case "red":
      return "green"
      break
    default:
      return "enter a valid color"
}

}


function strCount(str, letter){  
  let strArr = str.split('')
  return strArr.reduce((inc, curr) => {
    if(curr === letter){
      inc++
    }
    return inc
  }, 0)
}

function enough(cap, on, wait) {
  return on + wait < cap ? 0 : on + wait - cap
}


// string ladder katas - Kyu 6
// finds the highest value word when value goes up as you get further in the alphabet. EX. a = 1, z = 26
function high(x){
  var a = 97;
  var charArray = {};
  for (var i = 0; i<26; i++)
      charArray[String.fromCharCode(a + i)] = i + 1;

  let strArr = x.split(' ')
  let valueArr = []
  for(let word of strArr){
    let wordArr = word.split('')
    let value = 0
    for(let letter of wordArr){
      value += charArray[letter]
    }
    valueArr.push(value)
  }
  let highestValue = valueArr.reduce((prev, curr) => {
    return prev > curr ? prev : curr
  })
  
  let highestIndex = valueArr.indexOf(highestValue)
  return strArr[highestIndex]
}


String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}


// literally counts vowels from a lowercase string only
function getCount(str) {
  let vowelsCount = 0;
  for(let letter of str){
    if(vowels.indexOf(letter) !== -1){
      vowelsCount++
    }
  }
  
  return vowelsCount;
}
  
let vowels = ['a', 'e', 'i', 'o', 'u']


function nthEven(n){
  return 2 * (n - 1)
}


function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
  
}


function sumStr(a,b) {
  return String(Number(a) + Number(b))
}


function incrementer(nums) { 
  if(nums.length){
    return nums.map((element, index) => {
      element += index + 1
      while(element > 9) {
        element -= 10
    }
      return element
    })
    }
    
  return []
}

const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);


function hero(bullets, dragons){
  return bullets / 2 >= dragons
}


const reverseSeq = n => {
  let arr = []
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
  return arr
};

function bingo(a) {
  let bingoSet = new Set(a)
  let bingoArr = [2, 9, 14, 7, 15]
  
  return bingoArr.every(elem => bingoSet.has(elem)) ? "WIN" : "LOSE"
  
}

function minSum(arr) {
  let sortedArr = (arr.sort((a, b) => a - b))
  let total = 0
  for(let i = 0; i < sortedArr.length / 2; i++){
    total += sortedArr[i] * sortedArr[sortedArr.length - i - 1]
  }
  return total
}

function consecutive(arr, a, b) {
  return (arr.indexOf(a) + 1 === arr.indexOf(b) || arr.indexOf(b) + 1 === arr.indexOf(a))
}

function interest(P,r,n) {
  return [P*(1 + r*n), P*Math.pow(1+r, n)].map(Math.round)
}


function checkExam(array1, array2) {
  let pointArray = array1.map((elem, index) => {
    return elem === array2[index] ? 4 : array2[index] === "" ? 0 : -1
  })
  let score = pointArray.reduce((prev, curr) => {return prev + curr}, 0)
  return score > 0 ? score : 0
 }

 var countDeafRats = function(town) {
  let deafs = 0
  let ident = 'O'
  for ( let i = 0; i < town.length; i++){
     if ( town[i] === 'P' ){
      ident =  '~'
     }
     if (town[i] === ident){
       deafs++
     }
     if (town[i] === '~' || town[i] === 'O'){
      i++
     }
   }
  return deafs;
}

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

function century(year) {
  // Finish this :)
  return Math.floor((year - 1) / 100) + 1
}


function game(n) {
  var result = n * n;
  if (result % 2 == 0){
    return [result / 2];
  }
  return [result, 2];
}


function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function sumOfDifferences(arr) {
  if(!arr.length){
    return 0
  }
  let sortedArr = arr.sort((a,b) => b - a)
  return sortedArr[0] - sortedArr[sortedArr.length - 1]
}

function chain(input, fs) {
  // implement the "chain" function
    let result = input
    for(let func of fs){
      result = func(result)
    }
    return result
  }


  function twoSum(numbers, target) {
    let num1, num2;
    for(let i = 0; i < numbers.length - 1; i++){
      let currNum = numbers[i];
      for(let j = 0; j < numbers.length; j++){
        if(currNum + numbers[j] === target && i !==j){
          num1 = i
          num2 = j
  //         console.log(num1, num2)
        }
      }
      
      
    }
    return [num1, num2]
  }



  // works for any n < 46 because this method fails for large numbers
  function countOddPentaFib(n) {
    let fibArr = []
    for(let i = 0; i < n; i++){
      if(i === 0){
        fibArr.push(0)
      }
      else if(i === 1 || i === 2){
        fibArr.push(1)
      }
      else{
          fibArr.push(fibArr.slice(-5).reduce((inc, curr) => {
            return inc + curr
          }, 0))
        }
        
      }
    
  //   console.log(fibArr.length, "length")
    let oddNum = 1
    fibArr.forEach( (elem) => {
  //     console.log(elem % 2, elem)
      if(elem % 2 === 1 && elem !== 1){
        oddNum +=1
      }
    })
  //   console.log('end')
    return oddNum
  }


  function twiceAsOld(dadYearsOld, sonYearsOld) {
  
    let dadCurrAge = dadYearsOld - sonYearsOld, sonCurrAge = 0
    
    if(dadYearsOld / 2 > sonYearsOld){
      while(dadCurrAge / sonCurrAge !== 2){
        dadCurrAge ++
        sonCurrAge ++
      }
      return dadCurrAge - dadYearsOld
    }
    else if(dadYearsOld / 2 < sonYearsOld){
      while(dadCurrAge / sonCurrAge !== 2){
        dadCurrAge ++
        sonCurrAge ++
      }
      return  dadYearsOld - dadCurrAge
    }
    else{
      return 0
    }
  }


  function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }


  function warnTheSheep(queue) {
  
    let reversedQueue = queue.reverse()
    let sheepNum = queue.indexOf('wolf')
    
    return sheepNum === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`
  }


  const quarterOf = (month) => {
    return month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1
    
  }


  function quadratic(x1, x2){
    return [1, -(x2 + x1), (x1 * x2)]
 }