export * from './coordinate.js'
export * from './functions.js';

import {Coordinate} from './coordinate.js';
import {Methods} from './functions.js';
import { isAntiSymmetric, isIrreflexive, isReflexive, isSymmetric, isTransitive } from './properties-relations.js';


let s1 = new Set();
let coord1: Coordinate ={
	x: 100, 
	y: 51
};

let set1 = new Set([100,200,500]);
let set2 = new Set([1000,2000,3000]);
let set4 = new Set([100, 200,5])

let ss = Methods.createCartesianProduct(set1, set2);
// console.log(Methods.isSubset(set1, set4)) 

let setofcoords = new Set();
setofcoords.add({x:1,y:3});
setofcoords.add({x:90,y:33});
setofcoords.add({x:88,y:200});

// console.log(setofcoords);
let aaa = Methods.range(set1);
// console.log(aaa);

let tempset = new Set()
// let xx :Coordinate= {x: 100, y: 100};
// tempset.add(xx);
// tempset.add({x: 1, y: 1});
// tempset.add({x: 2, y: 2});
// tempset.add({x: 2, y: 1});
// tempset.add({x: 1, y: 2});

tempset.add({x: 1, y: 8});
tempset.add({x: 2, y: 2});

tempset.add({x: 8, y: 2});

tempset.add({x: 1, y: 2});
tempset.add({x: 8, y: 11});



// console.log(isReflexive(set1, tempset));
let s = new Set([1,2,3])
console.log(isIrreflexive(s, tempset))