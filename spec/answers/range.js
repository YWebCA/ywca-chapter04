var range = function ( start, end, step ) {
  step = step || 1;
  var result = [];
  for (
    var i = start;
    step > 0 ? i <= end : i >= end;
    i+=step
  ) result.push( i );
  return result;
};

var sum = function ( array ) {
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

var encrypt = function ( string, shift ) {
  return crypt( string, shift, true );
};

var decrypt = function ( string, shift ) {
  return crypt( string, shift, false );
};






/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof range !== 'undefined') Exer.range = range;
if (typeof sum !== 'undefined') Exer.sum = sum;
if (typeof encrypt !== 'undefined') Exer.encrypt = encrypt;
if (typeof decrypt !== 'undefined') Exer.decrypt = decrypt;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
