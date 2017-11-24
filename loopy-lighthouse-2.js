function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];
  var firstMultiple = multiples[0];
  var secondMultiple = multiples[1];
  var firstWord = words[0];
  var secondWord = words[1];

  for (var i = start; i <= end; i++) {
    if (i % firstMultiple === 0 && i % secondMultiple === 0) {
      console.log(firstWord + secondWord);
    } else if (i % firstMultiple === 0) {
      console.log(firstWord);
    } else if (i % secondMultiple === 0){
      console.log(secondWord);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);