var reverseArray = function ( start ) {
  var end = [];
  for ( var i = 0; i < start.length; i++ )
    end.unshift( start[i] );
  return end;
};

var reverseArrayInPlace = function ( arr ) {
  for ( var i = 0; i < arr.length / 2; i++ ) {
    var firstValue = arr[i];
    var lastIndex = arr.length - 1 - i;
    arr[i] = arr[ lastIndex ];
    arr[ lastIndex ] = firstValue;
  }
}

var reverseArrayRecur = function ( arr ) {
  if( arr.length === 1 ) return arr;
  return reverseArrayRecur( arr.slice(1) ).concat( arr[0] );
};





/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof reverseArray !== 'undefined') Exer.reverseArray = reverseArray;
if (typeof reverseArrayInPlace !== 'undefined') Exer.reverseArrayInPlace = reverseArrayInPlace;
if (typeof reverseArrayRecur !== 'undefined') Exer.reverseArrayRecur = reverseArrayRecur;

if (typeof module === 'undefined') module = {};
module.exports = Exer;

