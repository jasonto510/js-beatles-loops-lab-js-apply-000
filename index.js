function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var musiciansPlusInstruments = []
  for (var i = 0; i < arrayMusicians.length; i ++){
    musiciansPlusInstruments.push(arrayMusicians[i] + arrayInstruments[i])
  }
  return musiciansPlusInstruments
}
