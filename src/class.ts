
export class AClass {

    private _name: string;

    constructor( name: string ) {
        this._name = name;
    }

    get name() { return this._name; }

    say() : string {
        return `Hi ${this._name}!`;
    }
}
