
const { printNumbers, printFigure, sortIntegers  } = require('../src/index');

describe('printNumbers', () => {
    it('should print numbers from 1 to n', () => {
        const spy = jest.spyOn(console, 'log');
        printNumbers(5);
        expect(spy).toHaveBeenCalledWith(1);
        expect(spy).toHaveBeenCalledWith(2);
        expect(spy).toHaveBeenCalledWith(3);
        expect(spy).toHaveBeenCalledWith(4);
        expect(spy).toHaveBeenCalledWith('Knose');
        spy.mockRestore();
    });
    it('should print Knose for multiples of 5', () => {
        const spy = jest.spyOn(console, 'log');
        printNumbers(10);
        expect(spy).toHaveBeenCalledWith('Knose');
        spy.mockRestore();
    });
    it('should print Pet Care Made Easy for multiples of 7', () => {
        const spy = jest.spyOn(console, 'log');
        printNumbers(14);
        expect(spy).toHaveBeenCalledWith('Pet Care Made Easy');
        spy.mockRestore();
    });
    it('should print KnosePet Care Made Easy for multiples of 5 and 7', () => {
        const spy = jest.spyOn(console, 'log');
        printNumbers(35);
        expect(spy).toHaveBeenCalledWith('KnosePet Care Made Easy');
        spy.mockRestore();
    });
});

describe("printFigure", () => {
    describe("with valid input", () => {
      beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
      });
      
      afterEach(() => {
        console.log.mockRestore();
      });
      
      it("should print figure when n=1", () => {
        printFigure(1);
        expect(console.log).toHaveBeenCalledWith("*");
      });
  
      it("should print figure when n=4", () => {
        printFigure(4);
        expect(console.log).toHaveBeenNthCalledWith(1, "---*");
        expect(console.log).toHaveBeenNthCalledWith(2, "--**");
        expect(console.log).toHaveBeenNthCalledWith(3, "-***");
        expect(console.log).toHaveBeenNthCalledWith(4, "****");
      });
    });
  
    describe("with invalid input", () => {
      beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
      });
      
      afterEach(() => {
        console.log.mockRestore();
      });
      
      it("should print error message when n=0", () => {
        printFigure(0);
        expect(console.log).toHaveBeenCalledWith("Please enter a positive number");
      });
  
      it("should print error message when n=-1", () => {
        printFigure(-1);
        expect(console.log).toHaveBeenCalledWith("Please enter a positive number");
      });
    });
  });
  

describe('sortIntegers', () => {
    it('should sort an array of integers', () => {
        const arr = [6, 7, 8, 9, 10,1, 2, 3, 4, 5, ];
        const result = sortIntegers(arr);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should throw an error if input is not an array', () => {
        expect(() => sortIntegers(1)).toThrowError('Input is not an array');
    });
});