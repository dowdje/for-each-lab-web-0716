function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(cb){
  var array = ["I", "am", 27, "years", "old!"]
  array.forEach(cb)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}