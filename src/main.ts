
// Run directly with: npx ts-node src/main.ts
// TODO: Must compile first with: tsc src/main.ts

import { say, Hello, Age } from './hello';

console.log( "Yo!" );

say( `Shazzy! age ${Age}?`, new Date() );

let me = "Shahzad";

const names = [ "Moe", "Larry", "Curly" ];

names.forEach( (n) => {
    console.log( n.toUpperCase() );
});

