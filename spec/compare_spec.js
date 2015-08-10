describe( 'Deep Comparison', function () {
  beforeAll( function () {
    this.list123 = {
      value: 1,
      bool: true,
      rest: {
        value: 2,
        bar: 'false',
        rest: {
          value: 3,
          foo: [1,2,'c'],
          rest: null
        }
      }
    };
    this.list1234 = {
      value: 1,
      bool: true,
      rest: {
        value: 2,
        bar: 'false',
        rest: {
          value: 3,
          foo: [1,2,'c'],
          rest: {
            value: 4,
            rest: null
          }
        }
      }
    };
    this.list1234_b = {
      value: 1,
      bool: true,
      rest: {
        value: 2,
        bar: 'false',
        rest: {
          value: 3,
          foo: [1,2,'c'],
          rest: {
            value: 4,
            rest: null
          }
        }
      }
    };
  } );
  it( 'should declare a function called `deepEqual`', function () {
    expect( typeof Exer.deepEqual ).toBe( 'function' );
  } );
  describe( 'declares deepEqual(), a function that', function () {
    it( 'should expect two parameters', function () {
      expect( Exer.deepEqual.length ).toBe( 2 );
    } );
    it( 'should be recursive', function () {
      expect( Exer.deepEqual.toString() ).toMatch( /deepEqual\(/mg );
    } );
    it( 'should, given 1 and 2, return false', function () {
      expect( Exer.deepEqual(1,2) ).toBe( false );
    } );
    it( 'should, given 2 and 2, return true', function () {
      expect( Exer.deepEqual(2,2) ).toBe( true );
    } );
    it( 'should, given "foo" and "bar", return false', function () {
      expect( Exer.deepEqual('foo','bar') ).toBe( false );
    } );
    it( 'should, given 0 and false, return false', function () {
      expect( Exer.deepEqual(0,false) ).toBe( false );
    } );
    it( 'should, given null and {}, return false', function () {
      expect( Exer.deepEqual(null,{}) ).toBe( false );
    } );
    it( 'should, given two different complex objects, return false', function () {
      expect( Exer.deepEqual(this.list123,this.list1234) ).toBe( false );
    } );
    it( 'should, given the same complex object twice, return true', function () {
      expect( Exer.deepEqual(this.list123,this.list123) ).toBe( true );
    } );
    it( 'should, given two complex objects with the same values, '
      + 'return true', function () {
      expect( Exer.deepEqual(this.list1234,this.list1234_b) ).toBe( true );
    } );
  } );
  it( 'should declare a function called `deepClone`', function () {
    expect( typeof Exer.deepClone ).toBe( 'function' );
  } );
  describe( 'declares deepClone(), a function that', function () {
    it( 'should be done after deepEqual()', function () {
      expect( typeof Exer.deepEqual ).toBe( 'function' );
      expect( Exer.deepEqual(this.list123,this.list1234) ).toBe( false );
      expect( Exer.deepEqual(this.list1234,this.list1234_b) ).toBe( true );
    } );
    it( 'should expect one parameter', function () {
      expect( Exer.deepClone.length ).toBe( 1 );
    } );
    it( 'should be recursive', function () {
      expect( Exer.deepClone.toString() ).toMatch( /deepClone\(/mg );
    } );
    it( 'should, given 1, return 1', function () {
      expect( Exer.deepClone(1) ).toBe( 1 );
    } );
    it( 'should, given "foo", return "foo"', function () {
      expect( Exer.deepClone('foo') ).toBe( 'foo' );
    } );
    it( 'should, given 0, return 0', function () {
      expect( Exer.deepClone(0) ).toBe( 0 );
    } );
    it( 'should, given false, return false', function () {
      expect( Exer.deepClone(false) ).toBe( false );
    } );
    it( 'should, given null, return null', function () {
      expect( Exer.deepClone(null) ).toBeNull();
    } );
    it( 'should, given undefined, return undefined', function() {
      expect( Exer.deepClone(undefined) ).toBe( undefined );
    } );
    it( 'should, given {}, return {}', function () {
      expect( Exer.deepClone({}) ).toEqual( {} );
    } );
    it( 'should, given [1,2,3], return [1,2,3]', function () {
      expect( Exer.deepClone([1,2,3]) ).toEqual( [1,2,3] );
    } );
    it( 'should, given a complex object, return a different object that has '
      + 'the same values', function () {
      var result1 = Exer.deepClone( this.list123 );
      var result2 = Exer.deepClone( this.list1234 );
      expect( Exer.deepEqual(result1,this.list123) ).toBe( true );
      expect( Exer.deepEqual(result2,this.list1234) ).toBe( true );
    } );
  } );
} );