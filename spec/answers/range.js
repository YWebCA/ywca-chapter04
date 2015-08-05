Exer.range = function ( start, end, step ) {
  step = step || 1;
  var result = [];
  for (
    var i = start;
    step > 0 ? i <= end : i >= end;
    i+=step
  ) result.push( i );
  return result;
};

Exer.sum = function ( array ) {
  var result = 0;
  for ( var i = 0; i < array.length; i++ )
    result += array[i];
  return result;
};

var crypt = function ( string, shift, encrypt ) {
  var codex = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
    , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  shift = codex.indexOf( shift );    // convert the letter to an index
  shift = encrypt ? shift : -shift;  // positive for encrypt, negative for decrypt
  var result = '';
  for ( var i = 0; i < string.length; i++ ) {
    var letterIndex = codex.indexOf( string[i] );
    if( letterIndex === -1 )  // whitespace or punctuation, etc.
      result += string[i];
    else {
      letterIndex += codex.length + shift;
      letterIndex %= codex.length;
      result += codex[ letterIndex ];
    }
  }
  return result;
}

Exer.encrypt = function ( string, shift ) {
  return crypt( string, shift, true );
};

Exer.decrypt = function ( string, shift ) {
  return crypt( string, shift, false );
};






/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value]; 
if(module) module.exports = Exer;
