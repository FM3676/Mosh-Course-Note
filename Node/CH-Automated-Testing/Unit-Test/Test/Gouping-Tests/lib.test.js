// Tests are first-class citizens in your source code

const lib = require('../../lib');

describe('absolute', () => {
  it("should return a postive number if input is positive", () => {
      const result = lib.absolute(1);
      expect(result).toBe(1);
  });
  
  it("should return a postive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  
  it("should return a zerro if input is zeero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
  
})

