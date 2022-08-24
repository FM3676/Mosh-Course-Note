// Tests are first-class citizens in your source code

const lib = require("../../lib");
const db = require("../../db");

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
