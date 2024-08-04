import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'

// Make a mental note that a relation is not the same thing as a Jackscript set:
// Keep them seperate... Dont try to run jackscriptset operations/methods on a realtion type.

// lets declare the Jacksript set:
let setA = new JackscriptSet<number>();
let setB = new JackscriptSet<number>();
setA.add(1,2,6);
setB.add(6,7);

// setC is a union of setA and B:
let setC = JackscriptSet.union(setA, setB);
setC.print();




let myarray : Coordinate<number, number> [] = [[1,6], [1,7], [2,6], [2,7]];
let cart : Relation<number, number> = setA.createCartesian(setB);
// console.log(cart);

let a = new Set<number>();
a =  JackscriptSet.union(setA, setB);
// a.forEach((item: any)=>{
//     console.log(a);
// })



// let result : Relation<number, number> = new JackscriptSet<Coordinate<number, number>>(myarray)


// create a new jacksript set of the type relation:
let RelationSet = new JackscriptSet<Coordinate<number, number>>();
let coordinate: Coordinate<number, number>;
coordinate = [100,200];
let coordinate2: Coordinate<number, number> = [800, 900];


RelationSet.add(coordinate, coordinate2)

// console.log(RelationSet);






// let aToJavascriptSet = a.createCartesian(javascriptSet);

// console.log(aToJavascriptSet);

// // lets create a coordinate and add it to the set:

// let coordinate1: Coordinate<number, string> = [1,'a'];

// // lets say c is a set of coordinates:
// let c = new JackscriptSet<Coordinate<number, string>>();
// c.add(coordinate1);
// c.add([4, 'b']);

// console.log(c);

