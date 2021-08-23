import {Coordinate} from './coordinate.js';

// function that checks is a set is a valid set or not:
const isValidSet = (theset:any): boolean =>{
	try{
		if(theset instanceof Set === false){
			throw "Parementers must both be of instance: Set";
		}
		if(theset.size < 1){
			throw "Parementer sets must both not be empty";
		}
	}catch(err){
		console.log("Type/size error: "+err);
		return false;
	}
	return true;
}

class Methods{
	static createCartesianProduct = (setA:any, setB:any) =>{
		try{
			if(setA instanceof Set === false || setB instanceof Set === false){
				throw "Parementers must both be of instance: Set";
			}
			if(setA.size < 1|| setB.size < 1){
				throw "Parementer sets must both not be empty";
			}
			setA.forEach((e: number)=>	{
				if(typeof e !== 'number'){
					throw "Jackscript is a numbers type library, please use numbers only."
				}
			});
			setB.forEach((e: number)=>	{
				if(typeof e !== 'number'){
					throw "Jackscript is a numbers type library, please use numbers only."
				}
			});

			// start if there are no more errors to be caught:
			let tempCoordinate:Coordinate = {x:0, y:0};
			let tempSet = new Set();
			
			setA.forEach(i => {
				setB.forEach(j => {
					tempCoordinate = {
						x:i, 
						y:j
					}
					tempSet.add(tempCoordinate);	
				})
			})
			return tempSet;
		}catch(err){
			console.log("Type error: "+err);
		}
	}

	/*Domain and range test makes use of coordinates(set of coordinates) */
	// takes a set of coordinates, and returns a set of all the x values
	static domain = (theset:any) => {
		// confirm its a set of coords:
		let resultSet = new Set();
		theset.forEach((e:Coordinate) => {
			resultSet.add(e.x);
		});
		return resultSet;
	}

	static range = (theset:any) => {
		// confirm its a set of coords:
		let resultSet = new Set();
		theset.forEach((e:Coordinate) => {
			resultSet.add(e.y);
		});
		return resultSet;
	}

	static isSubset = (mainSet: any, theSubset:any ) =>{
		let tempSubsetArray: number|Coordinate[] = Array.from(theSubset);
		let tempMainSetArray: any = Array.from(mainSet);
		for (let i = 0; i < tempSubsetArray.length; i++) {
			if(tempMainSetArray.includes(tempSubsetArray[i]) === false){
				return false;
			}
		}
		return true;
	}	

	static isSuperset = (theSuperSet: any, theNormalSet:any) =>{
		let theNormalArray: number|Coordinate[] = Array.from(theNormalSet);
		let theSuperArray: any = Array.from(theSuperSet);
		for (let i = 0; i < theNormalArray.length; i++) {
			if(theSuperArray.includes(theNormalArray[i]) === false){
				return false;
			}
		}
		return true;
	}
}


export {Methods}