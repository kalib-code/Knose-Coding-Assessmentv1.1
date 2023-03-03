

function printNumbers (n) {
    for(let i=1; i<=n; i++) {
      let result = "";
      if(i%5 === 0) {
        result += "Knose";
      }
      if(i%7 === 0) {
        result += "Pet Care Made Easy";
      }
      console.log(result || i);
    }
  }


  function printFigure(n) {
      if (n<1) {
          console.log("Please enter a positive number");
      } else {
          for(let i=1; i<=n; i++) {
              let row = "-".repeat(n-i) + "*".repeat(i);
              console.log(row);
          }
      }
  }
  
  function sortIntegers(arr){
    if (!Array.isArray(arr)) throw new Error('Input is not an array')
    
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1
      let temp = arr[i]
  
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
  
      arr[j + 1] = temp
    }
  
    return arr
  }

  module.exports = {
    printNumbers,
    printFigure,
    sortIntegers
  };
  