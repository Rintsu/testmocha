let textManipulator = {};

//Function which accepts an argument and returns the type of the argument
textManipulator.checkDataType = function(argument){
  if(argument === null){
    return 'null';
  }
  if(argument === undefined){
    return 'need an argument';
  }
  return typeof argument;
}


textManipulator.longestWord = function(text){
  if(typeof text != "string"){
    return null;
  }

  var textInArray = text.split(' ');
  // console.log(text.split(' '));
  var longest = textInArray[0];

  for(let i = 0; i < textInArray.length; i++){
    if(textInArray[i].length > longest.length){
      longest = textInArray[i];
    }
  }
  return longest;
}

textManipulator.longestWord('The quick brown fox jumped over a tree');



textManipulator.howManyVowels = function(text){
  if(typeof text != "string"){
    return 0;
  }

  var textInArray = text.split('');
  var vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];
  var vowelCount = 0;

  for(let i = 0; i < textInArray.length; i++){
    if(vowels.includes(textInArray[i])){
      vowelCount++;
    }
  }
  return vowelCount;
}


module.exports = textManipulator;
