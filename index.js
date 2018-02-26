var recipes = {prop1: 1}

function updateObjectWithKeyAndValue(object,key, value){
  var copy = Object.assign({}, object,recipes, {key: value})
  return copy
}