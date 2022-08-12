const Fizzbuz = require('./Fizzbuz');

describe('Fizzbuz class', () => {
    
    const instance = new Fizzbuz();
    
    beforeEach(() => {
        // console.log('beforeEach');
      })
        console.log(instance.print());
    
        test('getArrayResult[1] return 1', () => {
          expect(instance.getArrayResult[1]).toEqual(1);
        });
        test('getArrayResult[98] return 98', () => {
          expect(instance.getArrayResult[98]).toEqual(98);
        });
        test('getArrayResult[9] return 9', () => {
          expect(instance.getArrayResult[9]).toEqual('Fizz');
        });
        test('getArrayResult[25] return Buzz', () => {
          expect(instance.getArrayResult[25]).toEqual('Buzz');
        });
        test('getArrayResult[45] return FizzBuzz', () => {
          expect(instance.getArrayResult[45]).toEqual('FizzBuzz');
        });
        test(`buildStringResult().split('\\n')[44] toEqual 45`, () => {
          expect(instance.buildStringResult().split('\n')[44]).toEqual('FizzBuzz');
        });
        test(`print() return regexp`, () => {
          expect(instance.print()).toMatch(/^1\n2\nFizz\n4\nBuzz\n.||\n*Buzz^/);
        });
})