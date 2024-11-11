import { JackscriptSet } from './functions';
import { Coordinate, Relation } from './coordinate';
import {isCoordinate, coordinatesEqual} from './typechecker'

describe('Coordinates typechecker methods.', () => {

	let coordinate1 : Coordinate<number, number> = [1,1];
    let coordinate2 : Coordinate<number, number> = [2,2];

	beforeEach(() => {
		coordinate1 = [1,1];
        coordinate2 = [2,2];
	});
	
    // test if variables are valide coordinates or not: 
    it('Value is a coordinate.', () => {
    //   expect(isCoordinate(coordinate1)).toBe(true);
    })
  
   
});
