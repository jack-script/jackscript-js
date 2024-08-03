import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'


// lets declare the Jacksript set:
let a = new JackscriptSet<number>();
let b = new JackscriptSet<number>();
let javascriptSet = new Set([100,200]);

// a.add(1,2,3,4);
// b.add(6,7,8,9);

// // console.log(a)
// // console.log(b);

let aToB: Relation<number, number> = a.createCartesian(b);
console.log(aToB);
let aToJavascriptSet = a.createCartesian(javascriptSet);

// console.log(aToJavascriptSet);

// // lets create a coordinate and add it to the set:

// let coordinate1: Coordinate<number, string> = [1,'a'];

// // lets say c is a set of coordinates:
// let c = new JackscriptSet<Coordinate<number, string>>();
// c.add(coordinate1);
// c.add([4, 'b']);

// console.log(c);


a.add(100);
a.add(200)
console.log(a);
