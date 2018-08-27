let assert = require('assert');
let textManipulator = require('../app.js')

describe('typeOf', function(){
  it('Should return number when given a number as argument', function(){
    assert.equal('number', textManipulator.checkDataType(42));
  });
  it('Should return null when given a null as argument', function(){
    assert.equal('null', textManipulator.checkDataType(null));
  });
  it('Should return error if not given an argument', function(){
    assert.equal('need an argument', textManipulator.checkDataType());
  });
});

describe('longestWord', function(){
  it('Should return "jumped" when given following text as parameter', function(){
    assert.equal('jumped', textManipulator.longestWord('The quick brown fox jumped over a tree'));
  });
  it('Should return a really awkward and long word', function(){
    assert.equal('otorhinology', textManipulator.longestWord('What if I become an otorhinology'));
  });
  it('Should return the longest number', function(){
    assert.equal(999999, textManipulator.longestWord('3000 12 4566 999999'));
  });
  it('Should return null if the parameter is not in text', function(){
    assert.equal(null, textManipulator.longestWord(3000));
  });
});

describe('howManyVowels', function(){
  it('Should return 3 when given a word with 3 vowels', function(){
    assert.equal(3, textManipulator.howManyVowels('kiiski'));
  });
  it('Should return 0 when given an empty string', function(){
    assert.equal(0, textManipulator.howManyVowels(''));
  });
  it('Should return 0 when given a word with 0 vowels', function(){
    assert.equal(0, textManipulator.howManyVowels('sskrrrtbr'));
  });
  it('Should return 0 when given any other data type', function(){
    assert.equal(0, textManipulator.howManyVowels(5987));
    assert.equal(0, textManipulator.howManyVowels(undefined));
    assert.equal(0, textManipulator.howManyVowels(null));
  });
});
