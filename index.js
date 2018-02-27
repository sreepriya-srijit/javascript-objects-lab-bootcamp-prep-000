var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object,key, value){
  var newObj = Object.assign({},recipes,object, {[key]: value})
  return newObj
}