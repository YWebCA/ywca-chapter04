describe( 'Reversing an Array', function () {
  beforeEach( function () {
    this.start1 = [ 1 ];
    this.copy1  = this.start1.slice(0);
    this.end1   = [ 1 ];
    this.start2 = [ 1, 2, 3, 4, 5 ];
    this.copy2  = this.start2.slice(0);
    this.end2   = [ 5, 4, 3, 2, 1 ];
    this.start3 = [ 1, 'a', 2, 'b', 3, 'c' ];
    this.copy3  = this.start3.slice(0);
    this.end3   = [ 'c', 3, 'b', 2, 'a', 1 ];
  } );
  it( 'should declare a function called `reverseArray`', function () {
    expect( typeof Exer.reverseArray ).toBe( 'function' );
  } );
  describe( 'declares reverseArray(), a function that', function () {
    it( 'should expect one parameter', function () {
      expect( Exer.reverseArray.length ).toBe( 1 );
    } );
    it( 'should return an array', function () {
      expect( typeof Exer.reverseArray([1]) ).toBe( 'object' );
      expect( Exer.reverseArray([1]) instanceof Array ).toBe( true );
    } );
    describe( 'returns an array that', function () {
      it( 'should be the reverse of the argument array', function () {
        expect( Exer.reverseArray(this.start1) ).toEqual( this.end1 );
        expect( Exer.reverseArray(this.start2) ).toEqual( this.end2 );
        expect( Exer.reverseArray(this.start3) ).toEqual( this.end3 );
      } );
      it( 'should be a new array and not change the original argument array', function () {
        expect( this.start1 ).toEqual( this.copy1 );
        expect( this.start2 ).toEqual( this.copy2 );
        expect( this.start3 ).toEqual( this.copy3 );
      } );
    } );
  } );
  it( 'should declare a function called `reverseArrayInPlace', function () {
    expect( typeof Exer.reverseArrayInPlace ).toBe( 'function' );
  } );
  describe( 'declares reverseArrayInPlace(), a function that', function () {
    it( 'should expect one parameter', function () {
      expect( Exer.reverseArrayInPlace.length ).toBe( 1 );
    } );
    it( 'should not return anything', function () {
      expect( Exer.reverseArrayInPlace([1]) ).toBe( undefined );
    } );
    it( 'should reverse the argument array', function () {
      Exer.reverseArrayInPlace( this.start1 );
      Exer.reverseArrayInPlace( this.start2 );
      Exer.reverseArrayInPlace( this.start3 );
      expect( this.start1 ).toEqual( this.end1 );
      expect( this.start2 ).toEqual( this.end2 );
      expect( this.start3 ).toEqual( this.end3 );
    } );
  } );
  describe( 'Once More with Recursion', function () {
    it( 'should declare a function called `reverseArrayRecur`', function () {
      expect( typeof Exer.reverseArrayRecur ).toBe( 'function' );
    } );
    describe( 'declares reverseArrayRecur(), a function that', function () {
      it( 'should expect one parameter', function () {
        expect( Exer.reverseArrayRecur.length ).toBe( 1 );
      } );
      it( 'should return an array', function () {
        expect( typeof Exer.reverseArrayRecur([1]) ).toBe( 'object' );
        expect( Exer.reverseArrayRecur([1]) instanceof Array ).toBe( true );
      } );
      it( 'should be recursive', function () {
        expect( Exer.reverseArrayRecur.toString() ).toMatch( /reverseArrayRecur\(/mg );
      } );
      describe( 'returns an array that', function () {
        it( 'should be the reverse of the argument array', function () {
          expect( Exer.reverseArrayRecur(this.start1) ).toEqual( this.end1 );
          expect( Exer.reverseArrayRecur(this.start2) ).toEqual( this.end2 );
          expect( Exer.reverseArrayRecur(this.start3) ).toEqual( this.end3 );
        } );
        it( 'should not modify the argument array', function () {
          expect( this.start1 ).toEqual( this.copy1 );
          expect( this.start2 ).toEqual( this.copy2 );
          expect( this.start3 ).toEqual( this.copy3 );
        } );
      } );
    } );
  } );
} );