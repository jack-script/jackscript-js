### About jackscriptjs
Jackscript-js is a javascript math library of sets. It covers a few useful functions involving sets that are otherwise not available in the standard Javascript library.

**Version 1.0.0-Apha**  - [Change log](CHANGELOG.md)

##### Installation
install jackscript-js
`npm i jackscriptjs --save`

```javascript
import {Coordinate} from 'jackscriptjs';
```
##### How this library works:
This library is about sets.
Jackscript implements Set.
This library is Generic, meaning you can use any primitive. You are allowed to use strings, numbers, or any other type.

The Coordinate Declaration is as follows: This is basically a tuple.
```typescript 
type Coordinate<T, V> = [T, V];
```   


#### How to create a set:
Sets are created how you would normally create your set in javascript.
Therefore all set methods from the javascript standard library will work like usual
```javascript 
let mySet = set()
```

However, we also introduce a new Set called `JackscriptSet` and this is how you use it:
```javascript

// first import the set and the coordinate type:
import {JackscriptSet, Coordinate} from 'jackscriptjs';

// instantiate your set:
let a = new JackscriptSet<number>();
let b = new JackscriptSet<number>();

// use the usual set methods, like you would in an other javascipt program:
a.add(100);
a.add(200)
console.log(a);
```
This will return:
```
JackscriptSet {
  internalSet: Set(2) { 100, 200 },
  [Symbol(Symbol.toStringTag)]: 'JackscriptSet'
}
```

A minor difference between Set() and JackscriptSet(), is that in Jackscript the methods `add()` and `delete()` are a bit different.
In Set(), you are only allowed to pass in one argument for these methods. Whereas in Jackscript, you may pass in multiple arguments:
```javascript
import {JackscriptSet, Coordinate} from 'jackscriptjs';

let a = new JackscriptSet<number>();
a.add(1,2,3); // this is allowed
a.delete(2,3); // this is also allowed

// All other Set methods are the same. 
```
...And that is the core difference between Set and Jacksript set. 





#### All functions:
This library consists of 2 sets of functions
1. The Functions that can be called normally
2. The properties of relations that are callable from a class
```typescript
import {Coordinate} from 'jackscriptjs'
import {Methods} from 'jackscriptjs.js';
import { isAntiSymmetric, 
isIrreflexive, 
isReflexive, 
isSymmetric, 
isTransitive } from 'jackscriptjs'; // properties of relations
```

The `Methods` object includes these functions:
```typescript
Methods.createCartesianProduct()
Methods.domain()
Methods.range()
Methods.isSubset()
Methods.isSuperset()
Methods.getRelations()
Methods.isRelation()
```

### Basics
```javascript
// Add a coordinate to a set, using the coordinate created above:
mySet.add(myCoord);

// As expected, the standard library methods will work as usual
myset.clear()
console.log(myset)  // returns set(0)
```

#### Checking whether a set is a subset of another...
```javascript
let set1 = {2, 5, 6}
let set2 = {2, 5, 6, 9}
```
Looking at the above code; its clear that set1 should be the subset of set2, we get our answer by calling the function `isSubset()`
```javascript
answer = Methods.isSubset(set1, set2) // returns true 
console.log(answer) // prints true
```

<h5>Simmilarly we can test if a set is a superset of another</h5>

```javascript
set1 = {2, 5, 6}
set2 = {2, 5, 6, 9}

answer = Methods.isSuperset(set2, set1) // returns true 
console.log(answer) // prints true
```

### Advanced
Domain makes use of coordinates(set of coordinates) ,takes a set of coordinates, and returns a set of all the x values

```typescript
let testSet = new Set();
let a :Coordinate ={
	x: 100,
	y: 200
}
let b :Coordinate ={
	x: 400,
	y: 600
}

testSet.add(a);
testSet.add(b);

console.log(domain); // returns set([100, 400])
console.log(range); // returns set([200, 600])
```

