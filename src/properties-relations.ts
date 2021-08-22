import {Coordinate} from './coordinate.js';

declare global{
	interface Set<T>{
		remove(o: T): Set<T>;
		myUcase(): void;
		isSomething(o:T): boolean;
	}
}

const isReflexive = () : boolean => {
	// i need to code the isSubset function and use it here first:
	return true;
}

const isIrreflexive = () : boolean => {
	return true;
}

const isSymmetric = () : boolean => {
	return true;
}

const isAntiSymmetric = () : boolean => {
	return true;
}

const isTransitive = () : boolean => {
	return true;
}

const isInverseRelation = (): boolean =>{
	return true;
}


export {	
	isReflexive,
	isIrreflexive,
	isSymmetric,
	isAntiSymmetric,
	isTransitive,
	isInverseRelation
}

// let myset = new Set(111,222);
// let gang:boolean = myset.isReflexive(tempset);