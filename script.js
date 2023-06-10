function findseven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 7) {
        return "found!";
      }
    }
    return "there is no 7 in the array";
  }

  const numbers = [1,45,34,22,43,7];
  const result = findseven(numbers);
  console.log(result)
  //this will return => "found!"
