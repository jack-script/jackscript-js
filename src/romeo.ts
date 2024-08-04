import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'

// Make a mental note that a relation is not the same thing as a Jackscript set:
// Keep them seperate... Dont try to run jackscriptset operations/methods on a realtion type.

// lets declare the Jacksript set:
let a = new JackscriptSet<number>();
let b = new JackscriptSet<number>();
let javascriptSet = new Set([100,200]);

a.add(1,2,3,4);
b.add(6,7,8,9);

let aToB: Relation<number, number> = a.createCartesian<number>(b);
console.log('Relation from a to b is :  ', aToB);


// create a new jacksript set of the type relation:
let RelationSet = new JackscriptSet<Coordinate<number, number>>();
let coordinate: Coordinate<number, number>;
coordinate = [100,200];
let coordinate2: Coordinate<number, number> = [800, 900];


RelationSet.add(coordinate, coordinate2)

console.log(RelationSet);






// let aToJavascriptSet = a.createCartesian(javascriptSet);

// console.log(aToJavascriptSet);

// // lets create a coordinate and add it to the set:

// let coordinate1: Coordinate<number, string> = [1,'a'];

// // lets say c is a set of coordinates:
// let c = new JackscriptSet<Coordinate<number, string>>();
// c.add(coordinate1);
// c.add([4, 'b']);

// console.log(c);

