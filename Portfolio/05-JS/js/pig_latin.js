function igpayAtinlay(str) {
  var returnArray = [];
  
  // Split the input sentence into words
  var wordArray = str.split(" ");

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var beginning = "";

    // Check if the first character is a vowel
    if (/[aeiouAEIOU]/.test(word.charAt(0))) {
      returnArray.push(word + "way"); // Words that start with a vowel get "way" added
    } else {
      // Handle consonant-starting words
      for (var ii = 0; ii < word.length; ii++) {
        if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
          break;
        } else {
          beginning += word.charAt(ii);
        }
      }
      var restOfWord = word.slice(beginning.length); // Rest of the word after consonant(s)
      returnArray.push(restOfWord + beginning + "ay"); // Pig Latin transformation
    }
  }

  return returnArray.join(" ");
}

// Test examples
console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
