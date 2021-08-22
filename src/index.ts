export * from './coordinate.js'
export * from './functions.js';

import {Coordinate} from './coordinate.js';
import {Methods} from './functions.js';


let s1 = new Set();
let coord1: Coordinate ={
	x: 100, 
	y: 51
};


// users needs to declare a javascript set and pass in the type of the set:
/*let s2 = new Set()
let ssmall = new Set<Coordinate>();
ssmall.add({x:1, y:2});
ssmall.add({x:11, y:22});

// then create a new coordinate and add it to the set:
s2.add({x: 100, y: 1000});
s2.add(ssmall);

console.log('size is:'+ s2.size);


s2.forEach((e)=>{
	console.log(e)
})*/

let set1 = new Set([100,200,500]);
let set2 = new Set([1000,2000,3000]);
let set4 = new Set([100, 200])

let ss = Methods.createCartesianProduct(set1, set2);
// console.log(Methods.isSubset(set1, set4)) 

