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

const isSymmetric = (mainSet:any, relationSet:any) : boolean => {
	console.log(relationSet);

	// let mainSetArray :any = Array.from(mainSet);
	let relationSetArray: any = Array.from(relationSet);
	for(let i = 0 ; i < relationSetArray.length; i++){
		if(relationSetArray[i].hasOwnProperty('x')  ){
			
			// create coordinate
			let tempCoordinate : Coordinate = {
				x: relationSetArray[i].y, 
				y: relationSetArray[i].x
			}
			console.log(tempCoordinate +' '+relationSetArray[i]);

			if(relationSetArray.includes(tempCoordinate) === false ){
				return false;
			}
		}
	}
	
	return true;
}

const isIrreflexive = () : boolean => {
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