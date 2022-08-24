// Tests are first-class citizens in your source code

const lib = require("../lib");
const db = require("../db");
const mail = require('../mail');

describe("absolute", () => {
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
});

describe("greet", () => {
  it("should return the grretting message", () => {
    const result = lib.greet("Mosh");
    expect(result).toMatch(/Mosh/);
    expect(result).toContain("Mosh"); // Use it if you don't want to use Regex
  });
});

describe("getCurreencies", () => {
  it("should return ssupporteed curreencis", () => {
    const result = lib.getCurrencies();

    // Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    // Proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toBe({id : 1 , price : 10}) ----> This will be failed, because toBe() will compare this two object location in memory, so we should use toEqual()
    expect(result).toEqual({ id: 1, price: 10 });
    // With this matcher, we can act only the properties that we're interesting in.
    // For example, is this object has more than 50 properties, we can't write down all the properties in arguments. So this is why we use toMatchObject()
    expect(result).toMatchObject({ id: 1, price: 10 });
    // There is also another matcher
    expect(result).toHaveProperty("id", 1);
  });
});

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

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    // Replace real implementation of getCustomerSync method with fake implementation.
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer...");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = function (customerId) {
      return { email: "a" };
    };

    let mailSent = false;
    mail.send = function (email, message) {
      mailSent = true;
    };

    lib.notifyCustomer({ customerId: 1 });

    expect(mailSent).toBe(true);
  });
});
