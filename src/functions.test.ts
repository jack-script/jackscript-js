import { JackscriptSet } from './functions';

describe('Jackscript class, Implements methods', () => {

	let testSet : JackscriptSet<number>;

	beforeEach(() => {
		testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
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

	// Test realting to the has and size methods:
	it('Does the element exist in the set.', ()=>{
		expect(testSet.has(1)).toBe(true);
	})
	it('Get the size of the set.', ()=>{
		expect(testSet.size).toBe(6);
	})



});