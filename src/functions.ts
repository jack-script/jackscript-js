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

			let tempCoordinate:Coordinate = {x:0, y:0};
			let tempSet = new Set();
			
			setA.forEach((e)=>{
				let a = {a: 100, b:100}
				tempSet.add(a);
			})

			for(let i = 0; i < setA.size; i++){
				for(let j = 0; j < setA.size; j++){
					tempCoordinate = {
						x:setA[i], 
						y:setB[j]
					}
					// tempSet.add(tempCoordinate);
				}
			}
			return tempSet;

		}catch(err){
			console.log(err);
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