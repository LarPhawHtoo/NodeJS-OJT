function isOdd(number) {
    return number % 2;
  }
  
  function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
  }
  
  let results = getOddNumbers(10, 1, 3, 4, 8, 9);
  console.log(results);