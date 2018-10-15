function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var musiciansPlusInstruments = []
  for (var i = 0; i < arrayMusicians.length; i ++){
    var result = (`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
    musiciansPlusInstruments.push(result)
  }
  return musiciansPlusInstruments
}

function johnLennonFacts(facts){
  var output = "";
  var exclamation = "!!!";
  var i = 0;
  var array_answer = [];
  while (i < facts.length){
    output = facts[i].concat(exclamation);
    array_answer.push(output);
    i ++;
  }
  return array_answer;
}
