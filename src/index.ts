export * from './coordinate.js'

import {Coordinate} from './coordinate.js';

let s1 = new Set();
let coord1: Coordinate ={
	x: 100, 
	y: 51
};


// users needs to declare a javascript set and pass in the type of the set:
let s2 = new Set<Coordinate>()

// then create a new coordinate and add it to the set:
s2.add({x: 100, y: 1000});

console.log(s2 instanceof Set);