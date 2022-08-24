// Tests are first-class citizens in your source code

const lib = require("../../lib");

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toBe({id : 1 , price : 10}) ----> This will be failed, because toBe() will compare this two object location in memory, so we should use toEqual()
    // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
    expect(result).toEqual({ id: 1, price: 10 });
    // With this matcher, we can act only the properties that we're interesting in.
    // For example, is this object has more than 50 properties, we can't write down all the properties in arguments. So this is why we use toMatchObject()
    expect(result).toMatchObject({ id: 1, price: 10 });
    // There is also another matcher
    expect(result).toHaveProperty("id", 1);
  });
});
