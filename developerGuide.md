## Developer Guide for Jackscript:

#### Functions I need to get rid of :
- isSubset()
- isSuperset()

#### Functions I need to create:
A relation is a subset of a cartesian product C x D. is called a a relation from C to D.
- relation()... meaning a relation could be anything... could be many thinds...
  I can instead have a function that tests relation..
- IsRelation(from C , to D)
  Note that an empty set can also be a relation. A relation can only have 2 elems(a,b)

Domain and range.
If T is a relation from C to D
dom(T) = C
range(T) = D
The domain of {(2,a), (4,b)} is {2,4} and tis range is {a,b}
The domain and range of an empty set is an empty set.

Properties of relations...
- basically all the methods.

- I now just need to figure out how i am going to structure the lib.