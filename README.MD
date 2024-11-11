### About jackscriptjs
Jackscript-js is a javascript math library of sets. It covers a few useful functions involving sets that are otherwise not available in the standard Javascript library.

**Version 2.1.2**  - [Change log](CHANGELOG.md)

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

The Coordinate declaration is as follows: This is basically a tuple.
```typescript 
type Coordinate<T, V> = [T, V];
```   
We also introduce a type called Relation which is of the type `Jacksript` of which we introduce in the next section:
```typescript
type Relation<T, V> = JackscriptSet<Coordinate<T, V>> | JackscriptSet<T>;
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

#### Print your set:
This is how you print your set:
```typescript
let a = new JackscriptSet<number>();
a.add(1,2,3); 
a.print();
```

This will return:
```
1
2
3
```
### Static set methods:
#### Intersects, union, domain, range:
```javascript

let setA = new JackscriptSet<number>();
let setB = new JackscriptSet<number>();
setA.add(1,2,6);
setB.add(6,7);

// setC is a union of setA and B:
let setC = JackscriptSet.intersect(setA, setB);
setC.print(); // returns 6

let setD_relation: Relation<number, number> = setA.createCartesian(setB);

let domainVariable = JackscriptSet.domain(setD_relation);
let rangeVariable = JackscriptSet.range(setD_relation);
console.log(domainVariable); // returns 1,2,6
console.log(rangeVariable); // returns 6,7
```

#### IsSubsetOf() and IsSupersetOf()
IsSubsetOf() and IsSuperSetOf() are used exactly how you would if your were to use Javascript Sets.

```javascript
let mySet = new JackscriptSet<number>([3,4,5,7]);
let mySetSubset = new JackscriptSet<number>([3,4]);

console.log(mySetSubset.isSubsetOf(mySet)); // prints true
console.log(mySet.isSupersetOf(mySetSubset)); // prints true
```

`-----------------------------------`


