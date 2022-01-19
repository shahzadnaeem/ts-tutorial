import { AClass } from '../src/class';

describe( "Basic AClass tests", () => {
    let theClass: AClass;
    const John = "John";

    beforeEach( () => {
        theClass = new AClass( John );
    });

    it( "Should be an instance", () => {
        expect(theClass).toBeInstanceOf( AClass );
    });
});
