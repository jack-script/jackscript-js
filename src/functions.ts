import {Coordinate, Relation} from './coordinate.js';

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

    has(value: T): boolean {
        return this.internalSet.has(value);
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

	// print()

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
		for(let i =0; i < set1.size; i++){
			if (set2.has(set1[i])) {
				result.add(set1[i]);
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
}
  
// class Methods{

// 	/*Domain and range test makes use of coordinates(set of coordinates) */
// 	// takes a set of coordinates, and returns a set of all the x values
// 	static domain = (theset:any) => {
// 		// confirm its a set of coords:
// 		let resultSet = new Set();
// 		theset.forEach((e:Coordinate) => {
// 			resultSet.add(e.x);
// 		});
// 		return resultSet;
// 	}

// 	static range = (theset:any) => {
// 		// confirm its a set of coords:
// 		let resultSet = new Set();
// 		theset.forEach((e:Coordinate) => {
// 			resultSet.add(e.y);
// 		});
// 		return resultSet;
// 	}

	// The following functions, i need to remove or change somehow
	// static isSubset = (mainSet: any, theSubset:any ) =>{
	// 	let tempSubsetArray: number|Coordinate[] = Array.from(theSubset);
	// 	let tempMainSetArray: any = Array.from(mainSet);
	// 	for (let i = 0; i < tempSubsetArray.length; i++) {
	// 		if(tempMainSetArray.includes(tempSubsetArray[i]) === false){
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }	
	// static isSuperset = (theSuperSet: any, theNormalSet:any) =>{
	// 	let theNormalArray: number|Coordinate[] = Array.from(theNormalSet);
	// 	let theSuperArray: any = Array.from(theSuperSet);
	// 	for (let i = 0; i < theNormalArray.length; i++) {
	// 		if(theSuperArray.includes(theNormalArray[i]) === false){
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }

// 	// get relation from setA to setB
// 	static getRelations = (setA:any, setB:any) =>{
// 		let resultSet:any = new Set();
// 		setA.forEach((e:number) => {
// 			setB.forEach((f: number) => {
// 				let tempCoord: Coordinate ={
// 					x: e,
// 					y: f
// 				}
// 				resultSet.add(tempCoord);
// 			});
// 		});
// 		return resultSet;
// 	}

// 	// make sure that, for A*A sets, second param is a relation on the first param
// 	static isRelation = (setA:any, setB:any): boolean =>{
// 		let cartesianSet = Methods.getRelations(setA, setA);
// 		let setBArray = Array.from(setB);
// 		for (let i = 0; i < setBArray.length; i++) {
// 			if(!cartesianSet.has(setBArray[i])){
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// }


export { isValidSet, JackscriptSet}