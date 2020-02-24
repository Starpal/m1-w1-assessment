// Write a function that returns the product of 2 numbers
function product(x, y) {
  let product = x*y;
  
   return product;
}
// Write a function that returns whether a given number is even
function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(c>b && c>a){
    return c;
  }
  else if(b>a && b>c)
  {
   return b;
  }
  else if(a>b && a>c){
    return a
  }
  }
  

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum=0;
  for(let i=0; i< numbers.length; i++){
    sum += numbers[i];
  }
   return sum;
}


// Return the largest number of a non-empty array
  function maxOfArray(numbers) {
      let highest = Math.max.apply(null, numbers);
    return highest;
  }
    


// Return the longest string in an array
function longestString(strings) {
    var longestString = 0;
    for (i = 0; i < strings.length; i++) {
      if (strings[i].length > strings[longestString].length) {
        longestString = i;
      } else {
      }
    }
    return strings[longestString];
  }


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i=0; i< wordsArr.length; i++){
    if(wordsArr[i].includes(word)){
      return true;
    } else {
      return false;
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let unique = 0;
  if (wordsArr.length === 0) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++){
   if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
     
     return wordsArr[i];
    }  
  }
  
}



// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var newArray = matrix.flat();
  let highest = maxOfArray(newArray);
    return highest;
}
