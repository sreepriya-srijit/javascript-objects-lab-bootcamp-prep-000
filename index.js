var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object,key, value){
  var newObj = Object.assign({},recipes,object, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  return delete object[key]
}