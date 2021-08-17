import {Coordinate} from './coordinate.js';

class Methods{
	static createCartesianProduct = (setA:any, setB:any) =>{
		try{
			if(setA instanceof Set === false || setB instanceof Set === false){
				throw "Parementers must both be of instance: Set";
			}
			if(setA.size < 1|| setB.size < 1){
				throw "Parementer sets must both not be empty";
			}
			setA.forEach((e)=>	{
				if(typeof e !== 'number'){
					throw "Jackscript is a numbers type library, please use numbers only."
				}
			});
			setB.forEach((e)=>	{
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

	static domain = () => {
		let resultSet = new Set();
		return resultSet;
	}

	static range = () => {
		let resultSet = new Set();
		return 100;
	}

	static isSubset = (theSet, theSubset) =>{
		return 100;
	}	
}


export {Methods}