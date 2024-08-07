import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'

function coordinatesEqual<T>(a: Coordinate<T, T>, b: Coordinate<T, T>): boolean {
    return a[0] === b[0] && a[1] === b[1];
}

// Make a mental note that a relation is not the same thing as a Jackscript set:
// Keep them seperate... Dont try to run jackscriptset operations/methods on a realtion type.

// lets declare the Jacksript set:
let setA = new JackscriptSet<number>();
let setB = new JackscriptSet<number>();

let nsetA: any = new JackscriptSet<number>([1,2,3]);
let nsetB: any = new Set<number>([4,5,6]);
setA.add(1,2,6);
setB.add(6,7);

let setR: Relation<number | string, number> = setA.createCartesian(setB);


// create a test Coordinate array and add these values in a test Relation set, then compare the sets:
// let testRelation: Relation<number, number> = new JackscriptSet<number>();
let test = new JackscriptSet<Coordinate<number, number>>();
let myarray : Coordinate<number, number> [] = [[1,1], [2,2], [6,6]] as const;

for(let item of myarray){
    test.add(item);
}

// console.log(nsetA.isReflexive(test));
let cod : Coordinate<number, number> = [1,1];
// console.log(myarray[0])
// console.log(cod);

// console.log(coordinatesEqual());
console.log(myarray[0] == cod);


// console.log(nsetA.isIrreflexive(test));
