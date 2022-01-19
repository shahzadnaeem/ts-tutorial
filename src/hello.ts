
export function say( who: string, date: Date ) {
    console.log( `Hello ${who}, today is ${date} apparently!` )
}

export interface Hello { name: string, age: number };
export const Age = 23;

export function randomDice() {
    return 7;
}
