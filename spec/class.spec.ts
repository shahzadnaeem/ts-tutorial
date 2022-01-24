import { AClass } from '../src/class';

describe( "Basic AClass tests", () => {
    let theClass: AClass;
    const John = "John";

    beforeEach( () => {
        theClass = new AClass( John );
    });

    it( "Class should be an object", () => {
        expect(typeof AClass).toBe("function");
    });

    it( "Should be an instance", () => {
        expect(theClass).toBeInstanceOf( AClass );
    });
});
