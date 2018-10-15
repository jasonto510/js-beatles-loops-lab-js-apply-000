function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var musiciansPlusInstruments = []
  for (var i = 0; i < arrayMusicians.length; i ++){
    var result = (`${arrayMusicians[i]} plays  ${arrayInstruments[i]}`)
    musiciansPlusInstruments.push(result)
  }
  return musiciansPlusInstruments
}
