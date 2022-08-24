// Tests are first-class citizens in your source code

const lib = require("../../lib");

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    // Null
    // undefined
    // Nan
    // ""
    // false
    /* 
      This work won't make sense.
        const result = lib.registerUser(null);
        expect().toThrow();
      Because we won't get the result from this function, so we can't expect the result to throw an exception.
      So when testing an exceptions, we're using another approaches.
    */
    expect(() => lib.registerUser(null)).toThrow();
    // In this test, are test is only an single line. So we can easily repeat this expection with different value.
    // However, in real more example, our test function may be few lines long.
    // In that case, we should use Parameterised Testing.
    // This is the approaches for Parameterised Testing with Jest version under 23.
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => lib.registerUser(a)).toThrow();
    });

    // If your Jest version is 23 or above, or lower version with package jest-each
    // Visit the Unit-Test-Methods.md, or https://www.jianshu.com/p/428919f2a954
    
  });

  // Parameterised Testing for Jest with virsion hgiher than 23.
  it.each([null, undefined, NaN, "", 0, false])("", (v) =>
    expect(() => lib.registerUser(a)).toThrow()
  );

  it("should return a user pbject if valid username is passed", () => {
    const result = lib.registerUser("Fan");
    expect(result).toMatchObject({ username: "Fan" });
    expect(result.id).toBeGreaterThan(0);
  });
});
