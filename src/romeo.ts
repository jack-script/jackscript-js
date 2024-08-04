import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'

// Make a mental note that a relation is not the same thing as a Jackscript set:
// Keep them seperate... Dont try to run jackscriptset operations/methods on a realtion type.

// lets declare the Jacksript set:
let setA = new JackscriptSet<number>();
let setB = new JackscriptSet<number>();

let nsetA: any = new Set<number>([1,2,3]);
let nsetB: any = new Set<number>([4,5,6]);
setA.add(1,2,6);
setB.add(6,7);

let setR: Relation<number, number> = setA.createCartesian(setB);


// create a test Coordinate array and add these values in a test Relation set, then compare the sets:
// let testRelation: Relation<number, number> = new JackscriptSet<number>();
let test = new JackscriptSet<Coordinate<number, number>>();
let myarray : Coordinate<number, number> [] = [[1,6], [1,7], [2,6], [2,7]];

for(let item of myarray){
    test.add(item);
}
test.print();

// console.log(JackscriptSet.domain(setR));




// let myarray : Coordinate<number, number> [] = [[1,6], [1,7], [2,6], [2,7]];
// let cart : Relation<number, number> = setA.createCartesian(setB);
