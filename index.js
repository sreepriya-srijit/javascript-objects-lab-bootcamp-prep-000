var recipes = {prop1: 1}

function updateObjectWithKeyAndValue(object,key, value){
  var newObj = Object.assign({}, object,recipes, {key: value})
  return newObj
}