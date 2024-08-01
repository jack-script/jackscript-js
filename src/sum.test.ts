import add from './sum';

describe('sum function', () => {
    it('adds two numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });
  });