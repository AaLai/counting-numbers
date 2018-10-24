function countLetters(input) {
  var result = {};
  var convert = input.split('');
    convert.forEach(function(item) {
      if  (result[item] !== undefined) {
        result[item] += 1
      } else if (item !== ' ') {
        result[item] = 1
      }
    });

    console.log(result);
}

countLetters("lighthouse in the house");