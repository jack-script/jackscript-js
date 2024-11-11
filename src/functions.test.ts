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
	let testSet, testSet2, testSet3 : JackscriptSet<number>;
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

	// Test the domain method with numbers:
	// it('Does the function detect the correct union elements.', ()=>{
	// 	let test : Relation<number, number> = testSet.createCartesian(testSet2);
	// 	let result = new JackscriptSet<number>;
	// 	result.add(1,2,3,4,5,6);
	// 	expect(JackscriptSet.domain(test)).toBe(result);
	// })
	// Test the domain method with strings:

	// Test the range method with numbers:

	// Test the range method with strings:
});


describe('Jackscript class, Subset and Superset tests.', () => {
	let testSet, testSet2, testSet3, testSetDuplicate : JackscriptSet<number>;
	let testSet4, testSet5 : JackscriptSet<string>;

	beforeEach(() => {
		testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
		testSetDuplicate = new JackscriptSet<number>([1,2,3,4,5,6]);
		testSet2 = new JackscriptSet<number>([3,4,5]);
		testSet3 = new JackscriptSet<number>([3,4,5,7]);
		testSet4 = new JackscriptSet<string>("samuel")
		testSet5 = new JackscriptSet<string>("sam");
	});

	// isSubset() method tests:
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSetDuplicate.isSubsetOf(testSet)).toBe(true);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet3.isSubsetOf(testSet)).toBe(false);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet3.isSubsetOf(testSet)).toBe(false);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet5.isSubsetOf(testSet4)).toBe(true);
	})

	// isSuperset() method tests:
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSetDuplicate.isSupersetOf(testSet)).toBe(true);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet3.isSupersetOf(testSet)).toBe(false);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet.isSupersetOf(testSet3)).toBe(false);
	})
	it('Does the function detect is isSubsetOf returns the correct boolean value.', ()=>{
		expect(testSet5.isSupersetOf(testSet4)).toBe(false);
	})
});
