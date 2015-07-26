Exer.isEven = function ( n ) {
  if ( n === 0 ) return true;
  else if ( n === 1 ) return false;
  else if ( n < 0 ) return Exer.isEven( -n );
  else return Exer.isEven( n - 2 );
};

Exer.isFooDivByBar = function ( foo, bar ) {
  if ( foo === 0 ) return true;
  else if ( 0 < foo && foo < bar ) return false;
  else return Exer.isFooDivByBar( foo - bar, bar );
};

Exer.isDivisibleBy = function (foo) {
  console.log('foo', foo);
  console.log('bar', bar);
  console.log('=== BEGIN ===');
  var isDivisible = function (bar) {
    if (bar < foo) {
      return false;
    }
    else if (bar == foo) {
      return true;
    }
    else {
      bar -= foo;
      console.log('foo', foo);
      console.log('bar', bar);
      return isDivisible(bar);
    }
  };

  return isDivisible;
}
