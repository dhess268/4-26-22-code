// finds average of an array
function find_average(array) {
    return array.length ? (array.reduce((a, b) => a + b))/array.length : 0
    }
  


    function parseF(s) {
        return parseFloat(s) ? parseFloat(s) : parseFloat(s) === 0 ? parseFloat(s) : null
      }