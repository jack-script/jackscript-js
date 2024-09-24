import { JackscriptSet } from './functions';
import { Coordinate, Relation } from './coordinate';

describe('Jackscript class, Implements methods', () => {

	let testSet : JackscriptSet<number>;
	let testSet2 : JackscriptSet<number>;

	beforeEach(() => {
		testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
		testSet2 = new JackscriptSet<number>([3,4,5]);
	});
	
    // Tests relating to the add method: 
    it('Add a value to the set.', () => {
      expect(testSet.add(4)).toStrictEqual(testSet);
    }),
  
    it('Add a value to the set, but add multiple values at once.',()=>{
      let result = new JackscriptSet<number>([1,2,3,4,5,6,7,8,9]);
      expect(testSet.add(7,8,9)).toStrictEqual(result);
    })

    // Tests relating to the delete method:
    it('Removes values from the set.', ()=>{
      expect(testSet.delete(1,2,3)).toBe(true);
    })
    it('Removes values from the set.', ()=>{
      expect(testSet.delete(33)).toBe(false);
    })

	// Test relating to the has and size methods:
	it('Does the element exist in the set.', ()=>{
		expect(testSet.has(1)).toBe(true);
	})
	it('Get the size of the set.', ()=>{
		expect(testSet.size).toBe(6);
	})

	
	
});

// Static methods testing:
describe('Jackscript class, Static methods', () => {
	let testSet : JackscriptSet<number>;
	let testSet2 : JackscriptSet<number>;
	let testSet3  : JackscriptSet<number>;
	let testSet4, testSet5 : JackscriptSet<string>;

	beforeEach(() => {
		testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
		testSet2 = new JackscriptSet<number>([3,4,5]);
		testSet3 = new JackscriptSet<number>([2]);
		testSet4 = new JackscriptSet<string>("samuel")
		testSet5 = new JackscriptSet<string>("sam");
	});

	// Test the intersect method:
	it('Does the function detect the correct intersect elements.', ()=>{
		let result = new JackscriptSet<number>;
		result.add(3,4,5);
		expect(JackscriptSet.intersect(testSet, testSet2)).toStrictEqual(result);
	})

	// Test the intersect method with numbers:
	it('Does the function detect the correct intersect elements.', ()=>{
		let result = new JackscriptSet<number>;
		result.add(2);
		expect(JackscriptSet.intersect(testSet, testSet3)).toStrictEqual(result);
	})

	// Test the intersect method with strings:
	it('Does the function detect the correct intersect elements.', ()=>{
		let result = new JackscriptSet<string>;
		result.add('s', 'a', 'm');
		expect(JackscriptSet.intersect(testSet4, testSet5)).toStrictEqual(result);
	})

	// Test the union method with numbers:
	it('Does the function detect the correct union elements.', ()=>{
		let result = new JackscriptSet<number>;
		result.add(1,2,3,4,5,6);
		expect(JackscriptSet.union(testSet, testSet2)).toStrictEqual(result);
	})

	// Test the union method with strings:
	it('Does the function detect the correct union elements.', ()=>{
		let result = new JackscriptSet<string>;
		result.add('s', 'a', 'm', 'u', 'e', 'l');
		expect(JackscriptSet.union(testSet4, testSet5)).toStrictEqual(result);
	})
});




describe('Jackscript class, Relation methods', () => {

	// let setA : JackscriptSet<number>;
	// let setB : JackscriptSet<number>;

	// beforeEach(() => {
	// 	let setA = new JackscriptSet<number>();
	// 	let setB = new JackscriptSet<number>();
	// 	setA.add(1,2);
	// 	setB.add(6,7);
	// });

	// it('Create cartesian product', ()=>{
	// 	let myarray : Coordinate<number, number> [] = [[1,6], [1,7], [2,6], [2,7]];
	// 	let result : Relation<number, number> = new JackscriptSet<Coordinate<number, number>>(myarray)
	// 	expect(setA.createCartesian(setB)).toBe(result);
	// })
	
});