### About jackscriptjs
Jackscriptpy is a javascript math library of sets. It covers a few useful functions involving sets that are otherwise not available in the standard Javascript library.

**Version 0.2.0**  - [Change log](CHANGELOG.md)

##### Installation
install jackscript-js
`npm i jackscriptjs --save`

```javascript
import {Coordinate} from 'jackscriptjs';
```
##### How this library works:
This library is about sets.
This library is meant to be used with numbers and coordinates. Meaning when a user of this library inserts elements inside the sets, it should be that they inserts numbers and not strings or other types.
Coordinates are created as follows:
```typescript 
let myCoord:Coordinate = {
	x: 1,
	y:2
}
```   
From the above example, a coordinate is being created(which is a normal object in javascript) but has the Coordinate type(if using typescript)


#### How to create a set:
Sets are created how you would normally create your set in javascript; as said earlier This library consists of a set of functions and doesn't make any new data structures.
Therefore all set methods from the javascript standard library will work like usual
```javascript 
mySet = set()
```
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

#### Basics
```javascript
// add a coordinate to a set, using the coordinate created above:
mySet.add(myCoord);

// As expected, the standard library methods will work as usual
myset.clear()
print(myset)  // returns set(0)
```

#### Checking whether a set is a subset of another...
```javascript
let set1 = {2, 5, 6}
let set2 = {2, 5, 6, 9}
```
Looking at the above code; its clear that set1 should be the subset of set2, we get our answer by calling the function `isSubset()`
```javascript
answer = isSubset(set1, set2) // returns true 
print(answer) // prints true
```

<h5>Simmilarly we can test if a set is a superset of another</h5>

```javascript
set1 = {2, 5, 6}
set2 = {2, 5, 6, 9}

answer = isSuperset(set2, set1) // returns true 
print(answer) // prints true
```
<h5>Create a cartesian product</h5>

```javascript
//create a cartesian product by calling the createCartesian() function
```
