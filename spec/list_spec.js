describe( 'A List', function () {
  beforeAll( function () {
    this.list1 = {
      value: 1,
      rest: null
    };
    this.list123 = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    };
    this.list4123 = {
      value: 4,
      rest: {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }
    };
    this.list4123_b = {
      value: 4,
      rest: {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }
    };
  } );
  it( 'should be completed after the deep comparison exercises', function () {
    expect( typeof Exer.deepEqual ).toBe( 'function' );
    expect( Exer.deepEqual(this.list123, this.list1234) ).toBe( false );
    expect( Exer.deepEqual(this.list1234, this.list1234_b) ).toBe( true );
  } );
  describe( 'end of chapter exercises', function () {
    it( 'should declare a function called `arrayToList`', function () {
      expect( typeof Exer.arrayToList ).toBe( 'function' );
    } );
    describe( 'declares arrayToList(), a function that', function () {
      it( 'should expect one parameter', function () {
        expect( Exer.arrayToList.length ).toBe( 1 );
      } );
      it( 'should return an object', function () {
        expect( typeof Exer.arrayToList(1) ).toBe( 'object' );
      } );
      it( 'should, given [1], return the appropriate list', function () {
        var result = Exer.arrayToList( [1] );
        expect( Exer.deepEqual( result, this.list1 ) ).toBe( true );
      } );
      it( 'should, given [1,2,3], return the appropriate list', function () {
        var result = Exer.arrayToList( [1,2,3] );
        expect( Exer.deepEqual( result, this.list123) ).toBe( true );
      } );
    } );
    it( 'should declare a function called `listToArray`', function () {
      expect( typeof Exer.listToArray ).toBe( 'function' );
    } );
    describe( 'declares listToArray(), a function that', function () {
      it( 'should expect one parameter', function () {
        expect( Exer.listToArray.length ).toBe( 1 );
      } );
      it( 'should return an array', function () {
        var result = Exer.listToArray( this.list1 );
        expect( typeof result ).toBe( 'object' );
        expect( result instanceof Array ).toBe( true );
      });
      it( 'should, given the list, returns [1]', function () {
        var result = Exer.listToArray( this.list1 );
        expect( result ).toEqual( [1] );
      } );
      it( 'should, given the list, returns [1,2,3]', function () {
        var result = Exer.listToArray( this.list123 );
        expect( result ).toEqual( [1,2,3] );
      } );
    });
    it( 'should declare a function called `prepend`', function () {
      expect( typeof Exer.prepend ).toBe( 'function' );
    } );
    describe( 'declares prepend(), a function that', function () {
      it( 'should expect two parameters', function () {
        expect( Exer.prepend.length ).toBe( 2 );
      } );
      it( 'should return an object', function () {
        var result = Exer.prepend(10, this.list1);
        expect( result ).not.toBeNull();
        expect( typeof result ).toBe( 'object' );
      } );
      it( 'should, given prepend(4,list) where list is the list corresponding '
        + 'to [1,2,3], return a list with a new element prepended', function () {
        var result = Exer.prepend( 4, this.list123 );
        expect( Exer.thisEqual(result, this.list4123) ).toBe( true );
      } );
    } );
    it( 'should declare a function called `nth`', function () {
      expect( typeof Exer.nth ).toBe( 'function' );
    } );
    describe( 'declares nth(), a function that', function () {
      it( 'should expect two parameters', function () {
        expect( Exer.nth.length ).toBe( 2 );
      } );
      it( 'should declare a function called nth_recursive' );
      it( 'should, given the list corresponding to [4,1,2,3] and 2, return the number 3' );
      it( 'should, given the list corresponding to [1,2,3] and 3, return undefined' );
      it( 'should use a loop of some kind' );
    describe( 'declares nth_recursive(), a function that', function () {
      it( 'should expect two parameters' );
      it( 'should be recursive' );
      it( 'should, given the list corresponding to [4,1,2,3] and 2, return the number 3' );
      it( 'should, given the list corresponding to [1,2,3] and 3, return undefined' );
    } );
  } );
  describe( 'A Doubly-Linked List', function () {
    it( 'should have tests', function () {
      expect( true ).toBe( false );
    } );
  } );
} );