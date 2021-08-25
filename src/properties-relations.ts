import {Coordinate} from './coordinate.js';

declare global{
	interface Set<T>{
		remove(o: T): Set<T>;
		myUcase(): void;
		isSomething(o:T): boolean;
	}
}

const isReflexive = (mainSet:any, relationSet:any) : boolean => {
	// create ordered pairs and check if they exist in the relationSet:
	let tempMainSet :any = Array.from(mainSet);
	let tempArray:any = [];
	let count = 0;
	mainSet.forEach((e: number) => {
		let tempCoord :Coordinate ={
			x: e,
			y: e
		}
		tempArray[count] = tempCoord;
		count++;
	});

	//convert relation set to an array and iterate over it:
	let tempRelationSet : any = Array.from(relationSet);
	for (let i = 0; i < tempRelationSet.length; i++) {
		console.log(tempRelationSet[i]);
		if(!tempArray.includes(tempRelationSet[i]) ){
			return false;
		}
	}
	return true;
}

const isSymmetric = (relationSet:any) : boolean => {
	let relationSetArray: any = Array.from(relationSet);
	for(let i = 0 ; i < relationSetArray.length; i++){
		if (relationSetArray.filter(e => e.x === relationSetArray[i].y && e.y === relationSetArray[i].x).length > 0) {
			// do nothing
		}else{
			return false;
		}

	}
	return true;
}

const isIrreflexive = () : boolean => {
	return true;
}

// Basically mirror coordinates shouldnt live in the set
const isAntiSymmetric = (relationSet:any) : boolean => {
	// this set can only accept a set that only has coordinates... write a function to ensure this

	let relationSetArray: any = Array.from(relationSet);
	for(let i = 0 ; i < relationSetArray.length; i++){
		if(relationSetArray[i].x === relationSetArray[i].y){
			// skip these because (100, 100) doesnt rule the set non AntiSymmetric
			continue;
		}
		if (relationSetArray.filter(e => e.x === relationSetArray[i].y && e.y === relationSetArray[i].x).length > 0) {
			return false;
		}else{
			// do nothing
		}

	}
	return true;
}

const isTransitive = (relationSet:any) : boolean => {
	// this set can only accept a set that only has coordinates... write a function to ensure this

	let relationSetArray: any = Array.from(relationSet);
	for(let i = 0 ; i < relationSetArray.length; i++){
		console.log(relationSetArray[i]);
		for(let j = 0; j < relationSetArray.length; j++){
			//console.log(relationSetArray[i], relationSetArray[j]);
			// makes use of the first objects y coord and the second objects x coordinate
			// if y and x are the same... then ...else disregard:
			if(relationSetArray[i].y === relationSetArray[j].x){
				// create a coordinate here and check to see if it exists in the set
				let tempCoord : Coordinate ={
					x: relationSetArray[i].x,
					y: relationSetArray[j].y
				}

				if (relationSetArray.filter(e => e.x === tempCoord.x && e.y === tempCoord.y).length > 0) {
					// found one... good
				}else{
					// no such coordinate found in the set...
					return false;
				}
			}
		}
		

	}
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