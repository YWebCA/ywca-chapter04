Exer = require('./answers/index.js');

describe( "Chapter 4", function () {
  describe( "Data  Sets", function(){
  	describe( "Data 1 exercise", function() {
      it( "should have a dataOne function", function() {
        expect( typeof Exer.dataOne ).toBe('function');
      });
  	});

    describe( "Data 2 exercise", function() {
      it( "should have a dataTwo function", function() {
        expect( typeof Exer.dataOne ).toBe('function');
      });
    });
  });

  describe( "Properties exercise" , function() {
    it( "should have a properties function", function() {
      expect( typeof Exer.properties ).toBe('function');
    });
  });

  describe( "Methods exercise" , function() {
    it( "should have a methods function", function() {
      expect( typeof Exer.methods ).toBe('function');
    });
  });

  describe( "Objects exercise" , function() {
    it( "should have a objects function", function() {
      expect( typeof Exer.objects ).toBe('function');
    });
  });

  describe( "Mutability exercise" , function() {
    it( "should have a mutability function", function() {
      expect( typeof Exer.mutability ).toBe('function');
    });
  });

  describe( "Objects as Maps exercise" , function() {
    it( "should have a maps function", function() {
      expect( typeof Exer.maps ).toBe('function');
    });
  });

  describe( "Arrayology exercise" , function() {
    it( "should have a arrayology function", function() {
      expect( typeof Exer.arrayology ).toBe('function');
    });
  });

  describe( "Strings exercise" , function() {
    it( "should have a strings function", function() {
      expect( typeof Exer.strings ).toBe('function');
    });
  });

  describe( "Arguments exercise" , function() {
    it( "should have a arguments function", function() {
      expect( typeof Exer.arguments ).toBe('function');
    });
  });

  describe( "Math exercise" , function() {
    it( "should have a math function", function() {
      expect( typeof Exer.math ).toBe('function');
    });
  });
});