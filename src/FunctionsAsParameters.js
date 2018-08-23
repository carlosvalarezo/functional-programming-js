const ast = [['plainText', 'You are in a vast desert'],
  ['paragraph'],
  ['alternative', 1, 'Head north'],
  ['alternative', 2, 'Head south'],
  ['alternative', 0, 'Hang around']];

const type = 'alternative';

(function nodesByType(type, ast){
  var result = [];
  for(var i = 0, l = ast.length; i < l; i++){
    if(type === ast[i][0]){
      result.push(ast[i]);
    }
  }
  console.log(result);
  return result;
})(type, ast);
