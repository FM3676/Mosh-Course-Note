// Tests are first-class citizens in your source code

const lib = require("../../lib");
const db = require("../../db");
const mail = require("../../mail");

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {

    // In Jest, we have a method to create mock function.
    // So what we get here is a mock function mock function. 
    // This is like a function that we can call like this, but this function has no implementation in other words, it's a function with no code.
    const mockFunction = jest.fn();
    // mockFunction.mockReturnValue(1);
    // mockFunction.mockRejectedValue(new Error('....'))
    mockFunction.mockResolvedValue(1);
    const result = await mockFunction();

    /* 
      db.getCustomerSync = function (customerId) {
        return { email: "a" };
      }; 
    */
    db.getCustomerSync = jest.fn().mockResolvedValue({ email: 'a' });

    /* 
      let mailSent = false;
      mail.send = function (email, message) {
        mailSent = true;
      }; 
    */
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    // expect(mailSent).toBe(true);
    expect(mail.send).toHaveBeenCalled();


    // Sometimes you also want to check the arguments that are passed to the method.
    expect(mail.send).toHaveBeenCalledWith('a', '...');
    // We shouldn't check for the exact equality. So this approach works well when the arguments you pass through a method are not strings. Like Numbers Boolean's and so on.
    // If you still want to check the arguments that are passed through that method. You need to use a different approach.
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});


    