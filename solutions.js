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