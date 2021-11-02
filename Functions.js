function sumFibs(num) {
    var sum = 0; 
    var num1 = 0;
    var num2 = 0;
    var fib = 1
    while (fib<=num) {
      if (fib % 2 !== 0){
        sum += fib;
        num1 = num2;
        num2 = fib;
        fib = num1 + num2;
      } else {
          num1 = num2;
          num2 = fib;
          fib = num1 + num2;
      }
         
    }
    console.log(sum)
    return sum;
  }
  
function translatePigLatin(str) {
    var vowel = ['a','e','u','i','o']
    var arr = str.split('');
    //check if first letter is vowel
    if (vowel.indexOf(str.charAt(0))> -1){
      var vowelStr = str.concat('way');
      return vowelStr;
    } else { 
      //check for vowels
      if (arr.includes('a')||arr.includes('e')||arr.includes('u')||arr.includes('i')||arr.includes('o')){
        //execute if vowels is found
        while (vowel.indexOf(arr[0]) == -1){
          var newArr = arr.shift();
          arr.push(newArr);
          }
      }
      //join the array from the beginning and finish the piglatin
        var conso = arr.join('').concat('ay');
        return conso;
    }
}
  
function reverseString(str) {
    let newArray= []
    let myArray = str.split('')
    for (let i = 0; i < myArray.length; i++){
      newArray.unshift(myArray[i])
    }
    let newStr = newArray.toString();
    for (let i=0; i< newStr.length; i++){
    newStr = newStr.replace(',', '');
    }
    console.log(newStr)
    return newStr;
  }

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
   
  }

function convertHTML(str) {
    //& = &amp;
    //< = &lt;
    //> = &gt;
    //" = &quot;
    //' = &apos;
    var amp = str.replace(/&/g, '&amp;');
    var lt = amp.replace(/</g, '&lt;');
    var gt = lt.replace(/>/g, '&gt;');
    var quot = gt.replace(/"/g, '&quot;');
    var apos = quot.replace(/'/g, '&apos;');
    console.log(apos);
    return apos;
  }
    
function sumPrimes(num) {
    var sum = 0;
    for (let i=2; i<=num; i++){
    if (isPrime(i) !== false){
      sum += i
    }}
    console.log(sum);
    return sum;
}

function isPrime(num) {
    for(var i = 2; i < num; i++){
      if(num % i === 0) return false}
    
}

function steamrollArray(arr) {
    var flattenedArray = [];
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }

  function binaryAgent(str) {
    const alphabet = {
      "01000001": "A",
      "01000010": "B",
      "01000011": "C",
      "01000100": "D",
      "01000101": "E",
      "01000110": "F",
      "01000111": "G",
      "01001000": "H",
      "01001001": "I",
      "01001010": "J",
      "01001011": "K",
      "01001100": "L",
      "01001101": "M",
      "01001110": "N",
      "01001111": "O",
      "01010000": "P",
      "01010001": "Q",
      "01010010": "R",
      "01010011": "S",
      "01010100": "T",
      "01010101": "U",
      "01010110": "V",
      "01010111": "W",
      "01011000": "X",
      "01011001": "Y",
      "01011010": "Z",
      "01100001": "a",
      "01100010": "b",
      "01100011": "c",
      "01100100": "d",
      "01100101": "e",
      "01100110": "f",
      "01100111": "g",
      "01101000": "h",
      "01101001": "i",
      "01101010": "j",
      "01101011": "k",
      "01101100": "l",
      "01101101": "m",
      "01101110": "n",
      "01101111": "o",
      "01110000": "p",
      "01110001": "q",
      "01110010": "r",
      "01110011": "s",
      "01110100": "t",
      "01110101": "u",
      "01110110": "v",
      "01110111": "w",
      "01111000": "x",
      "01111001": "y",
      "01111010": "z",
      "00100001": "!",
      "00111111": "?",
      "00100111": "'",
      "00100000": " ",
    };
    
    let answer = str
      .split(" ")
      .map(entity => alphabet[entity] || entity)
      .join("");
    console.log(answer);
  }
  