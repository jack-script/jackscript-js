import { JackscriptSet } from './functions';
import { Coordinate, Relation } from './coordinate';
import {isCoordinate, coordinatesEqual} from './typechecker'

describe('Coordinates typechecker methods.', () => {

	let coordinate1 : Coordinate<number, number>;
    let coordinate2 : Coordinate<number, number>;
    let coordinate3 : Coordinate<string, number>;
    let coordinate4 : Coordinate<string, string>;
    let coordinate5fake = [1,1,2];

	beforeEach(() => {
		coordinate1 = [1,1];
        coordinate2 = [2,2];
        coordinate3 = ["a",1];
        coordinate4 = ["a", "b"];
	});
	
    // test if variables are valide coordinates or not: 
    it('Value is a coordinate.', () => {
      expect(isCoordinate(coordinate1)).toBe(true);
    })
    it('Value is a coordinate.', () => {
        expect(isCoordinate(coordinate2)).toBe(true);
    })
    it('Value is a coordinate.', () => {
        expect(isCoordinate(coordinate3)).toBe(true);
    })
    it('Value is a coordinate.', () => {
        expect(isCoordinate(coordinate4)).toBe(true);
    })
    it('Value is NOT a coordinate.', () => {
        expect(isCoordinate(coordinate5fake)).toBe(false);
    })
   
});



