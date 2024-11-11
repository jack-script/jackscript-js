import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'
import {isCoordinate, coordinatesEqual} from './typechecker'



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


// testing the intersect method:
let intersectArray = JackscriptSet.intersect(setA, setB);
// console.log(intersectArray);


// 
let testSet4 = new JackscriptSet<string>("samuel")
let testSet5 = new JackscriptSet<string>("sam");
let result = new JackscriptSet<string>;


// Testing of the domain::: not done:
let testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
let testSet2 = new JackscriptSet<number>([3,4,5]);
let water : Relation<number, number> = testSet.createCartesian(testSet2);
let domainTest = new JackscriptSet<number>([1,2,3,4,5,6])
let domainTest2 = JackscriptSet.domain(water)

let testSetSubset = new JackscriptSet<number>([1,2]);

// test issubset:
let testSet3 = new JackscriptSet<number>([3,4,5,7]);
let testSetz = new JackscriptSet<number>([1,2,3,4,5,6]);

// console.log(testSet3.isSubsetOf(testSetz));

// Testing reflexivity:
let reflexive = new JackscriptSet<number>([1,2,3]);
let reflexiveTest = new JackscriptSet<Coordinate<number, number>>([[1,1],[2,2],[3,3]]);
// console.log(reflexive.isReflexive(reflexiveTest));
// reflexive.isReflexive(reflexiveTest);

// console.log(reflexive.hasNew(reflexiveTest))

let cod : Coordinate<number, number> = [1,1];
let cod3 : Coordinate<number, number> = [1, 1];
let cod4 : Coordinate<number, number> = [3, 4];
let codfalse = [1,1];
// console.log(isCoordinate<number, number>(cod)); // returns true
// console.log(isCoordinate<string, number>(cod3)) // returns
//console.log(isCoordinate(codfalse)) // returns false

// testing corrdinates equal:

// console.log(coordinatesEqual(cod, reflexiveTest[0]));
// console.log(reflexiveTest.entries().next());

// const func = () => {
//     reflexiveTest.forEach(element => {
//         // console.log(coordinatesEqual(cod, element))
//     });
// }

// func();
