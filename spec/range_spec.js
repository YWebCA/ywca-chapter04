describe( 'The Sum of a Range', function () {
  describe( 'Part 1', function () {
    it( 'should declare a function called `range`', function () {
      expect( typeof Exer.range ).toBe( 'function' );
    } );
    describe( '`range()` is a function that', function () {
      beforeAll( function () {
        this.rangeDef = Exer.range.toString();
      } );
      it( 'should expect at least two parameters', function () {
        expect( Exer.range.length ).toBeGreaterThan(1);
      } );
      it( 'parameter one should be named `start`', function () {
        expect( this.rangeDef ).toMatch( /function\s*\(\s*start\s*,/gm );
      } );
      it( 'parameter two should be named `end`', function () {
        expect( this.rangeDef ).toMatch( /function\s*\(\s*start\s*,\s*end\s*[,)]/gm );
      } );
      it( 'should return an array', function () {
        var result = Exer.range(2, 7)
        expect( typeof result ).toBe( 'object' );
        expect( result instanceof Array ).toBe( true );
      } );
      describe( 'returns an array that contains all the numbers between '
              + '`start` and `end`, inclusive, such that', function () {
        it( 'given range(2,7), should return [2,3,4,5,6,7]', function () {
          expect( Exer.range(2,7) ).toEqual( [2,3,4,5,6,7] );
        } );
        it( 'given range(-4,6), should return '
          + '[-4,-3,-2,-1,0,1,2,3,4,5,6]', function () {
          expect( Exer.range(-4,6) ).toEqual( [-4,-3,-2,-1,0,1,2,3,4,5,6] );
        } );
      } );
    } );
    it( 'should declare a function calle `sum`', function () {
      expect( typeof Exer.sum ).toBe( 'function' );
    } );
    describe( '`sum()` is a function that', function () {
      it( 'should expect one parameter', function () {
        expect( Exer.sum.length ).toBe(1);
      } );
      it( 'should return a number', function () {
        expect( typeof Exer.sum([1]) ).toBe( 'number' );
      } );
      describe( 'returns a number that is the sum of the array argument, '
              + 'such that', function () {
        it( 'given sum( range(1,10) ), should return 55',
            function () {
          expect( Exer.sum(Exer.range(1,10)) ).toBe(55);
        } );
        it( 'given sum( range(23,27) ), should return 125',
            function () {
          expect( Exer.sum(Exer.range(23,27)) ).toBe(125);
        } );
      } );
    } );
  } );
  describe( 'Part 2', function () {
    describe( '`range()` is a function that', function () {
      it( 'should expect three parameters', function () {
        expect( Exer.range.length ).toBe(3);
      } );
      it( 'argument three should be named `step`', function () {
        expect( Exer.range.toString() ).toMatch( /function\s*\(\s*start\s*,\s*end\s*,\s*step\s*\)/mg );
      } );
      describe( 'returns an array that contains all the numbers between '
              + '`start` and `end`, inclusive, at an increment of `step`, '
              + 'such that', function () {
        it( 'given range(0,10,2), should return [0,2,4,6,8,10]', function () {
          expect( Exer.range(0,10,2) ).toEqual( [0,2,4,6,8,10] );
        } );
        it( 'given range(5,2,-1), should return [5,4,3,2]', function () {
          expect( Exer.range(5,2,-1) ).toEqual( [5,4,3,2] );
        } );
        it( 'given range(4,26,5), should return [4,9,14,19,24]', function () {
          expect( Exer.range(4,26,5) ).toEqual( [4,9,14,19,24] );
        } );
        it( 'given range(1,5,6), should return [1]', function () {
          expect( Exer.range(1,5,6) ).toEqual( [1] );
        } );
      } );
    } );
  } );
  describe( 'Caeser Cipher', function () {
    it( 'should declare a function called `encrypt`' );
    describe( 'declares encrypt(), a function that', function () {
      it( 'should expect two parameters' );
      it( 'should return a string' );
      it( 'given "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG" and "D", should return "WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ"' );
    } );
    it( 'should declare a function called `decrypt`' );
  } );
} );