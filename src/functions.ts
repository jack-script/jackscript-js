import {Coordinate, Relation} from './coordinate.js';
import { isCoordinateSet, checkRelationType } from './coordinate';

// interface JackscriptSet<T extends Set<T>>{};

// function that checks is a set is a valid set or not:

// refactoring: I dont think i need to check if there is a valid set or not if i force user to 
// have a Set as a param

const isValidSet = <T>(theset:Set<T>): boolean =>{
	if(theset instanceof Set === false){
		throw "Parementers must both be of instance: Set";
	}
	return true;
}

class JackscriptSet<T> implements Set<T> {
    private internalSet: Set<T>;

    constructor(values?: Iterable<T> | null) {
        this.internalSet = new Set(values ?? []);
    }

	internalset(): any{
		return this.internalSet;
	}

    add(...value: T[]): this {
		
		value.forEach((value: T)=>{
			this.internalSet.add(value);
		})
        return this;
    }

    clear(): void {
        this.internalSet.clear();
    }

    delete(...value: T[]): boolean {
		let exists: boolean = false;
		value.forEach((value: T)=>{
			exists = this.internalSet.delete(value);
		})
        return exists;
    }

    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
        this.internalSet.forEach(callbackfn, thisArg);
    }

    has(value: T ): boolean {
        return this.internalSet.has(value);
    }
	
	// hasNew
	hasNew(set: Relation<T, any>): boolean{

		// lets first convert the internal set to a Relation:
		


		if(isCoordinateSet(set) && isCoordinateSet(this.internalSet.values())){
			let val = set.values();
		}
		
	}

    get size(): number {
        return this.internalSet.size;
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.internalSet[Symbol.iterator]();
    }

    entries(): IterableIterator<[T, T]> {
        return this.internalSet.entries();
    }

    keys(): IterableIterator<T> {
        return this.internalSet.keys();
    }

    values(): IterableIterator<T> {
        return this.internalSet.values();
    }

    [Symbol.toStringTag]: string = 'JackscriptSet';

	/*Start of the additional methods*/
	createCartesian<V>(newSet: Set<V>): Relation<T,V> {
		// if the new set is empty, then return this set:
		if(newSet.size == 0){
			return this;
		}
		// create a set of coordinates and a tuple:
		let resultSet = new JackscriptSet<Coordinate<T, V>>();
		let mytuple : [T, V];
		
		this.forEach((i: T) => {
			newSet.forEach((j: V) => {
				mytuple = [ i, j ];
				resultSet.add(mytuple);	
			});
		});
		return resultSet;
	}

	print(): void{
		for(let item of this.internalSet){
			console.log(item);
		}
	}

	static intersect<T>(set1: Set<T>, set2: Set<T>): JackscriptSet<T> {
		const result = new JackscriptSet<T>();
		for(let item of set1){
			if (set2.has(item)) {
				result.add(item);
			}
		}
		return result;
	}
	
	static union<T>(set1: Set<T>, set2: Set<T>): JackscriptSet<T> {
		const result = new JackscriptSet<T>(set1);
		for(let item of set2){
			result.add(item);
		}
		return result;
	}

	static domain<T, V>(theset:Relation<T, V>): Set<T>{
		let result = new Set<T>();
		for(let item of theset.internalSet){
			result.add(item[0]);
		}
		return result;
	}

	static range<T, V>(theset:Relation<T, V>): Set<T>{
		let result = new Set<T>();
		for(let item of theset.internalSet){
			result.add(item[1]);
		}
		return result;
	}

	// isSubsetOf:
	isSubsetOf(theSet: JackscriptSet<T>): Boolean{
		for (let item of this.internalSet) {
			if(theSet.internalSet.has(item) === false){
				return false;
			}
		}
		return true;
	}
	// isSupersetOf():
	isSupersetOf(theSet: JackscriptSet<T>): Boolean{
		for (let item of theSet.internalSet) {
			if(this.internalSet.has(item) === false){
				return false;
			}
		}
		return true;
	}

	isReflexive(theSet: JackscriptSet<Coordinate<T, any>>) : Boolean {
		let testCoordinate: Coordinate<T,T>;

		let it = theSet.internalSet.values();
		var first = it.next();

		for(let elem of this.internalSet){
			testCoordinate = [elem, elem];
			
			if(!theSet.has(testCoordinate)){
				console.log("i have found a mismatch");
				console.log("elem: ", testCoordinate, " and theSet.Internalset is : ", theSet.internalSet);
				console.log("The type of the testCoordinate is : "+typeof testCoordinate+ " and the type of the internals set element is : "+ typeof first);
				//console.log(testCoordinate === theSet.internalSet[0])
				
				return false;
			}
		}
		return true;
	}

	isIrreflexive(theSet: JackscriptSet<Coordinate<T, any>>) : Boolean {
		let testCoordinate: Coordinate<T,T>;

		for(let elem of this.internalSet){
			testCoordinate = [elem, elem];

			if(theSet.has(testCoordinate)){
				return false;
			}
		}
		return true;
	}

	isSymmetric(theSet: JackscriptSet<T>) : Boolean {
		return true;
	}

	isAntisymmetric(theSet: JackscriptSet<T>) : Boolean {
		return true;
	}

	isTransitive(theSet: JackscriptSet<T>) : Boolean {
		return true;
	}
}

export { isValidSet, JackscriptSet}