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









/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value]; 
if(module) module.exports = Exer;
