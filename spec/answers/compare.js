deepEqual = function ( a, b ) {
  if  (a === b ) return true;
  if ( a == null || typeof a != "object" ||
       b == null || typeof b != "object")
    return false;
  var a_props = 0, b_props = 0;
  for ( var prop in a ) a_props++;
  for ( var prop in b ) {
    b_props++;
    if ( !(prop in a) ) return false;
    if ( !deepEqual( a[prop], b[prop] ) ) return false;
  }
  return a_props == b_props;
};

var deepClone = function ( original ) {
  if ( typeof original != 'object' ) return original;
  if ( original === null ) return null;
  if ( original instanceof Array ) {
    var clone = [];
    for ( var i = 0; i < original.length; i++ )
      clone.push( original[i] );
  } else {
    var clone = {};
    for ( var prop in original )
      clone[prop] = deepClone( original[prop] );
  }
  return clone;
};





/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof deepEqual !== 'undefined') Exer.deepEqual = deepEqual;
if (typeof deepClone !== 'undefined') Exer.deepClone = deepClone;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
